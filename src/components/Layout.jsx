import React from "react";
import {Header} from "./Header";

const Layout = props => {
  return (
    <main className='layout-row'>
      <Header />
      <div  className='layout-col'>
        <div className='sidebar'>меню</div>
        <div>{props.children}</div>
      </div>
    </main>
  )
}
export {Layout}
