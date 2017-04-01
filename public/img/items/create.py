#!/usr/bin/python3

import sys
from PIL import Image
import glob
from os import path
import json

inFolder = "."
items = {}
absFolder= path.abspath(inFolder)
i = 0
categories = set()

for filename in glob.glob("%s/**/*.png" % inFolder, recursive=True):
    im = Image.open(filename)
    print("Reading: %s" % filename)
    imName = path.basename(path.abspath(filename).replace(absFolder, "")).replace(".png", "")
    # transparent pixels are not non-zero
    im = im.convert("RGBa") 
    box = im.getbbox()
    category = path.basename(path.dirname(filename))
    items[imName] =  {
        "id": i,
        "cropping": {
            "left": box[0],
            "upper": box[1],
            "right": box[2],
            "lower": box[3]
        },
        "src": path.abspath(filename).replace(absFolder, "")[1:],
        "category": category
    }
    categories.add(category)
    i += 1

obj = {
    "items": items,
    "categories": list(categories)
}
with open("index.json", "w") as out:
    json.dump(obj, out)

