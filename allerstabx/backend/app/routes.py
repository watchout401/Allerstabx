from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List
from . import crud, schemas
from .database import get_db

router = APIRouter()

# User routes
@router.post("/users/", response_model=schemas.User)
def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    db_user = crud.get_user_by_email(db, email=user.email)
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    return crud.create_user(db=db, user=user)

@router.get("/users/", response_model=List[schemas.User])
def read_users(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    users = crud.get_users(db, skip=skip, limit=limit)
    return users

@router.get("/users/{user_id}", response_model=schemas.User)
def read_user(user_id: int, db: Session = Depends(get_db)):
    db_user = crud.get_user(db, user_id=user_id)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return db_user

# Allergy routes
@router.post("/users/{user_id}/allergies/", response_model=schemas.Allergy)
def create_user_allergy(user_id: int, allergy: schemas.AllergyCreate, db: Session = Depends(get_db)):
    return crud.create_allergy(db=db, allergy=allergy, user_id=user_id)

@router.get("/users/{user_id}/allergies/", response_model=List[schemas.Allergy])
def read_user_allergies(user_id: int, skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    allergies = crud.get_user_allergies(db, user_id=user_id, skip=skip, limit=limit)
    return allergies

@router.get("/allergies/{allergy_id}", response_model=schemas.Allergy)
def read_allergy(allergy_id: int, db: Session = Depends(get_db)):
    db_allergy = crud.get_allergy(db, allergy_id=allergy_id)
    if db_allergy is None:
        raise HTTPException(status_code=404, detail="Allergy not found")
    return db_allergy

@router.put("/allergies/{allergy_id}", response_model=schemas.Allergy)
def update_allergy(allergy_id: int, allergy: schemas.AllergyCreate, db: Session = Depends(get_db)):
    db_allergy = crud.update_allergy(db, allergy_id=allergy_id, allergy=allergy)
    if db_allergy is None:
        raise HTTPException(status_code=404, detail="Allergy not found")
    return db_allergy

@router.delete("/allergies/{allergy_id}")
def delete_allergy(allergy_id: int, db: Session = Depends(get_db)):
    db_allergy = crud.delete_allergy(db, allergy_id=allergy_id)
    if db_allergy is None:
        raise HTTPException(status_code=404, detail="Allergy not found")
    return {"message": "Allergy deleted successfully"}

# Allergen routes
@router.get("/allergens/", response_model=List[schemas.Allergen])
def read_allergens(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    allergens = crud.get_allergens(db, skip=skip, limit=limit)
    return allergens

@router.get("/allergens/{allergen_id}", response_model=schemas.Allergen)
def read_allergen(allergen_id: int, db: Session = Depends(get_db)):
    db_allergen = crud.get_allergen(db, allergen_id=allergen_id)
    if db_allergen is None:
        raise HTTPException(status_code=404, detail="Allergen not found")
    return db_allergen

@router.post("/allergens/", response_model=schemas.Allergen)
def create_allergen(allergen: schemas.AllergenCreate, db: Session = Depends(get_db)):
    return crud.create_allergen(db=db, allergen=allergen)

# Treatment routes
@router.get("/treatments/", response_model=List[schemas.Treatment])
def read_treatments(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    treatments = crud.get_treatments(db, skip=skip, limit=limit)
    return treatments

@router.get("/treatments/{treatment_id}", response_model=schemas.Treatment)
def read_treatment(treatment_id: int, db: Session = Depends(get_db)):
    db_treatment = crud.get_treatment(db, treatment_id=treatment_id)
    if db_treatment is None:
        raise HTTPException(status_code=404, detail="Treatment not found")
    return db_treatment

@router.post("/treatments/", response_model=schemas.Treatment)
def create_treatment(treatment: schemas.TreatmentCreate, db: Session = Depends(get_db)):
    return crud.create_treatment(db=db, treatment=treatment)

# Search routes
@router.get("/search/", response_model=schemas.SearchResponse)
def search(query: str, category: str = None, db: Session = Depends(get_db)):
    results = []
    
    # Search allergens
    allergens = crud.search_allergens(db, query)
    for allergen in allergens:
        results.append({
            "type": "allergen",
            "id": allergen.id,
            "name": allergen.name,
            "category": allergen.category,
            "description": allergen.description
        })
    
    # Search treatments
    treatments = crud.search_treatments(db, query)
    for treatment in treatments:
        results.append({
            "type": "treatment",
            "id": treatment.id,
            "name": treatment.name,
            "category": treatment.category,
            "description": treatment.description
        })
    
    return schemas.SearchResponse(results=results, total=len(results)) 