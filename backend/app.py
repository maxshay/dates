from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS, cross_origin
import datetime
import json
import os
import csv
import logging

logging.basicConfig()
logging.getLogger('sqlalchemy.engine').setLevel(logging.INFO)

# init app
app = Flask(__name__)
cors = CORS(app)
# init ma
ma = Marshmallow(app)


# init db

# below is the code thats used for env purposes
# app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://dxytjiiwxdawfp:fc0e3e54be962244d4ffc9d6dc9f57869d5e79ffc81115587628afcae131f685@ec2-3-234-169-147.compute-1.amazonaws.com:5432/d1be8i2i40h5b9'

# below is the code thats currently pushed on heroku as env variable
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ['DATABASE_URL']

app.config['CORS_HEADERS'] = 'Content-Type'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)


# class models
class UnknownDates(db.Model):
    __tablename__ = 'uncommondates'
    id = db.Column(db.Integer, primary_key=True)
    eventdatename = db.Column(db.String(200), unique=False, nullable=False)
    eventdatemonth = db.Column(db.String(100), unique=False, nullable=False)
    eventdate = db.Column(db.Date(), unique=False, default=datetime.date(2010, 10, 10), nullable=False)

    def __init__(self, eventdatename, eventdatemonth, eventdate):
        self.eventDateName = eventDateName
        self.eventDateMonth = eventDateMonth
        self.eventDate = eventDate


# Schema
class DateSchema(ma.Schema):
    class Meta:
        fields = ('eventdate', 'eventdatemonth', 'eventdatename', 'id')


# init schema
date_schema = DateSchema()
dates_schema = DateSchema(many=True)


# insert
@app.route('/insert', methods=['POST'])
@cross_origin()
def insert():
    if request.method == 'POST':
        data = UnknownDates("International Sleeping Day", "April", datetime.date(2020, 11, 11))
        db.session.add(data)
        db.session.commit()
        return jsonify({"Message": "Data inserted."}), 201


@app.route('/', methods=['GET'])
@cross_origin()
def get():
    return jsonify({"Message": "Hello World!"})


@app.route('/dates', methods=['GET'])
@cross_origin()
def getdates():
    if request.method == 'GET':
        data = UnknownDates.query.all()
        result = dates_schema.dump(data)
        return jsonify(result)


@app.route('/date/<int:id>', methods=['GET'])
@cross_origin()
def getdate(id):
    if request.method == 'GET':
        data = UnknownDates.query.get(id)
        return date_schema.jsonify(data)


@app.route('/dates/<month>', methods=['GET'])
@cross_origin()
def getdatesfrommonth(month):
    if request.method == 'GET':
        monthc = month.capitalize()
        data = UnknownDates.query.filter_by(eventdatemonth=monthc).order_by('id').all()
        # print("%%%%%%%%%Length of list is: ", len(data))
        result = dates_schema.dump(data)
        return jsonify(result)


# run server
if __name__ == '__main__':
    app.run(host="localhost", port=5000, debug=True, use_reloader=True)
