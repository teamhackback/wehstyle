#!/usr/bin/python3

import sys
from PIL import Image
import glob
from os import path
import json

inFolder = "."
obj = {}
absFolder= path.abspath(inFolder)
i = 0

for filename in glob.glob("%s/**/*.png" % inFolder, recursive=True):
    im = Image.open(filename)
    print("Reading: %s" % filename)
    imName = path.basename(path.abspath(filename).replace(absFolder, "")).replace(".png", "")
    box = im.getbbox()
    obj[imName] =  {
        "id": i,
        "cropping": {
            "left": box[0],
            "upper": box[1],
            "right": box[2],
            "lower": box[3]
        },
        "src": path.abspath(filename).replace(absFolder, "")[1:],
        "category": path.basename(path.dirname(filename))
    }
    i += 1

with open("index.json", "w") as out:
    json.dump(obj, out)

