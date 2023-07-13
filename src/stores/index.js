import {ConditionStore} from "./ConditionStore";
import {CharactersStore} from "./CharactersStore";

let stores = {
  $condition: new ConditionStore(),
  $characters: new CharactersStore()
}

export {stores}
