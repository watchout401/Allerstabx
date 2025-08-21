from pydantic import BaseModel, EmailStr
from typing import Optional, List
from datetime import datetime

# User schemas
class UserBase(BaseModel):
    email: EmailStr
    username: str

class UserCreate(UserBase):
    password: str

class User(UserBase):
    id: int
    is_active: bool
    created_at: datetime
    updated_at: Optional[datetime] = None

    class Config:
        from_attributes = True

# Allergy schemas
class AllergyBase(BaseModel):
    allergen_name: str
    severity: str
    symptoms: Optional[str] = None
    treatments: Optional[str] = None

class AllergyCreate(AllergyBase):
    pass

class Allergy(AllergyBase):
    id: int
    user_id: int
    created_at: datetime
    updated_at: Optional[datetime] = None

    class Config:
        from_attributes = True

# Allergen schemas
class AllergenBase(BaseModel):
    name: str
    category: str
    description: Optional[str] = None
    common_symptoms: Optional[str] = None

class AllergenCreate(AllergenBase):
    pass

class Allergen(AllergenBase):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True

# Treatment schemas
class TreatmentBase(BaseModel):
    name: str
    category: str
    description: Optional[str] = None
    effectiveness: Optional[str] = None
    side_effects: Optional[str] = None

class TreatmentCreate(TreatmentBase):
    pass

class Treatment(TreatmentBase):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True

# Search schemas
class SearchRequest(BaseModel):
    query: str
    category: Optional[str] = None

class SearchResponse(BaseModel):
    results: List[dict]
    total: int 