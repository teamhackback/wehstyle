import {computed, observable} from 'mobx';

class ModelStore {
    @observable layers = [
      {
        name: "base_body",
        src: "./img/bodys/dummybody.png",
      }
    ];

  addLayer(layer) {

  }

  @computed get layers() {
    return this.layers;
  }

}

export const modelStore = new ModelStore();
export default ModelStore;
