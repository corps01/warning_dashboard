from flask import Flask, app, jsonify

app = Flask(__name__)

from students import students

@app.route('/ping', methods=['GET'])
def ping():
    return jsonify({'response': 'pong!'})


# Get Data Routes
@app.route('/students')
def getProducts():
    # return jsonify(products)
    return jsonify({'students': students})


if __name__ == '__main__':
    app.run(debug=True, port=4000) 