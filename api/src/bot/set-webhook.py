import requests
import os
from dotenv import load_dotenv

load_dotenv()

TELEGRAM_TOKEN = os.getenv("TELEGRAM_TOKEN")
WEBHOOK_URL = os.getenv("WEBHOOK_URL")
DEV = os.getenv("APP_ENVIROMENT")

if not DEV:
    if not TELEGRAM_TOKEN or not WEBHOOK_URL:
        raise ValueError("TELEGRAM_TOKEN and WEBHOOK_URL must be set")

def set_webhook():
    webhook_url = f"https://api.telegram.org/bot{TELEGRAM_TOKEN}/setWebhook?url={WEBHOOK_URL}"
    response = requests.get(webhook_url)
    result = response.json()
    if not result.get("ok"):
        raise Exception(f"Failed to set webhook: {result}")

if __name__ == "__main__":
    set_webhook()
