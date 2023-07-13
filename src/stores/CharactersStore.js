import {action, makeObservable, observable} from "mobx";
import axios from "axios";

class CharactersStore {
  constructor() {
    makeObservable(this)
  }

  @observable filter = {
    name: '',
    status: ''
  };
  @observable data = [];
  @observable isError = false;
  @observable isProgress = false;

  @action setFilter(field, value) {
    this.filter = {...this.filter, [field]: value}
  }

  cleanFilter() {
    this.filter = {
      name: '',
      status: ''
    }
  }


  @action
  async fetch() {
    this.isError = false;
    this.isProgress = true;

    try {
      let response = await axios.get('https://rickandmortyapi.com/api/character', {params: this.filter});
      this.data = response.data?.results || [];
    } catch (e) {
      this.isError = true;
    } finally {
      this.isProgress = false;
    }
  }
}

export {CharactersStore}
