from flask import Flask, render_template, url_for, request, jsonify, send_from_directory
from PIL import Image
import os
import random 
import time

from utils.encrypt import encrypt
from utils.decrypt import decrypt
from utils.encode import encode
from utils.decode import decode

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/how_to_use')
def howto():
    return render_template('how_to_use.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/encryption')
def enc():
    return render_template('encrypt.html')

@app.route('/en_complete', methods=['GET', 'POST'])
def en_complete():
    if request.method=='GET':
        return render_template('encrypt_comp.html')

    if request.method=='POST':    
        start = time.time()
        filename = request.files['file']
        key_received = request.form['Key']
        image = Image.open(filename, 'r')
        msg_received = request.form['content']
        if key_received == "":
            key_received = 'msritcodes'

        encrypted_msg = encrypt(key_received, msg_received)
        name = encode(encrypted_msg,image)        
        UPLOAD_FOLDER = 'static/temp'
        app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER  
        end = time.time()
        return render_template('encrypt_comp.html', msg = msg_received , image_name = name, enc_msg = encrypted_msg, duration = round(end-start, 2))        
          

@app.route('/decryption')
def dec():
    return render_template('decrypt.html')

@app.route('/de_complete', methods=['GET', 'POST'])
def de_complete():
    if request.method=='GET':
        return render_template('encrypt_comp.html')

    if request.method=='POST':    
        start = time.time()
        filename = request.files['file']
        key_received = request.form['Key']
        image = Image.open(filename, 'r')
        if key_received == "":
            key_received = 'msritcodes'

        received_msg = decode(image)
        msg = decrypt(key_received, received_msg)
        end = time.time()
        return render_template('decrypt_comp.html', dec_msg = msg, duration = round(end-start, 2))	


if __name__ == '__main__': 
   app.run(threaded=True, port=5000, debug=True)
