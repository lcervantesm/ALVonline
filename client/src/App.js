import React from "react";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import Items from "./pages/items";
//import Detail from "./pages/Detail";
//import NoMatch from "./pages/NoMatch";
//import Nav from "./components/Nav";
import Card from "./components/Card";
import Nav from "./components/Nav";
import Form from "./components/Form";

function App() {
  return (
    <div>
      Hola
      <Nav/>
      <Card title="Super TV"/>
      <Form/>
    </div>
  );
}

export default App;
