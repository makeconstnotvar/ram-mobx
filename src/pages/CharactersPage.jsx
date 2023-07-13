import React, {Fragment, useEffect, useRef} from "react";
import {inject, observer} from "mobx-react";

const CharactersPage = inject('$characters')(observer(props => {
  const {$characters} = props;

  useEffect(() => {
    $characters.fetch();
  }, [$characters.filter]);

  let renderCounter = useRef(0);

  const handler = (field, value) => {
    $characters.setFilter(field, value)
    //$characters.fetch();
  }

  console.log(++renderCounter.current);

  return (
    <Fragment>
      <h1>Персонажи</h1>
      <div>
        <button onClick={() => $characters.cleanFilter()}>очистить</button>
        Имя
        <input value={$characters.filter.name} onChange={e => handler('name', e.target.value)}/>
      </div>
      <div>
        {
          $characters.isError &&
          <div>Ошибка</div>
        }
        {
          $characters.isProgress &&
          <div>Прогресс</div>
        }
        {
          !$characters.isError &&
          $characters.data.map(char => (
            <div key={char.id}>{char.name}</div>
          ))
        }
      </div>
    </Fragment>
  )
}))
export {CharactersPage}
