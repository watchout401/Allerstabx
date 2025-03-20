from motor.motor_asyncio import AsyncIOMotorClient

MONGO_URI="mongodb+srv://spiceuser:jtMwKsv71NfJE9gd@cluster0.wwoiu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

client = AsyncIOMotorClient(MONGO_URI)

# Select Database and Collection
db = client["Spices_DB"]
spices_collection = db["Spices"]
spice_info_collection = db["Spice_Info"]
spice_images_collection = db["spice-images"]



disease_db = client["Disease_DB"]
disease_collection = disease_db["Disease"]



associations_db = client["Associations"]
associations_collection = associations_db["association-spice-disease-detail"]