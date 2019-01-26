import React, { Component } from "react";
import Style from "./style.css";

class Card extends Component {

    constructor(props) {
        super(props);
    }


render() {

    return (
<div className="container">
  <div className="row">
     <div className="col s6 m6">
       <a id="number" className="waves-effect waves-light btn-large hide-on-small-only">0 Articulos en venta</a>
     </div>
     <div className="col s6 m6">
       <a id="number1" className="waves-effect waves-light btn-large watchers hide-on-small-only"></a>
     </div>
  </div>
    <div id="to-dos" className="row"></div>
        {/* <div className="card col s3 hoverable">
        <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" alt="videojuegos" src="../../IMAGES/videojuegos.png"></img>
        </div>
        <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">{this.props.title}<i className="material-icons right">more_vert</i></span>
        <p><a href="tel:PHONE" class="waves-effect waves-light btn-small contactar">Contactar</a></p>
        </div>
        <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">Television 27" Phillips<i className="material-icons right">close</i></span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde placeat porro beatae dicta ex consequatur mollitia pariatur nihil excepturi libero esse omnis perferendis optio veniam cum incidunt, voluptas eaque molestias.</p>
        <p>$ 7,000 MXN - CDMX - Electronicos</p>
        </div>
        </div> */}

        
        
</div>
    );
}

}
    export default Card;
