# import os

# import pandas as pd
# import numpy as np

# import sqlalchemy
# from sqlalchemy.ext.automap import automap_base
# from sqlalchemy.orm import Session
# from sqlalchemy import create_engine

# from flask import Flask, jsonify, render_template
# from flask_sqlalchemy import SQLAlchemy

# app = Flask(__name__)

# app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///db/heartDB.sqlite"
# db = SQLAlchemy(app)

# # reflect an existing database into a new model
# Base = automap_base()
# # reflect the tables
# Base.prepare(db.engine, reflect=True)

# # Save references to each table
# train_values = Base.classes.train_values

# @app.route("/")
# def index():
#     """Return the homepage."""
#     return render_template("index.html")

# @app.route("/data")
# def data():
#     return render_template("data.html")

# if __name__ == "__main__":
#     app.run()
from flask import Flask, jsonify, render_template
import pandas as pd

# initialize flask app
app = Flask(__name__)

# read the data and merge it 
df_labels = pd.read_csv('db/train_labels.csv')
df_values = pd.read_csv('db/train_values.csv')
merged_df = pd.merge(df_values, df_labels, how='inner', on='patient_id')

# filter dataframe for with and w/o HD
merged_df_1 = merged_df.drop(merged_df.index[(merged_df.heart_disease_present.eq(0))])
merged_df_0 = merged_df.drop(merged_df.index[(merged_df.heart_disease_present.eq(1))])



#build out the routes
@app.route('/')
def home():
    return render_template('index.html')

@app.route('/trang')
def trang():
    # build a dictionary to jsonify into a route
    my_data = {"age_hd": list(merged_df_1['age']), "age_no_hd": list(merged_df_0['age'])}
    return jsonify(my_data)

@app.route('/data')
def data():

    return render_template('data.html')

@app.route('/hong')
def hong():
    d = {"id": list(merged_df['patient_id']),
         "s": list(merged_df['slope_of_peak_exercise_st_segment'])}

    return jsonify(d)

if __name__ == '__main__':
    app.run(debug=True)