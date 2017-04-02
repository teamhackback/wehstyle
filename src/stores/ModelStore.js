import {autorun, computed, observable} from 'mobx';

import index from '../../public/img/items/index.json';
import {forEachRight, includes, some} from 'lodash';
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
      this.layers.push(this.items["bra1"]);
      //this.layers.push(this.items["shorts1"]);
      //});
    //}, 2000);
  }
  @observable layers = [];
  @observable gender = "male";

  setGender(gender) {
    this.gender = gender;
    this.layers.clear();
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
    const excludeId = this.layers.length;
    if (this.layers.slice().filter(l => l.name === id).length == 0) {
      this.layers.push(layer);
      this.layers.filter((l, i) => {
        if (i === excludeId)
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
    const status = [];
    this.layers.forEach((l, i) => {
      if (l.category === "bodies") {
        return false;
      }
      status.push(l.category);
    });
    const preds = Object.values(this.items).filter((l, i) => {
      if (l.category === "bodies")
        return false;
      if (some(status, (s) => {
        return includes(parts[s], l.mapping);
      }))
        return false;

      if (fp.flow(
          fp.tail,
          fp.map('dominantColor'),
          fp.filter(e => e === l.dominantColor)
        )(this.layers))
        return true;

      return false;
    });
    console.log("preds", preds);
    return preds;
  }
}


export const modelStore = new ModelStore();
export default ModelStore;
