import React from "react";
import "./style.css";

function Filter() {
    return (
        <div id="modal5" className="modal bottom-sheet">
        <div className="modal-content">
        <blockquote>
    <h4>Filtrar por categoria</h4>
  <a className="waves-effect waves-light btn filtros" id="Accesorios">Accesorios</a>
  <a className="waves-effect waves-light btn filtros" id="Consolas">Consolas</a>
  <a className="waves-effect waves-light btn filtros" id="Juegos">Juegos</a>
  <a className="waves-effect waves-light btn filtros" id="Todos">Todos</a>
  </blockquote>
  <blockquote>
    <h4>Filtrar por consola</h4>
    <a className="waves-effect waves-light btn filtros" id="Nintendo3DS">Nintendo 3DS</a>
  <a className="waves-effect waves-light btn filtros" id="Clasico">Clasico</a>
  <a className="waves-effect waves-light btn filtros" id="PS3">PS3</a>
  <a className="waves-effect waves-light btn filtros" id="PS4">PS4</a>
  <a className="waves-effect waves-light btn filtros" id="Switch">Switch</a>
  <a className="waves-effect waves-light btn filtros" id="VITA">PSVita</a>
  <a className="waves-effect waves-light btn filtros" id="WiiU">WiiU</a>
  <a className="waves-effect waves-light btn filtros" id="Xbox">Xbox One</a>
  <a className="waves-effect waves-light btn filtros" id="Todos">Todos</a>
  </blockquote>
 </div>
       
</div>
    
    );
}

export default Filter;