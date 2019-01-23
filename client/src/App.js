import React from "react";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import Items from "./pages/items";
//import Detail from "./pages/Detail";
//import NoMatch from "./pages/NoMatch";
//import Nav from "./components/Nav";
import Card from "./components/Card";
import Nav from "./components/Nav";
import Form from "./components/Form";
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <Nav/>
      <Card title="Super TV"/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;
