import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
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
import FileUpload from "./components/FileUpload";

function App() {
  return (
    <div>
      <Nav/>
      <Card title="Super TV"/>
      <Form/>
      <Registration/>
      <Login/>
      <Footer/>
      <FileUpload/>
    </div>
  );
}

export default App;
