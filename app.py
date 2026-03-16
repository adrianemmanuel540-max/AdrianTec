from flask import Flask, render_template, request, redirect, url_for, flash
import datetime

app = Flask(__name__)
app.secret_key = "your_secret_key"  # Needed for flashing messages

# Home route
@app.route("/")
def home():
    return render_template("index.html")

# Contact form POST
@app.route("/contact", methods=["POST"])
def contact():
    name = request.form.get("user_name")
    email = request.form.get("user_email")
    message = request.form.get("message")
    time = datetime.datetime.now()

    with open("messages.txt", "a") as file:
        file.write(f"{time} | {name} | {email} | {message}\n")

    flash("Your message has been sent successfully!")
    return redirect(url_for("home"))

# Service pages
@app.route("/programming")
def programming():
    return render_template("programming.html")

@app.route("/graphic_design")
def graphic_design():
    return render_template("graphic_design.html")

@app.route("/digital_marketing")
def digital_marketing():
    return render_template("digital_marketing.html")

@app.route("/animation")
def animation():
    return render_template("animation.html")

if __name__ == "__main__":
    app.run(debug=True)