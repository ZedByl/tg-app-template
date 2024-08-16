import os
from fastapi import Request
from telegram import Update
from telegram.ext import Application
from dotenv import load_dotenv
from src.core.app import get_app
from bot.handlers import start_handler, echo_handler

load_dotenv()

TELEGRAM_TOKEN = os.getenv("TELEGRAM_TOKEN")
WEBHOOK_URL = os.getenv("WEBHOOK_URL")
DEV = os.getenv("APP_ENVIROMENT")

app = get_app()

if not DEV:
    if not TELEGRAM_TOKEN or not WEBHOOK_URL:
        raise ValueError("TELEGRAM_TOKEN and WEBHOOK_URL must be set")

application = Application.builder().token(TELEGRAM_TOKEN).build()

application.add_handler(start_handler)
application.add_handler(echo_handler)

@app.post("/webhook")
async def webhook(request: Request):
    json_body = await request.json()
    update = Update.de_json(json_body, application.bot)
    await application.process_update(update)
    return {"status": "ok"}

