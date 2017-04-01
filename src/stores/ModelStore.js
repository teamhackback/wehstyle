import {autorun, observable} from 'mobx';

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
export const items = index.items;
export const categories = index.categories;

class ModelStore {
  constructor() {
    //setTimeout(() => {
      //autorun(() => {
    // push the dummy body
      this.layers.push(items["dummy"]);
      this.layers.push(items["26908"]);
      this.layers.push(items["26837"]);
      //});
    //}, 2000);
  }
  @observable layers = [];



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
    const layer = items[id];
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
