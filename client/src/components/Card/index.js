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
        <span class='activator titulo'>TELEVISOR PHILLIPS</span><i class='material-icons right'>more_vert</i>
        <p><a href="6271231192" class='waves-effect waves-light btn-small contactar flow-text'>Contactar</a></p>
        </div>
        <div class='card-reveal'>"+
        <span class='card-title grey-text text-darken-4 flow-text'>TELEVISOR PHILLIPS<i class='material-icons right'>close</i></span>
        <p class='flow-text'>TODO EN BUEN ESTADO</p>"+
        <p class='flow-text'>7000 MXN - CDMX" - ID:01</p>
        </div>
        </div>
        </div>
</div>
    );
}

}
    export default Card;
