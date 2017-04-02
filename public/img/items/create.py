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
            "tops": {
                "name": "Tops"
            },
            "rompers": {
                "name": "rompers"
            },
            "bottom": {
                "name": "Bottoms"
            },
            "sports": {
                "name": "Sports"
            }
        },
        "products": [
        ]
    },
    "male": {
        "categories": {
            "shirts": {
                "name": "Shirts"
            },
            "pants": {
                "name": "Pants"
            },
            "sweaters": {
                "name": "Sweaters"
            },
            "formal": {
                "name": "Formal"
            },
            "coats": {
                "name": "Coats"
            },
            "sports": {
                "name": "Sports"
            }
        },
        "products":
    [
 {
   "Gender": "male",
   "FileId": 926474,
   "Name": "WE Fashion hoodie",
   "Meta": "sweater white ",
    "mapping": "top",
   "link": "https://www.wehkamp.nl/herenmode/heren-truien/heren-truien/we-fashion-hoodie/C22_2B1_2B1_926474/"
 },
 {
   "Gender": "male",
   "FileId": 860709,
   "Name": "Scotch & Soda sweater",
   "Meta": "sweater scotch soda",
    "mapping": "top",
   "link": "https://www.wehkamp.nl/herenmode/heren-truien/heren-sweaters/scotch-soda-sweater/C22_2B1_SWE_860709/"
 },
 {
   "Gender": "male",
   "FileId": 937272,
   "Name": "Mango Man trui",
   "Meta": "sweater stripes blue white",
    "mapping": "top",
   "link": "https://www.wehkamp.nl/herenmode/heren-truien/heren-truien/mango-man-trui/C22_2B1_2B1_937272/"
 },
 {
   "Gender": "male",
   "FileId": 852431,
   "Name": "Filippa K slim fit overhemd Paul Stretch",
   "Meta": "blue shirt ",
    "mapping": "top",
   "link": "https://www.wehkamp.nl/herenmode/heren-overhemden/heren-overhemden/filippa-k-slim-fit-overhemd-paul-stretch/C22_2B9_2B9_852431/"
 },
 {
   "Gender": "male",
   "FileId": 869084,
   "Name": "Tommy Hilfiger Bleecker slim fit jeans",
   "Meta": "dark pants ",
    "mapping": "bottom",
   "link": "https://www.wehkamp.nl/herenmode/heren-jeans/heren-jeans/tommy-hilfiger-bleecker-slim-fit-jeans/C22_2BC_2BC_869084/"
 },
 {
   "Gender": "male",
   "FileId": 834333,
   "Name": "Scotch & Soda Ralston slim fit jeans",
   "Meta": "pants jeans blue denim",
    "mapping": "bottom",
   "link": "https://www.wehkamp.nl/herenmode/heren-jeans/heren-jeans/scotch-soda-ralston-slim-fit-jeans/C22_2BC_2BC_834333/"
 },
 {
   "Gender": "male",
   "FileId": 761135,
   "Name": "Diesel Thommer slim fit jeans",
   "Meta": "pants diesel slim  wil denim blue ",
    "mapping": "bottom",
   "link": "https://www.wehkamp.nl/herenmode/heren-jeans/heren-jeans/diesel-thommer-slim-fit-jeans/C22_2BC_2BC_761135/"
 },
 {
   "Gender": "male ",
   "FileId": 828622,
   "Name": "Boss Green T-shirt",
   "Meta": "shirt blue white spots",
    "mapping": "top",
   "link": "https://www.wehkamp.nl/herenmode/grote-maten-herenkleding/grote-maten-heren-t-shirts/boss-green-t-shirt/C22_GMH_GM8_828622/"
 },
 {
   "Gender": "male",
   "FileId": 826856,
   "Name": "Boss Orange regular fit T-shirt Trusted",
   "Meta": "shirt white leaves ",
    "mapping": "top",
   "link": "https://www.wehkamp.nl/herenmode/grote-maten-herenkleding/grote-maten-heren-t-shirts/boss-orange-regular-fit-t-shirt-trusted/C22_GMH_GM8_826856/"
 },
 {
   "Gender": "male",
   "FileId": 860851,
   "Name": "Scotch & Soda T-shirt",
   "Meta": "shirt dark blue hindu nonsense",
    "mapping": "top",
   "link": "https://www.wehkamp.nl/herenmode/grote-maten-herenkleding/grote-maten-heren-t-shirts/scotch-soda-t-shirt/C22_GMH_GM8_860851/"
 },
 {
   "Gender": "male",
   "FileId": 860870,
   "Name": "Scotch & Soda T-shirt",
   "Meta": "shirt light white leaves",
    "mapping": "top",
   "link": "https://www.wehkamp.nl/herenmode/grote-maten-herenkleding/grote-maten-heren-t-shirts/scotch-soda-t-shirt/C22_GMH_GM8_860870/"
 },
 {
   "Gender": "male",
   "FileId": 856509,
   "Name": "WE Fashion - Blue Ridge slim fit jog denim",
   "Meta": "denim jeans blue",
    "mapping": "bottom",
   "link": "https://www.wehkamp.nl/herenmode/heren-jeans/heren-jeans/we-fashion-blue-ridge-slim-fit-jog-denim/C22_2BC_2BC_856509/"
 },
 {
   "Gender": "male",
   "FileId": 860694,
   "Name": "Scotch & Soda jas",
   "Meta": "coat blue",
    "mapping": "top",
   "link": "https://www.wehkamp.nl/herenmode/heren-jassen/heren-jassen/scotch-soda-jas/C22_HJS_HJS_860694/?MaatCode=0010&PI=0&PrI=0&Nrpp=94&Blocks=0&Ns=D&NavState=/_/N-5z2f&IsSeg=0"
 },
 {
   "Gender": "male",
   "FileId": 827249,
   "Name": "WE Fashion jack",
   "Meta": "coat jack green brown ",
    "mapping": "top",
   "link": "https://www.wehkamp.nl/herenmode/heren-jassen/heren-jassen/we-fashion-jack/C22_HJS_HJS_827249/?MaatCode=0360&PI=0&PrI=16&Nrpp=94&Blocks=0&Ns=D&NavState=/_/N-5z2f&IsSeg=0"
 },
 {
   "Gender": "male",
   "FileId": 883947,
   "Name": "adidas originals short",
   "Meta": "sports bants blue adidas",
    "mapping": "bottom",
   "link": "https://www.wehkamp.nl/Zoeken/ArtikelDetail.aspx?ArtikelNummer=883947&Ntt=adidas%20blauw&PI=1&PrI=151&Nrpp=96&Blocks=0&View=Grid"
 },
 {
   "Gender": "male",
   "FileId": 858427,
   "Name": "asics running shirt",
   "Meta": "dark shirt jogging",
    "mapping": "top",
   "link": "https://www.wehkamp.nl/Zoeken/ArtikelDetail.aspx?ArtikelNummer=858427&Ntt=shirt%20asics&PI=0&PrI=3&Nrpp=96&Blocks=0&View=Grid"
 },
 {
   "Gender": "male",
   "FileId": 876651,
   "Name": "Superdry Sport sportshort",
   "Meta": "superdry sport shorts blue",
    "mapping": "bottom",
   "link": "https://www.wehkamp.nl/sport-vrije-tijd/superdry-sport/superdry-sport/superdry-sport-sportshort/C24_SYS_SYS_876651/?MaatCode=0020&PI=0&PrI=1&Nrpp=96&Blocks=0&Ns=D&View=Grid&NavState=/_/N-69b2Zmwl&IsSeg=0"
 },
 {
   "Gender": "male",
   "FileId": 871665,
   "Name": "New Balance hardloop T-shirt",
   "Meta": "running shirt orange sports",
    "mapping": "top",
   "link": "https://www.wehkamp.nl/Zoeken/ArtikelDetail.aspx?ArtikelNummer=871665&Ntt=oranje%20shirt&PI=0&PrI=12&Nrpp=96&Blocks=0&View=Grid&NavState=%2fHerenmode-Sportkleding-heren%2f_%2fN-967"
 },
 {
   "Gender": "male",
   "FileId": 864563,
   "Name": "Vanguard regular fit colbert",
   "Meta": "colbert grey formal",
    "mapping": "top",
   "link": "https://www.wehkamp.nl/herenmode/heren-colberts/heren-colberts/vanguard-regular-fit-colbert/C22_HCB_HCB_864563/?MaatCode=0480&PI=0&PrI=4&Nrpp=94&Blocks=0&Ns=D&NavState=/_/N-62pe&IsSeg=0"
 },
 {
   "Gender": "male",
   "FileId": 828678,
   "Name": "Strellson Mercer slim fit wollen pantalon",
   "Meta": "pantalon grey formal",
    "mapping": "bottom",
   "link": "https://www.wehkamp.nl/Zoeken/ArtikelDetail.aspx?ArtikelNummer=828678&Ntt=pantalon&PI=0&PrI=32&Nrpp=96&Blocks=0&View=Grid&NavState=%2fHerenmode%2f_%2fN-16ah"
 },
 {
   "Gender": "male",
   "FileId": 889391,
   "Name": "Mango Man stropdas",
   "Meta": "stropdas das blauw formal blue",
    "mapping": "tie",
   "link": "https://www.wehkamp.nl/Zoeken/ArtikelDetail.aspx?ArtikelNummer=889391&Ntt=stropdas&PI=0&PrI=5&Nrpp=96&Blocks=0&View=Grid"
 },
]
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

        product = None
        for item in categoriyMapping[gender]["products"]:
            if str(item["FileId"]) == imName:
                product = item

        if category in categoriyMapping[gender]["categories"]:
            categoryData = categoriyMapping[gender]["categories"][category]
        if product is not None:
            mapping = product["mapping"]
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
        print(product)
        if product is not None:
            items[imName]["meta"] = product["Meta"]
            items[imName]["link"] = product["link"]
            items[imName]["fulltext"] = product["Name"]
        cropped = im.crop(box)
        background = Image.new("RGB", cropped.size, (255, 255, 255))
        background.paste(cropped, mask=cropped.split()[3]) # 3 is the alpha channel
        background.save(filename.replace(".png", "_cropped.jpg"), 'JPEG', quality=80)
        if category != "bodies":
            if category not in categories:
                categories[category] = {
                    "name": category,
                    "fulltext": categoryData["name"],
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

