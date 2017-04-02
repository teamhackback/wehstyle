#!/usr/bin/python3

import sys
from PIL import Image
from colorthief import ColorThief
import glob
from os import path
import json

inFolder = "."
items = {}
absFolder= path.abspath(inFolder)
i = 0
categories = {}

for filename in glob.glob("%s/**/*_small.png" % inFolder, recursive=True):
    ct = ColorThief(filename)
    dominant_color = ct.get_color(quality=1)
    im = Image.open(filename)
    print("Reading: %s" % filename)
    imName = path.basename(path.abspath(filename).replace(absFolder, "")).replace(".png", "").replace("_small", "")
    # transparent pixels are not non-zero
    im = im.convert("RGBa")
    box = im.getbbox()
    category = path.basename(path.dirname(filename))
    items[imName] = {
        "id": i,
        "cropping": {
            "left": box[0],
            "upper": box[1],
            "right": box[2],
            "lower": box[3]
        },
        "src": path.abspath(filename).replace(absFolder, "")[1:],
        "thumbnail": path.abspath(filename).replace(absFolder, "")[1:],
        "category": category,
        "dominantColor": dominant_color.index(max(dominant_color))
    }
    if category != "bodies":
        if category not in categories:
            categories[category] = {
                "name": category,
                "products": [],
                "id": len(categories)
            }
        categories[category]["products"].append(imName)
    i += 1

obj = {
    "items": items,
    "categories": categories
}
with open("index.json", "w") as out:
    json.dump(obj, out)

