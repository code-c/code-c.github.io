import os
import re
import glob
import pandas as pd
import numpy as np
import json
from flask import Flask, render_template, Blueprint, request, send_from_directory, send_file, flash, Blueprint, g, session, app, current_app
from flask_wtf import Form
from bll import logic_layer
from bs4 import BeautifulSoup as bs
from werkzeug.utils import secure_filename
from bll import itunes
from pathlib import Path

webapp = Blueprint("webapp",
					__name__,
					template_folder="templates",
					static_folder="static",
					static_url_path="/static"
					)

#api = Blueprint("api", __name__, url_prefix="/api")

LogicLayer = logic_layer.LogicLayer()

ALLOWED_EXTENSIONS = set(['csv'])


def allowed_file(filename):
	return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


def get_js__and_css_source():

	# Add js files here as you create them
	js_files = ['init.js']

	css_files = ['style.css']

	this_files_dir = os.path.dirname(os.path.abspath(__file__))

	js_source = ""
	for js_filename in js_files:
		js_path = os.path.join(this_files_dir, "static", js_filename)
		with open(js_path, "r") as f:
			js_source += f.read()

	css_source = ""
	for css_filename in css_files:
		css_path = os.path.join(this_files_dir, "templates", css_filename)
		with open(css_path, "r") as f:
			css_source += f.read()

	return js_source, css_source

@webapp.route("/")
def go():
	js_source, css_source = get_js__and_css_source()

	return render_template("index.html.j2",
							js_source=js_source,
							css_source=css_source
							)


@webapp.route("/load-profile", methods=["POST"])
def load_profile_html():
	#js_source, css_source = get_js__and_css_source()
	member = request.form["member"]
	return json.dumps(render_template(member + ".html.j2"))


@webapp.route("/nicks-load-weather-data", methods=["POST"])
def nicks_load_weather_data():
	zip_code = request.form["zip_code"]
	return json.dumps(LogicLayer.nicks_get_weather_data(zip_code))

@webapp.route("/andrews-genre-data", methods=["POST"])
def andrews_genre_data():
	my_json = itunes.itunes.ReadItunesCsv()
	return json.dumps(my_json)

@webapp.route('/upload-csv', methods=['POST'])
def upload_file():
    f = request.files['filename']
    path = os.path.join(current_app.root_path, '/static') # to move into static folder
    #p = Path('/Users/NickHella/Desktop/') # to move to my Desktop
    f.save(os.path.join(p,secure_filename(f.filename)))

    html_string = '''
    				<h1>Upload successful</h1>
    				<br><br>
    				<h2> Please hit the back button </h2>
    				<br>
    				<h2> &nbsp;&nbsp;&nbsp;&nbsp; If redirected to the home page: <h2>
    				<h2> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Return to my page,
    					and select your file again.
    				</h2>
    				<h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Then, hit 'Draw Data Table'!</h2>
    				<br><br>
    				<h2>&nbsp;&nbsp;&nbsp;&nbsp;Otherwise: </h2>
    				<h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Just hit 'Draw Data Table'!</h2>
    			'''
    return(html_string)

@webapp.route("/justins-load-server-data", methods=["POST"])
def justins_load_server_data():
	ip_address = request.form["ip_address"]
	return json.dumps(LogicLayer.justins_get_server_data(ip_address))


@webapp.route('/receiver', methods = ['POST'])
def worker():
	data = request.get_json(my_json)
	result = ''

@webapp.route('/make-datatable', methods=['POST'])
def make_datatable():
	filename = request.form['filename']
	print("\n\n Made it here! \n\n")
	return json.dumps(LogicLayer.andrews_load_datatable(filename))


@webapp.route('/download-nhella-resume',methods = ['GET'])
def download_nhella_resume():
	path = os.getcwd()
	return send_file(path+"/Resumes/Nhella_Resume.pdf",
					mimetype='pdf',
					attachment_filename='Nhella_Resume.pdf',
					as_attachment=True)

@webapp.route('/download-dleger-resume',methods = ['GET'])
def download_dleger_resume():
	path = os.getcwd()
	return send_file(path+"/Resumes/Dleger_Resume.pdf",
					mimetype='pdf',
					attachment_filename='Dleger_Resume.pdf',
					as_attachment=True)

@webapp.route('/download-aoconnor-resume',methods = ['GET'])
def download_aoconnor_resume():
	path = os.getcwd()
	return send_file(path+ "/Resumes/Aoconnor_Resume.pdf",
					mimetype='pdf',
					attachment_filename='Aoconnor _Resume.pdf',
					as_attachment=True)

@webapp.route('/download-jadams-resume',methods = ['GET'])
def download_jadams_resume():
	path = os.getcwd()
	return send_file(path+ "/Resumes/Jadams_Resume.pdf",
					mimetype='pdf',
					attachment_filename='Jadams_Resume.pdf',
					as_attachment=True)
