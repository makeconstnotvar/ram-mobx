import {computed, makeObservable, observable,action} from "mobx";

class ConditionStore {
  constructor() {
    makeObservable(this)
  }

  @observable isSwitched = false;
  @observable isWindow = false;
  @observable isElectric = false;
  @observable isCentral = false;

  @action test(){
    this.isElectric = true
    this.isWindow = true;
  }

  @computed get isEnabled() {
    return this.isSwitched && this.isWindow && this.isElectric && this.isCentral
  }
}
export {ConditionStore}
