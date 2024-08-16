from fastapi import APIRouter

from src.apps.users.views.user import user_view

router = APIRouter()

router.get(
    "/user",
    name="Get user",
)(user_view.change_mouth_user)
