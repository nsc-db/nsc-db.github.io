from flask import Flask, render_template, url_for

app = Flask(__name__)

@app.route("/")
def main():
    return render_template('index.html')

@app.route("/Guides")
def log():
    return render_template('Guides.html')

@app.route("/Units")
def reg():
    return render_template('Units.html')

@app.route("/Gear")
def reg2():
    return render_template('Gear.html')

@app.route("/FAQ")
def reg3():
    return render_template('Faq.html')

if __name__ == "__main__":
    app.run()
