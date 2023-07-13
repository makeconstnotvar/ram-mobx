import React, {useRef} from "react";
import {inject, observer} from "mobx-react";
import {Status} from "../components/Status";

const ConditionPage = inject('$condition')(observer(props => {
  const {$condition} = props;
  let renderCounter = useRef(0)
  const switchHandler = () => {
    $condition.isSwitched = !$condition.isSwitched
  }
  console.log(++renderCounter.current)
  return (
    <main>
      <h1>Кондиционер <Status isOn={$condition.isEnabled}/></h1>
      <button onClick={switchHandler}>Включатель <Status isOn={$condition.isSwitched}/></button>
      <button onClick={() => {
        $condition.isWindow = !$condition.isWindow
      }}>Окно <Status isOn={$condition.isWindow}/></button>
      <button onClick={() => {
        $condition.isElectric = !$condition.isElectric
      }}>Электричество <Status isOn={$condition.isElectric}/></button>
      <button onClick={() => {
        $condition.isCentral = !$condition.isCentral
      }}>Центральный <Status isOn={$condition.isCentral}/></button>
    </main>
  )
}))

export {ConditionPage}
