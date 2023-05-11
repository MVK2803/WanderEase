from flask import Flask, render_template, jsonify, request
import config
import openai
import dataAPI as DP

from flask_cors import CORS
app = Flask(__name__)
CORS(app)


@app.route('/get_info', methods=['POST'])
def get_info():
    data = request.json
    start_date = data['startDate']
    end_date = data['endDate']
    source = data['source']
    destination = data['destination']
    travel = data['travel']
    accommodation = data['accommodation']
    
    data=DP.consolidatedAPI(start_date,end_date,source,destination,travel,accommodation)
    return(data)

if __name__ == '__main__':
    app.run( debug=True)
