import React, { Component } from "react";
import Style from "./style.css";

class Card extends Component {

    constructor(props) {
        super(props);
    }


render() {

    return (
        <div class="container">
  <div class="row">
      <a id="number" class="waves-effect waves-light btn-large">0 Articulos en venta</a>
  </div>
    <div id="to-dos" class="row"></div>
        <div class="card col s3 hoverable">
        <div class="card-image waves-effect waves-block waves-light">
        <img class="activator" alt="videojuegos" src="../../IMAGES/videojuegos.png"></img>
        </div>
        <div class="card-content">
        <span class="card-title activator grey-text text-darken-4">{this.props.title}<i class="material-icons right">more_vert</i></span>
        <p><a href="#">Telefono</a></p>
        </div>
        <div class="card-reveal">
        <span class="card-title grey-text text-darken-4">Television 27" Phillips<i class="material-icons right">close</i></span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde placeat porro beatae dicta ex consequatur mollitia pariatur nihil excepturi libero esse omnis perferendis optio veniam cum incidunt, voluptas eaque molestias.</p>
        <p>$ 7,000 MXN - CDMX - Electronicos</p>
        </div>
        </div></div>
    );
}

}
    export default Card;
