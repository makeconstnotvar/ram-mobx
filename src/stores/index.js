import {ConditionStore} from "./ConditionStore";
import {CharactersStore} from "./CharactersStore";
import {EpisodesStore} from "./EpisodesStore";

let stores = {
  $condition: new ConditionStore(),
  $characters: new CharactersStore(),
  $episodes: new EpisodesStore()
}

export {stores}
