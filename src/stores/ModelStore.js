import {autorun, observable} from 'mobx';

const sortOrder = [
  "body",
  "underwear",
  "pants",
  "skirt",
  "top",
  "hat",
  "shoes"
];

class ModelStore {
  constructor() {
    //setTimeout(() => {
      //autorun(() => {
      //this.layers.clear();
      //});
    //}, 2000);
  }
  @observable layers = [
    {
      name: "base_body",
      src: "./img/bodys/dummybody.png",
    },
    {
      name: "pants",
      src: "./img/items/26925.png",
    },
    {
      name: "shirt",
      src: "./img/items/26512.png",
    }
  ];

  addLayer(layer) {

  }

  //@computed get layers() {
    //return this.layers;
  //}
}

export const modelStore = new ModelStore();
export default ModelStore;
