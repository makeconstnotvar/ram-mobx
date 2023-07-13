import React from "react";
import {Route, Routes} from "react-router-dom";
import {ConditionPage} from "./pages/ConditionPage";
import {Layout} from "./components/Layout";
import {CharactersPage} from "./pages/CharactersPage";


const App = props => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<main>
          <h1>Main page</h1>
        </main>}/>
        <Route path="/condition" element={<ConditionPage/>}/>
        <Route path="/characters" element={<CharactersPage/>}/>
      </Routes>
    </Layout>
  )
}


export {App}
