from flask import Blueprint, request, jsonify
from services.email_service import send_email

routes = Blueprint("routes", __name__)

@routes.route("/contact", methods=["POST"])
def contact():
    data = request.json

    name = data.get("name")
    email = data.get("email")
    message = data.get("message")

    if not all([name, email, message]):
        return jsonify({"error": "Missing fields"}), 400

    send_email(name, email, message)

    return jsonify({"success": "Message sent successfully"})