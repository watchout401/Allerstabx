
from fastapi import FastAPI, HTTPException, Query, Depends
from database import spices_collection 
from database import spice_info_collection 
from database import spice_images_collection
from database import associations_collection
from database import disease_collection
from bson import ObjectId
import base64
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
import os
import re

app = FastAPI()
IMAGES_DIR = '/Users/watchout401/Downloads/SecondSem/CAPSTONE/spiceRx-new-main/Dataset/spices_images'

app.mount("/images", StaticFiles(directory=IMAGES_DIR), name="images")

# Enable CORS for frontend connection
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5174"],  # Change if using a different frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Helper Functions for Validation
def validate_text(query: str, field: str):
    """Ensures the query is a valid string."""
    if not isinstance(query, str):
        raise HTTPException(status_code=400, detail=f"{field} must be a string")
    return query.strip()

def validate_taxid(query: str):
    """Ensures the query is a valid number for NCBI Tax ID."""
    if not query.isdigit():
        raise HTTPException(status_code=400, detail="NCBI Tax ID must be numeric")
    return int(query)

@app.get("/associations/{taxid}")
async def get_associations(taxid: int):
    """Fetch disease associations for a spice by TAX ID."""
    # Filter associations by TAX ID
    associations = await associations_collection.find({"TAX ID": taxid}).to_list(100)
    
    if not associations:
        raise HTTPException(status_code=404, detail="No associations found for this TAX ID")

    # Count positive/negative associations per disease
    disease_counts = {}
    for assoc in associations:
        mesh_id = assoc["Disease ID"]
        if mesh_id not in disease_counts:
            disease_counts[mesh_id] = {
                "Positive": 0,
                "Negative": 0,
                "Disease Title": await get_disease_title(mesh_id),  # Fetch disease title
            }
        disease_counts[mesh_id][assoc["Labels"]] += 1
    
    return {
        "taxid": taxid,
        "diseases": [
            {
                "MeSH ID": mesh_id,
                "Disease Title": details["Disease Title"],
                "Positive Associations": details["Positive"],
                "Negative Associations": details["Negative"]
            } for mesh_id, details in disease_counts.items()
        ]
    }

async def get_disease_title(mesh_id: str):
    """Fetch disease title by MeSH ID."""
    disease = await disease_collection.find_one({"Disease ID": mesh_id})
    return disease["Disease Title"] if disease else "Unknown Disease"
#  Fetch All Spices (Limit 100)



@app.get("/spices")
async def get_spices():
    spices = await spices_collection.find().to_list(100)
    for spice in spices:
        spice["_id"] = str(spice["_id"])  # Convert ObjectId to string
    return spices

# Get a Spice by Common Name
@app.get("/spices/{common_name}")
async def get_spice(common_name: str):
    common_name = validate_text(common_name, "common_name")
    spice = await spices_collection.find_one({"common_name": common_name})
    if not spice:
        raise HTTPException(status_code=404, detail="Spice not found")

    spice["_id"] = str(spice["_id"])  # Convert ObjectId to string
    return spice

#  Autocomplete API for Common Name, Scientific Name, and NCBI Tax ID
@app.get("/spices/autocomplete/")
async def autocomplete_spices(
    query: str = Query(..., min_length=1),
    field: str = Query("common_name")
):
    if field not in ["common_name", "scientific_name", "ncbi_tax_id"]:
        raise HTTPException(status_code=400, detail="Invalid field for autocomplete")

    #  AutoComplete for NCBI Tax ID (Numeric Matching)
    if field == "ncbi_tax_id":
        tax_id = validate_taxid(query)  # Ensure only numbers
        start = tax_id
        end = start + 10 ** (len(query))  # Get numbers in range

        spices = await spices_collection.find(
            {"ncbi_tax_id": {"$gte": start, "$lt": end}}
        ).sort("ncbi_tax_id", 1).limit(10).to_list(10)

        return [{"ncbi_tax_id": spice["ncbi_tax_id"]} for spice in spices]

    #  AutoComplete for Common Name & Scientific Name (Returning Only First Name)
    else:
        query = validate_text(query, field)
        regex = re.compile(f"^{query}", re.IGNORECASE)  # Match names starting with query
        spices = await spices_collection.find({field: {"$regex": regex}}).sort(field, 1).limit(10).to_list(10)

        results = []
        for spice in spices:
            value = spice.get(field, "")

            if isinstance(value, list) and value:
                value = value[0]  # Get first name from the list
            elif isinstance(value, str) and "," in value:
                value = value.split(",")[0].strip()  # Take first name if comma-separated

            results.append({field: value})

    return results

#  Spice Search Endpoint (Ensures at least one field is provided)
def validate_text(value: str, field_name: str):
    """Validates that the input contains only letters, spaces, or hyphens."""
    if not re.match(r"^[a-zA-Z\s-]+$", value):
        raise HTTPException(status_code=400, detail=f"Invalid {field_name}: Only letters, spaces, or hyphens allowed.")
    return value.strip()

def validate_taxid(value: str):
    """Validates that the NCBI Tax ID contains only digits."""
    if not value.isdigit():
        raise HTTPException(status_code=400, detail="Invalid NCBI Tax ID: Only digits are allowed.")
    return int(value)  # Convert to integer for proper MongoDB query

@app.get("/spices/search/")
async def search_spices(
    common_name: str = Query(None),
    
    scientific_name: str = Query(None),
    ncbi_tax_id: str = Query(None)
):

    #  Ensure at least one search field is provided
    if not any([common_name, scientific_name, ncbi_tax_id]):
        raise HTTPException(status_code=400, detail="At least one search field is required")

    query_filter = {}

    if common_name:
        common_name = validate_text(common_name, "common_name")
        query_filter["common_name"] = {"$regex": re.compile(f"{common_name}", re.IGNORECASE)}

    if scientific_name:
        scientific_name = validate_text(scientific_name, "scientific_name")
        query_filter["scientific_name"] = {"$regex": re.compile(f"{scientific_name}", re.IGNORECASE)}

    if ncbi_tax_id:
        ncbi_tax_id = validate_taxid(ncbi_tax_id)
        query_filter["ncbi_tax_id"] = ncbi_tax_id  # Exact match for tax ID since it's numeric
    
    
    
       

    spices_info  = await spices_collection.find(query_filter).limit(10).to_list(10)

    #  Convert ObjectId & ensure only first name is returned
    results = []
    for spice in spices_info :
        spice["_id"] = str(spice["_id"])
        common_name = spice.get("common_name"," ")
        common_names = [name.strip() for name in common_name.split(",")]
        regex_pattern = "|".join(re.escape(name) for name in common_names)
        regex_query = re.compile(f".*({regex_pattern}).*", re.IGNORECASE)
        tax_id = spice.get("ncbi_tax_id")



        
        spice_info = await spice_info_collection.find_one({"TAX ID": tax_id})




        image_filename = f"{tax_id}.jpg"
        image_path = os.path.join(IMAGES_DIR, image_filename)
        has_image = os.path.exists(image_path) if tax_id else False
       
        result = {
                "_id": str(spice["_id"]),
                "common_name": spice.get("common_name", ""),
                "scientific_name": spice_info.get("Scientific Name", "") if spice_info else spice.get("scientific_name", ""),
                "ncbi_tax_id": tax_id,
                "wikipedia_link": spice_info.get("Wiki URL", "") if spice_info else "",
                "image_url": f"/images/{image_filename}" if has_image else None
            }
            
        results.append(result)
            
        

    return results



