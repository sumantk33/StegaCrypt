from flask import Flask
import os
import random
from PIL import Image

app = Flask(__name__)

def genData(data): 

	# list of binary codes 
	# of given data 
	newd = [] 
		
	for i in data: 
		newd.append(format(ord(i), '08b')) 
	return newd

def modPix(pix, data): 
	datalist = genData(data) 
	lendata = len(datalist) 
	imdata = iter(pix) 

	for i in range(lendata): 
		
		# Extracting 3 pixels at a time 
		pix = [value for value in imdata.__next__()[:3] + imdata.__next__()[:3] + imdata.__next__()[:3]] 
									
		# Pixel value should be made 
		# odd for 1 and even for 0 
		for j in range(0, 8): 
			if (datalist[i][j]=='0') and (pix[j]% 2 != 0): 
				pix[j] -= 1
					
			elif (datalist[i][j] == '1') and (pix[j] % 2 == 0): 
				pix[j]+=1
				
		# Eigh^th pixel of every set tells 
		# whether to stop ot read further. 
		# 0 means keep reading; 1 means the 
		# message is over. 
		if (i == lendata - 1): 
			if (pix[-1] % 2 == 0): 
				pix[-1]+=1
		else: 
			if (pix[-1] % 2 != 0): 
				pix[-1]-=1

		pix = tuple(pix) 
		yield pix[0:3] 
		yield pix[3:6] 
		yield pix[6:9]

def encode_enc(newimg, data): 
	w = newimg.size[0] 
	(x, y) = (0, 0) 
	
	for pixel in modPix(newimg.getdata(), data): 
		
		# Putting modified pixels in the new image 
		newimg.putpixel((x, y), pixel) 
		if (x == w - 1): 
			x = 0
			y += 1
		else: 
			x += 1
			
# Encode data into image 
def encode(encrypted,image): 

	data = encrypted 
	if (len(data) == 0): 
		raise ValueError('Data is empty') 

	newimg = image.copy() 
	encode_enc(newimg, data)
	UPLOAD_FOLDER = 'static/temp'
	name = str(random.randint(1,1000)) + "encoded_img.png"
	app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
	newimg.save(os.path.join(app.config['UPLOAD_FOLDER'], name))
	return name