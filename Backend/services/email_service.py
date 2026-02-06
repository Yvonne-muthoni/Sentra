import smtplib
from email.message import EmailMessage
from config import Config

def send_email(name, email, message):
    msg = EmailMessage()
    msg["Subject"] = "New Contact Form Message"
    msg["From"] = Config.EMAIL_USER
    msg["To"] = Config.RECEIVER_EMAIL

    msg.set_content(
        f"Name: {name}\nEmail: {email}\n\nMessage:\n{message}"
    )

    with smtplib.SMTP(Config.EMAIL_HOST, Config.EMAIL_PORT) as server:
        server.starttls()
        server.login(Config.EMAIL_USER, Config.EMAIL_PASS)
        server.send_message(msg)