import React, {Fragment, useEffect} from "react";
import {inject, observer} from "mobx-react";

const CharactersPage = inject('$characters', '$episodes')(observer(props => {
  const {$characters, $episodes} = props;

  useEffect(() => {
    $characters.fetch();
  }, [$characters.filter]);

  const handler = (field, value) => {
    $characters.setFilter(field, value)
  }

  const showEpisodes = async (char) => {
    let epIds = $characters.episodesByChar(char.id);
    await $episodes.fetch({ids: epIds.join(',')});
    char.episodes = $episodes.data;
  }

  return (
    <Fragment>
      <h1>Персонажи</h1>
      <div>
        <button onClick={() => $characters.cleanFilter()}>очистить</button>
        Имя
        <input value={$characters.filter.name} onChange={e => handler('name', e.target.value)}/>
        <select value={$characters.filter.status} onChange={e => handler('status', e.target.value)}>
          <option value=''>Все</option>
          <option value='Dead'>Dead</option>
          <option value='Alive'>Alive</option>
          <option value='Unknown'>Unknown</option>
        </select>
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
            <div key={char.id}>
              <div>{char.name}, {char.status}</div>
              <img className='char-img' src={char.image}/>
              <button onClick={() => showEpisodes(char)}>Показать эпизоды</button>
              {
                char.episodes.map(ep => ep.name)
              }
            </div>
          ))
        }

      </div>
    </Fragment>
  )
}))
export {CharactersPage}
