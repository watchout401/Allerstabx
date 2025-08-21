from sqlalchemy.orm import Session
from . import models, schemas
from typing import List, Optional

# User CRUD operations
def get_user(db: Session, user_id: int):
    return db.query(models.User).filter(models.User.id == user_id).first()

def get_user_by_email(db: Session, email: str):
    return db.query(models.User).filter(models.User.email == email).first()

def get_users(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.User).offset(skip).limit(limit).all()

def create_user(db: Session, user: schemas.UserCreate):
    hashed_password = "hashed_" + user.password  # TODO: Implement proper hashing
    db_user = models.User(
        email=user.email,
        username=user.username,
        hashed_password=hashed_password
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

# Allergy CRUD operations
def get_allergy(db: Session, allergy_id: int):
    return db.query(models.Allergy).filter(models.Allergy.id == allergy_id).first()

def get_user_allergies(db: Session, user_id: int, skip: int = 0, limit: int = 100):
    return db.query(models.Allergy).filter(models.Allergy.user_id == user_id).offset(skip).limit(limit).all()

def create_allergy(db: Session, allergy: schemas.AllergyCreate, user_id: int):
    db_allergy = models.Allergy(**allergy.dict(), user_id=user_id)
    db.add(db_allergy)
    db.commit()
    db.refresh(db_allergy)
    return db_allergy

def update_allergy(db: Session, allergy_id: int, allergy: schemas.AllergyCreate):
    db_allergy = db.query(models.Allergy).filter(models.Allergy.id == allergy_id).first()
    if db_allergy:
        for key, value in allergy.dict().items():
            setattr(db_allergy, key, value)
        db.commit()
        db.refresh(db_allergy)
    return db_allergy

def delete_allergy(db: Session, allergy_id: int):
    db_allergy = db.query(models.Allergy).filter(models.Allergy.id == allergy_id).first()
    if db_allergy:
        db.delete(db_allergy)
        db.commit()
    return db_allergy

# Allergen CRUD operations
def get_allergen(db: Session, allergen_id: int):
    return db.query(models.Allergen).filter(models.Allergen.id == allergen_id).first()

def get_allergens(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Allergen).offset(skip).limit(limit).all()

def search_allergens(db: Session, query: str):
    return db.query(models.Allergen).filter(
        models.Allergen.name.ilike(f"%{query}%")
    ).all()

def create_allergen(db: Session, allergen: schemas.AllergenCreate):
    db_allergen = models.Allergen(**allergen.dict())
    db.add(db_allergen)
    db.commit()
    db.refresh(db_allergen)
    return db_allergen

# Treatment CRUD operations
def get_treatment(db: Session, treatment_id: int):
    return db.query(models.Treatment).filter(models.Treatment.id == treatment_id).first()

def get_treatments(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Treatment).offset(skip).limit(limit).all()

def search_treatments(db: Session, query: str):
    return db.query(models.Treatment).filter(
        models.Treatment.name.ilike(f"%{query}%")
    ).all()

def create_treatment(db: Session, treatment: schemas.TreatmentCreate):
    db_treatment = models.Treatment(**treatment.dict())
    db.add(db_treatment)
    db.commit()
    db.refresh(db_treatment)
    return db_treatment 