from flask import Flask, jsonify, render_template
import pandas as pd

# initialize flask app
app = Flask(__name__)

# read the data and merge it 
df_labels = pd.read_csv('train_labels.csv')
df_values = pd.read_csv('train_values.csv')
merged_df = pd.merge(df_values, df_labels, how='inner', on='patient_id')

# filter dataframe for with and w/o HD
merged_df_1 = merged_df.drop(merged_df.index[(merged_df.heart_disease_present.eq(0))])
merged_df_0 = merged_df.drop(merged_df.index[(merged_df.heart_disease_present.eq(1))])

#build out the routes
@app.route('/')
def home():
    return render_template('index.html')

@app.route('/data')
def data():
    # build a dictionary to jsonify into a route
    my_data = {"age_hd": list(merged_df_1['age']), "age_no_hd": list(merged_df_0['age'])}
    return jsonify(my_data)
    # return render_template('analysis.html', listings=my_data)

if __name__ == '__main__':
    app.run(debug=True)
