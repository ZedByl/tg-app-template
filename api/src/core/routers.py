from src.apps.users.routers import router as users_router
from fastapi import FastAPI


def init_routers(app: FastAPI):
    app.include_router(users_router, prefix="/v1", tags=["v1"])
