import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    EMAIL_HOST = os.getenv("EMAIL_HOST")
    EMAIL_PORT = int(os.getenv("EMAIL_PORT"))
    EMAIL_USER = os.getenv("EMAIL_USER")
    EMAIL_PASS = os.getenv("EMAIL_PASS")
    RECEIVER_EMAIL = os.getenv("RECEIVER_EMAIL")