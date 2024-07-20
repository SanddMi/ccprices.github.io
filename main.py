from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)


@app.route('/')
def home():
    return "Hi there, Space QBee!"

@app.route('/about')
def about():
    return "This is the about page."


if __name__ == '__main__':
    app.run(debug=True)
