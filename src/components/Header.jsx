import React from "react";
import {Link} from "react-router-dom";

const Header = props => {
  return (
    <div className='header'>
      <Link to='/'>Главная</Link>
      <Link to='/condition'>Кондиционер</Link>
    </div>
  )
}
export {Header}
