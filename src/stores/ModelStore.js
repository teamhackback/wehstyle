import {autorun, computed, observable} from 'mobx';

import index from '../../public/img/items/index.json';
import {forEachRight} from 'lodash';

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
      this.setGender("male");
      this.layers.push(this.items["blue_fancy_shirt"]);
      this.layers.push(this.items["blue_pants"]);
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
    console.log(layer.category);
    this.layers.filter(l => {
      return layer.category === l.category;
    }).forEach(l => {
      console.log("duplicate layer", l);
      this.removeLayer(l)
    });
    this.layers.push(layer);
  }
  removeLayer(layer) {
    this.layers.remove(layer);
  }
}


export const modelStore = new ModelStore();
export default ModelStore;
