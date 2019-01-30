import React, { Component } from "react";

class Card extends Component {

render() {

    return (
<div className="container">
  <div className="row">
     <div className="col s6 m6">
       <a href="hola" id="number" className="waves-effect waves-light btn-large hide-on-small-only">0 Articulos en venta</a>
     </div>
     <div className="col s6 m6">
       <a href="hola" id="number1" className="waves-effect waves-light btn-large watchers hide-on-small-only">0 Personas comprando</a>
     </div>
  </div>
    <div id="to-dos" className="row">
    <div id="test"class='card col s12 m4 l4 xl3 hoverable card'>
        <div class='card-image waves-effect waves-block waves-light'>
        <img class='activator cardimage' src="https://firebasestorage.googleapis.com/v0/b/alvonline.appspot.com/o/itemimages%2Fmbp15touch-silver-select-201807.jpeg?alt=media&amp;token=3ee57d2f-f14c-4bf4-a164-f98f7870270b"></img>
        </div>
        <div class='card-content'>
        <span class='activator titulo'>TELEVISOR PHILLIPS</span> 
        </div>

        <div className="card-details">
        <p>CDMX</p>
        <p>Nuevo</p>
        <p>$ 7,000 MXN</p>
        <p></p>
        </div>
        <div class="modal-footer">
      <a>23 de Junio 2019</a>
       </div>

        <div class='card-reveal '>
        <span class='card-title titulo'>TELEVISOR PHILLIPS</span>
        <hr></hr>
        <p>Buen estado, funcionando al 100% con factura original</p>
        <hr></hr>
        <p>CDMX</p>
        <p>Nuevo</p>
        <p>$ 7,000 MXN</p>
        <div class="modal-footer">
        <a>23 de Junio 2019</a>
        </div>
        </div>
        </div>
        </div>
</div>
    );
}

}
    export default Card;
