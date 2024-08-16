from fastapi import File, UploadFile
from structlog import get_logger

class UserView:
    def __init__(self):
        self._logger = get_logger(__name__)

    async def change_mouth_user(self):
        return { 'user': 'Jone' }

user_view = UserView()
