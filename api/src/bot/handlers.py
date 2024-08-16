from telegram.ext import CommandHandler, MessageHandler, filters, CallbackContext

async def start(update, context: CallbackContext):
    await update.message.reply_text("Hello, I am your bot!")

async def echo(update, context: CallbackContext):
    await update.message.reply_text(update.message.text)

start_handler = CommandHandler("start", start)
echo_handler = MessageHandler(filters.TEXT & ~filters.COMMAND, echo)
