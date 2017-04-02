#!/usr/bin/python3

import sys
from PIL import Image
from colorthief import ColorThief
import glob
from os import path
import json

obj = {}

categoriyMapping = {
    "female": {
        "categories": {
            "bottoms_women": {
                "mapping": "bottom"
            },
            "romper_women": {
                "mapping": "whole"
            },
            "tops_women": {
                "mapping": "top"
            }
        },
        "products": {
        }
    },
    "male": {
        "categories": {
            "pants": {
                "mapping": "bottom"
            },
            "shirts": {
                "mapping": "top"
            }
        },
        "products": {
        }
    }
}

def hash_color(color):
    groups = 3
    color_group = list(map(lambda x: int(x * groups / 255), color))
    color_group[1] += groups + 1 + 10
    color_group[2] += groups * 2 + 20
    color_group = sum(color_group)
    return color_group
    return color_group

for gender in ["male", "female"]:
    inFolder = gender
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
        mapping = "whole"
        if category in categoriyMapping[gender]["categories"]:
            mapping = categoriyMapping[gender]["categories"][category]["mapping"]
        elif imName in categoriyMapping[gender]["products"]:
            mapping = categoriyMapping[gender]["products"][imName]["mapping"]
        # palette = ct.get_palette(color_count=2)[0:2]
        # values = list(map(hash_color, palette))
        # print(values)
        # color_group = sum(x + i * 100 for i, x in enumerate(values))
        items[imName] = {
            "id": i,
            "mapping": mapping,
            "cropping": {
                "left": box[0],
                "upper": box[1],
                "right": box[2],
                "lower": box[3]
            },
            "name": imName,
            "src": path.abspath(filename).replace(absFolder, "")[1:],
            "thumbnail": path.abspath(filename).replace(absFolder, "")[1:].replace(".png", "_cropped.jpg"),
            "category": category,
            "dominantColor": dominant_color
        }
        cropped = im.crop(box)
        background = Image.new("RGB", cropped.size, (255, 255, 255))
        background.paste(cropped, mask=cropped.split()[3]) # 3 is the alpha channel
        background.save(filename.replace(".png", "_cropped.jpg"), 'JPEG', quality=80)
        if category != "bodies":
            if category not in categories:
                categories[category] = {
                    "name": category,
                    "products": [],
                    "id": len(categories)
                }
            categories[category]["products"].append(imName)
        i += 1

    obj[gender] = {
        "items": items,
        "categories": categories,

    }

obj["parts"] = {
    "tie": [],
    "bottom": ["whole"],
    "top": ["whole"],
    "whole": ["bottom", "top", "tie"],
}
with open("index.json", "w") as out:
    json.dump(obj, out)

