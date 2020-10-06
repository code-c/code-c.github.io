import setproctitle
from gevent.pywsgi import WSGIServer
from api_routes import webapp
from flask import Flask, redirect, url_for, render_template, Blueprint, session, app, flash
import os

debug = True

hostname = 'mountainwavepr'

app = Flask(__name__)
app.register_blueprint(webapp)

app.config['UPLOAD_FOLDER'] = '/static/'
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024

def main():

	# For developers, use this
	app.run(debug=debug, host='127.0.0.1')

	# For server, use this
	#app.config['SERVER_NAME'] = 'mountainwavepr.com:5000'	# only for running on server
	#app.run(debug=debug)

main()
