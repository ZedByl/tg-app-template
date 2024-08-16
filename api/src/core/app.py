from fastapi import FastAPI

from src.core.routers import init_routers

def get_app():
    app = FastAPI(title="Face up")
    init_routers(app)
    return app
