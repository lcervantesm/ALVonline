import React from "react";
//import Pagination from "react-js-pagination";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import Items from "./pages/items";
//import Detail from "./pages/Detail";
//import NoMatch from "./pages/NoMatch";
//import Nav from "./components/Nav";
import Card from "./components/Card";
import Nav from "./components/Nav";
import Form from "./components/Form";
import Registration from "./components/Registration";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Myads from "./components/Myads";
import Filter from "./components/Filter";

function App() {
  return (
    <div>
      <Nav/>
      <Myads/>
      <Filter/>
      <Card title="Super TV"/>
      <Form/>
      <Registration/>
      <Login/>
      <Footer/>
    </div>
  );
}

export default App;
