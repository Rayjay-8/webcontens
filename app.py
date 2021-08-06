from flask import Flask, render_template, request, redirect, session, flash, url_for

app = Flask(__name__)

tags = [
{'name':'GMAIL 2222','link':'http://gmail.com.br/'},
{'name':'Digital Ocean','link':'https://www.digitalocean.com/'}
]

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/2')
def pagechi():
    return render_template('child.html',tags=tags)
#
#2222

app.run(debug=True)
