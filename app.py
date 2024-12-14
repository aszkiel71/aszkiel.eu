from flask import Flask, render_template, send_from_directory
import os

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/download-fractal')
def download_fractal():
    return send_from_directory(os.getcwd(), 'static/algo/fraktal.py', as_attachment=True)

@app.route('/algorithms')
def algorithms():
    return render_template('algorithms.html')

if __name__ == "__main__":
    app.run(debug=True)
