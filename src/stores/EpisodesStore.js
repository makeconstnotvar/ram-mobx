//

import {makeAutoObservable} from "mobx";
import axios from "axios";

class EpisodesStore {
  constructor() {
    makeAutoObservable(this)
  }

  data = [];
  isError = false;
  isProgress = false;

  async fetch(params) {
    this.isError = false;
    this.isProgress = true;

    try {
      let response = await axios.get(`https://rickandmortyapi.com/api/episode/${params.ids}`);
      this.data = response.data || [];
    } catch (e) {
      this.isError = true;
    } finally {
      this.isProgress = false;
    }
  }
}

export {EpisodesStore}
