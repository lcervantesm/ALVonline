import React from "react";
import "./style.css";

function Filter() {
    return (
    <div id="checkbox">
    <h5 className="filter-div">Filtra por categoria</h5>
        <form action="#">
            <p>
            <label>
                <input htmlFor="videojuegos" type="checkbox" id="videojuegos" className="red"/>
                <span className="letra">Videojuegos</span>
            </label>
            </p>
            <p>
            <label>
                <input htmlFor="tecnologia" type="checkbox" id="tecnologia" className="checkbox"/>
                <span className="letra">Tecnología</span>
            </label>
            </p>
            <p>
            <label>
                <input htmlFor="hogar" type="checkbox" id="hogar" className="checkbox"/>
                <span className="letra">Hogar</span>
            </label>
            </p>
            <p>
            <label>
                <input htmlFor="servicios" type="checkbox" id="servicios" className="checkbox"/>
                <span className="letra">Servicios</span>
            </label>
            </p>
            <p>
            <label>
                <input htmlFor="otros" type="checkbox" id="otros" className="checkbox"/>
                <span className="letra">Otros</span>
            </label>
            </p>
        </form>
    </div>
    );
}

export default Filter;