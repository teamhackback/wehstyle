import {autorun, observable} from 'mobx';

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
      src: "./img/items/pants1.png",
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
