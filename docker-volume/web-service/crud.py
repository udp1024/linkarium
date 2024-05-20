""" This python script provides the following endpoints:

GET /data: Returns all data.
POST /data: Replaces all data with the JSON body of the request.
GET /data/<index>: Returns the data item at the given index.
PUT /data/<index>: Replaces the data item at the given index with the JSON body of the request.
DELETE /data/<index>: Deletes the data item at the given index. 
The default port that the Flask server listens on is port 5000. When you start a Flask application, 
it will typically be accessible in your web browser at http://localhost:5000 or http://127.0.0.1:5000



"""

from flask import Flask, request, jsonify
import json
import os

app = Flask(__name__)
data_file = 'web/json/data.json'

@app.route('/data', methods=['GET', 'POST'])
def data():
    if request.method == 'GET':
        if os.path.exists(data_file):
            with open(data_file, 'r') as f:
                data = json.load(f)
            return jsonify(data), 200
        else:
            return jsonify({'error': 'Data not found'}), 404

    elif request.method == 'POST':
        new_data = request.get_json()
        with open(data_file, 'w') as f:
            json.dump(new_data, f)
        return jsonify({'message': 'Data saved successfully'}), 200

@app.route('/data/<int:index>', methods=['GET', 'PUT', 'DELETE'])
def data_item(index):
    if os.path.exists(data_file):
        with open(data_file, 'r') as f:
            data = json.load(f)

        if index < 0 or index >= len(data):
            return jsonify({'error': 'Index out of range'}), 400

        if request.method == 'GET':
            return jsonify(data[index]), 200

        elif request.method == 'PUT':
            new_item = request.get_json()
            data[index] = new_item
            with open(data_file, 'w') as f:
                json.dump(data, f)
            return jsonify({'message': 'Data updated successfully'}), 200

        elif request.method == 'DELETE':
            data.pop(index)
            with open(data_file, 'w') as f:
                json.dump(data, f)
            return jsonify({'message': 'Data deleted successfully'}), 200

    else:
        return jsonify({'error': 'Data not found'}), 404

if __name__ == '__main__':
    app.run(debug=True)

