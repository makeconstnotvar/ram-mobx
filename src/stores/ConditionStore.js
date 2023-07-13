import {computed, makeObservable, observable} from "mobx";

class ConditionStore {
  constructor() {
    makeObservable(this)
  }

  @observable isSwitched = false;
  @observable isWindow = false;
  @observable isElectric = false;
  @observable isCentral = false;

  @computed get isEnabled() {
    return this.isSwitched && this.isWindow && this.isElectric && this.isCentral
  }
}
export {ConditionStore}
