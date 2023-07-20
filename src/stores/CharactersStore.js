import {makeAutoObservable} from "mobx";
import axios from "axios";

class CharactersStore {
  constructor() {
    makeAutoObservable(this)
  }

  filter = {
    name: '',
    status: ''
  };
  data = [];
  isError = false;
  isProgress = false;

  setFilter(field, value) {
    this.filter = {...this.filter, [field]: value}
  }

  episodesByChar(id) {
    let char =  this.data.find(char=> char.id === id)
    let eps = char.episode.map(ep =>  ep.split('/').pop())
    const set = new Set(eps);
    return [...set]
  }


  cleanFilter() {
    this.filter = {
      name: '',
      status: ''
    }
  }


  async fetch() {
    this.isError = false;
    this.isProgress = true;

    try {
      let response = await axios.get('https://rickandmortyapi.com/api/character', {params: this.filter});
      this.data = response.data?.results || [];
      this.data.forEach(char=>char.episodes = [])
    } catch (e) {
      this.isError = true;
    } finally {
      this.isProgress = false;
    }
  }
}

export {CharactersStore}
