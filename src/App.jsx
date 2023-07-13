import React from "react";
import {Route, Routes} from "react-router-dom";
import {ConditionPage} from "./pages/ConditionPage";
import {Layout} from "./components/Layout";

const App = props => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<main>
          <h1>Main page</h1>
        </main>}/>
        <Route path="/condition" element={<ConditionPage/>}/>
      </Routes>
    </Layout>
  )
}


export {App}
