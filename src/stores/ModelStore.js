import {autorun, computed, observable} from 'mobx';

import index from '../../public/img/items/index.json';
import {forEachRight, includes, some, sortBy, take} from 'lodash';
import fp from 'lodash/fp';

const parts = index.parts;

const sortOrder = [
  "body",
  "underwear",
  "pants",
  "skirt",
  "top",
  "hat",
  "shoes"
];

export const GLOBAL_IMAGE_PATH = "/img/items";

class ModelStore {
  constructor() {
    //setTimeout(() => {
      //autorun(() => {
    // push the dummy body
      //this.setGender("male");
      //this.layers.push(this.items["blue_fancy_shirt"]);
      //this.layers.push(this.items["blue_pants"]);
      this.setGender("female");
      //this.layers.push(this.items["shorts1"]);
      //});
    //}, 2000);
  }
  @observable layers = [];
  @observable gender = "male";
  @observable searchTerm = "";

  setGender(gender) {
    if (gender === this.gender)
      return;
    if (gender !== "male" && gender !== "female")
      return;
    this.gender = gender;
    this.layers.clear();
    this.searchTerm = "";
    this.layers.push(this.items[gender]);
  }
  @computed get items() {
    return index[this.gender].items;
  }
  @computed get categories() {
    return index[this.gender].categories;
  }

  imagePath(item) {
    return GLOBAL_IMAGE_PATH + "/" + this.gender + "/" + item.src;
  }

  imageThumbnail(item) {
    return GLOBAL_IMAGE_PATH + "/" + this.gender + "/" + item.thumbnail;
  }

  //@computed get layers() {
    //return this.layers;
  //}

  findById = (x, y) => {
    let id = -1;
    forEachRight(this.layers.slice(), (e, i) => {
      if (e.cropping.left <= x && x <= e.cropping.right &&
          e.cropping.upper <= y && y <= e.cropping.lower) {
        id = i;
        return false;
      }
    });
    if (id >= 0) {
      return this.layers[id];
    }
    return false;
  };

  addLayerById(id) {
    const layer = this.items[id];
    const lid = layer.id;
    if (this.layers.slice().filter(l => l.name === id).length === 0) {
      if (layer.mapping === "bottom") {
        this.layers.splice(1, 0, layer);
      } else {
        this.layers.push(layer);
      }

      this.layers.filter((l, i) => {
        if (l.id === lid)
          return false;
        if (l.category === "bodies") {
          return false;
        }
        if (layer.mapping === l.mapping ) {
          return true;
        }
        return !includes(parts[layer.mapping], l.mapping);
      }).forEach(l => {
        console.log("duplicate layer", l);
        setTimeout(() => {
          this.removeLayer(l)
        }, 50);
      });
    }
  }
  removeLayer(layer) {
    this.layers.remove(layer);
  }

  @computed get recommendedItems() {
    console.log("running pred");
    const status = [];
    this.layers.forEach((l, i) => {
      if (l.category === "bodies") {
        return false;
      }
      status.push(l.category);
    });
    let preds = Object.values(this.items).filter((l, i) => {
      if (l.category === "bodies")
        return false;
      if (some(this.layers, (s) => {
          return s.id === l.id;
      }))
        return false;
      return true;
    }).map(l => {
      return {sum: fp.tail(this.layers).reduce((m, e) => {
        return m + Math.sqrt(
          Math.pow(e.dominantColor[0] - l.dominantColor[0], 2)
          + Math.pow(e.dominantColor[1] - l.dominantColor[1], 2)
          + Math.pow(e.dominantColor[2] - l.dominantColor[2], 2)
        )
      }, 0)
      , o: l};
    });
    preds = sortBy(preds, 'sum');
    preds = take(preds, 3).map(e => e.o);
    return preds;
  }

  @computed get searchedItems() {
    console.log("running pred");
    const search = this.searchTerm.toLowerCase();
    return Object.values(this.items).filter((l, i) => {
      if (l.category === "bodies")
        return false;
      if (some(this.layers, (s) => {
          return s.id === l.id;
      }))
        return false;
      return l.name.toLowerCase().indexOf(search) >= 0 ||
             l.meta.toLowerCase().indexOf(search) >= 0 ||
             l.fulltext.toLowerCase().indexOf(search) >= 0;
  });
  }
}


export const modelStore = new ModelStore();
export default ModelStore;
