# AllerStabX

A full-stack allergy management platform.

## Stack
- Backend: FastAPI, SQLAlchemy, Pydantic, Uvicorn
- Database: SQLite by default (PostgreSQL supported)
- Frontend: React + Vite

## Prerequisites
- Python 3.10+
- Node.js 18+

## Quick start

### 1) Clone and enter the project
```bash
git clone <your-repo-url>
cd allerstabx
```

### 2) Backend setup
```bash
cd backend
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate
pip install -r requirements.txt
cp env.example .env  # update values as needed
```

Run the API:
```bash
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

API will be available at `http://localhost:8000`.
- Docs: `http://localhost:8000/docs`
- Health: `http://localhost:8000/health`

### 3) Frontend setup
In a new terminal from the project root:
```bash
cd frontend
npm install
npm run dev
```

Frontend will be available at the Vite dev server URL shown in the terminal (typically `http://localhost:5173`).

## Configuration
The backend reads environment variables from `backend/.env` (copy from `backend/env.example`). Key options:
- `DATABASE_URL` (default: SQLite file) — for Postgres use `postgresql://user:password@localhost/allerstabx`
- `SECRET_KEY`, `ALGORITHM`, `ACCESS_TOKEN_EXPIRE_MINUTES`
- `BACKEND_CORS_ORIGINS` to allow your frontend origin(s)

CORS in `app/main.py` currently allows:
- `http://localhost:5173`
- `http://localhost:3000`

## Project structure
```
allerstabx/
  backend/
    app/
      main.py        # FastAPI app entry
      routes.py      # API routes (users, allergies, allergens, treatments, search)
      database.py    # DB engine/session setup
      models.py      # SQLAlchemy models
      schemas.py     # Pydantic schemas
      crud.py        # DB CRUD operations
    requirements.txt
    env.example
  frontend/
    src/             # React app source (Vite)
    package.json
    vite.config.js
```

## Common commands
- Backend (from `backend`):
  - `uvicorn app.main:app --reload`
- Frontend (from `frontend`):
  - `npm run dev`
  - `npm run build`
  - `npm run preview`

## Testing the API quickly
```bash
curl http://localhost:8000/health
```

## Deployment notes
- Set appropriate `DATABASE_URL` and secrets in environment.
- Serve the FastAPI app with a production server (e.g., `uvicorn` behind `nginx` or `gunicorn` via `uvicorn.workers.UvicornWorker`).
- Build the frontend (`npm run build`) and serve the static assets with your preferred host or behind the backend.

## Contributing
1. Create a feature branch
2. Commit with clear messages
3. Open a pull request

## License
MIT
