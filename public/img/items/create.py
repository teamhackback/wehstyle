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
                "name": "Tops",
                "img": "thumbnailwomentop.png"
            },
            "romper": {
                "name": "rompers",
                "img": "thumbnailwomenonepieces.png"
            },
            "bottoms": {
                "name": "Bottoms",
                "img": "thumbnailwomanbottom.png"
            },
            "sports": {
                "name": "Sports",
                "img": "thumbnailwomensports.png"
            }
        },
        "products": [
 {
   "Gender": "female",
   "FileId": 935115,
   "Name": "Mango pantalon",
   "Category": "bottoms",
   "mapping": "bottom",
   "Meta": "pants dark blue flowers",
   "link": "https://www.wehkamp.nl/damesmode/damesbroeken/damesbroeken/mango-pantalon/C21_DBR_DBR_935115/"
 },
 {
   "Gender": "female",
   "FileId": 921098,
   "Name": "Didi linnen pantalon",
   "Category": "bottoms",
   "mapping": "bottom",
   "Meta": "pants trousers light brindle",
   "link": "https://www.wehkamp.nl/damesmode/damesbroeken/damesbroeken/didi-linnen-pantalon/C21_DBR_DBR_921098/"
 },
 {
   "Gender": "female",
   "FileId": 890075,
   "Name": "VERO MODA pantalon",
   "Category": "bottoms",
   "mapping": "bottom",
   "Meta": "pants dark blue gold ",
   "link": "https://www.wehkamp.nl/damesmode/damesbroeken/damesbroeken/vero-moda-pantalon/C21_DBR_DBR_890075/"
 },
 {
   "Gender": "female",
   "FileId": 933139,
   "Name": "Pieces broek",
   "Category": "bottoms",
   "mapping": "bottom",
   "Meta": "pants white stripes",
   "link": "https://www.wehkamp.nl/damesmode/damesbroeken/damesbroeken/pieces-broek/C21_DBR_DBR_933139/"
 },
 {
   "Gender": "female",
   "FileId": 415377,
   "Name": "Nike sportbh",
   "Category": "sports",
   "mapping": "top",
   "Meta": "nike sport bra white ",
   "link": "https://www.wehkamp.nl/damesmode/dames-lingerie/dames-sportondergoed/nike-sportbh/C21_1A3_A31_415377/"
 },
 {
   "Gender": "female",
   "FileId": 876942,
   "Name": "Superdry Sport vest",
   "Category": "sports",
   "mapping": "top",
   "Meta": "top blue superdry",
   "link": "https://www.wehkamp.nl/damesmode/sportkleding-dames/sportkleding-dames/superdry-sport-vest/C21_1AI_1AI_876942/"
 },
 {
   "Gender": "female",
   "FileId": 875725,
   "Name": "whkmp's GREAT LOOKS SPORT sport T-shirt",
   "Category": "romper",
   "mapping": "top",
   "Meta": "top black women ",
   "link": "https://www.wehkamp.nl/damesmode/grote-maten-dameskleding/grote-maten-dameskleding/whkmps-great-looks-sport-sport-t-shirt/C21_1A7_1A7_875725/"
 },
 {
   "Gender": "female",
   "FileId": 915805,
   "Name": "Mango Sport sportsweater",
   "Category": "sports",
   "mapping": "top",
   "Meta": "top grey ",
   "link": "https://www.wehkamp.nl/damesmode/dames-truien-vesten/damessweaters/mango-sport-sportsweater/C21_1AB_PO8_915805/"
 },
 {
   "Gender": "female",
   "FileId": 941888,
   "Name": "MS Mode denim bermuda",
   "Category": "bottoms",
   "mapping": "bottom",
   "Meta": "blue pants",
   "link": "https://www.wehkamp.nl/damesmode/dames-jeans/dames-jeans/ms-mode-denim-bermuda/C21_DJS_DJS_941888/?MaatCode=0400&PI=0&PrI=3&Nrpp=94&Blocks=0&Ns=D&NavState=/_/N-60yw&IsSeg=0"
 },
 {
   "Gender": "female",
   "FileId": 946124,
   "Name": "C&A Yessica bermuda",
   "Category": "bottoms",
   "mapping": "bottom",
   "Meta": "red pants",
   "link": "https://www.wehkamp.nl/Zoeken/ArtikelDetail.aspx?ArtikelNummer=946124&Ntt=rode%20broek&PI=0&PrI=50&Nrpp=96&Blocks=0&View=Grid&NavState=%2fDamesmode%2f_%2fN-16ag"
 },
 {
   "Gender": "female",
   "FileId": 901195,
   "Name": "Miss Etam Lang slim fit jeans",
   "Category": "romper",
   "mapping": "bottom",
   "Meta": "blue pants",
   "link": "https://www.wehkamp.nl/Zoeken/ArtikelDetail.aspx?ArtikelNummer=901195&Ntt=lange%20blauwe%20broek&PI=0&PrI=9&Nrpp=96&Blocks=0&View=Grid"
 },
 {
   "Gender": "female",
   "FileId": 876120,
   "Name": "Sandwich broek",
   "Category": "romper",
   "mapping": "bottom",
   "Meta": "white pants",
   "link": "https://www.wehkamp.nl/Zoeken/ArtikelDetail.aspx?ArtikelNummer=876120&Ntt=lange%20blauwe%20broek%20wit%20weid&PI=0&PrI=3&Nrpp=96&Blocks=0&View=Grid"
 },
 {
   "Gender": "female",
   "FileId": 682276,
   "Name": "Jack Wolfskin dames afritsbroek Marrakech",
   "Category": "sports",
   "mapping": "bottom",
   "Meta": "black sports pants",
   "link": "https://www.wehkamp.nl/Zoeken/ArtikelDetail.aspx?ArtikelNummer=682276&Ntt=sport%20vrouwen%20broek&PI=0&PrI=0&Nrpp=96&Blocks=0&View=Grid"
 },
 {
   "Gender": "female",
   "FileId": 911170,
   "Name": "Miss Etam Regulier cropped loose broek",
   "Category": "sports",
   "mapping": "bottom",
   "Meta": "flowers sports pans",
   "link": "https://www.wehkamp.nl/Zoeken/ArtikelDetail.aspx?ArtikelNummer=911170&Ntt=sport%20vrouwen%20broek%20bloemen&PI=0&PrI=18&Nrpp=96&Blocks=0&View=Grid"
 },
 {
   "Gender": "female",
   "FileId": 687324,
   "Name": "whkmp's GREAT LOOKS SPORT broek",
   "Category": "sports",
   "mapping": "bottom",
   "Meta": "white black pants sports",
   "link": "https://www.wehkamp.nl/Zoeken/ArtikelDetail.aspx?ArtikelNummer=687324&Ntt=sport%20vrouwen%20broek%20zwart&PI=0&PrI=2&Nrpp=96&Blocks=0&View=Grid"
 },
 {
   "Gender": "female",
   "FileId": 933216,
   "Name": "Hunkemöller HKMX sportshort",
   "Category": "sports",
   "mapping": "bottom",
   "Meta": "white black pants sports",
   "link": "https://www.wehkamp.nl/Zoeken/ArtikelDetail.aspx?ArtikelNummer=933216&Ntt=sport%20vrouwen%20broek%20zwart&PI=0&PrI=19&Nrpp=96&Blocks=0&View=Grid"
 },
 {
   "Gender": "female",
   "FileId": 876293,
   "Name": "whkmp's GREAT LOOKS Jurk",
   "Category": "tops",
   "mapping": "whole",
   "Meta": "black dress thingy",
   "link": "https://www.wehkamp.nl/Zoeken/ArtikelDetail.aspx?ArtikelNummer=876293&Ntt=zwarte%20jurk&PI=0&PrI=14&Nrpp=96&Blocks=0&View=Grid"
 },
 {
   "Gender": "female",
   "FileId": 889843,
   "Name": "Mango sweater",
   "Category": "tops",
   "mapping": "top",
   "Meta": "blue sweater",
   "link": "https://www.wehkamp.nl/Zoeken/ArtikelDetail.aspx?ArtikelNummer=889843&Ntt=blauwe%20sweater&PI=0&PrI=84&Nrpp=96&Blocks=0&View=Grid&NavState=%2fDamesmode%2f_%2fN-16ag"
 },
 {
   "Gender": "female",
   "FileId": 838333,
   "Name": "WE Fashion loose fit top",
   "Category": "tops",
   "mapping": "top",
   "Meta": "blue top",
   "link": "https://www.wehkamp.nl/Zoeken/ArtikelDetail.aspx?ArtikelNummer=838333&Ntt=blauwe%20top&PI=0&PrI=73&Nrpp=96&Blocks=0&View=Grid"
 },
 {
   "Gender": "female",
   "FileId": 883236,
   "Name": "Paprika top",
   "Category": "tops",
   "mapping": "top",
   "Meta": "flowers top",
   "link": "https://www.wehkamp.nl/Zoeken/ArtikelDetail.aspx?ArtikelNummer=883236&Ntt=blouse%20bloemen&PI=0&PrI=16&Nrpp=96&Blocks=0&View=Grid"
 },
 {
   "Gender": "female",
   "FileId": 891064,
   "Name": "Claudia Sträter top",
   "Category": "tops",
   "mapping": "top",
   "Meta": "white top",
   "link": "https://www.wehkamp.nl/Zoeken/ArtikelDetail.aspx?ArtikelNummer=891064&Ntt=white%20top&PI=0&PrI=0&Nrpp=96&Blocks=0&View=Grid"
 }

        ]
    },
    "male": {
        "categories": {
            "shirts": {
                "name": "Shirts",
                "img": "thumbnailmentop.png"
            },
            "pants": {
                "name": "Pants",
                "img": "thumbnailmenbottoms.png"
            },
            "sweaters": {
                "name": "Sweaters",
                "img": "thumbnailmenssweaters.png"
            },
            "formal": {
                "name": "Formal",
                "img": "thumbnailmenformal.png"
            },
            "coats": {
                "name": "Coats",
                "img": "thumbnailmenjackets.png"
            },
            "sports": {
                "name": "Sports",
                "img": "thumbnailmensports.png"
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

        print(category)
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
                    "img": categoryData["img"],
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

