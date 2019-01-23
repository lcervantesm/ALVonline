import React from "react";

// This file exports the Input, TextArea, and FormBtn components

function Form() {
    return (
<div id="modal1" className="modal">
    <div className="modal-content">
            <span id="todo-item">
            <div className="row">
             <form className="col s12">
              
                                        <div className="input-field col s6">
                                          <input id="name" type="text" className="validate" data-length="15" maxlength="15"></input>
                                          <label for="name">Nombre</label>
                                        </div>
                                        <div class="input-field col s6">
                                          <input id="phone" type="tel" className="validate" data-length="10" maxlength="10"></input>
                                          <label for="phone">WhatsApp 10 Numeros</label>
                                        </div>
                             <div className="input-field col s12">
                                <input id="item" type="text" data-length="30" maxlength="30"></input>
                                <label for="item">¿Qué quieres vender?</label>
                             </div>
                            <div className="input-field col s12">
                              <textarea id="description" className="materialize-textarea" data-length="240" maxlength="240"></textarea>
                              <label for="description">¿Que nos quieres contar de lo que vendes?</label>
                            </div>
                               <div className="input-field col s6">
                                    <select id="category">
                                      <option value="" defaultValue>Selecciona una categoria</option>
                                      <option value="../../IMAGES/videojuegos.png">Videojuegos</option>
                                      <option value="../../IMAGES/tecnologia.png">Tecnologia</option>
                                      <option value="../../IMAGES/hogar.png">Hogar</option>
                                      <option value="../../IMAGES/servicios.png">Servicios</option>
                                      <option value="../../IMAGES/otros.png">Otros</option>
                                    </select>
                                    <label>¿Qué tipo de venta es?</label>
                             </div>
                             <div className="input-field col s6">
                                    <select id="location">
                                      <option value="" defaultValue>Selecciona tu ubicacion</option>
                                      <option value="CDMX">Ciudad de México</option>
                                      <option value="EDOMX">Estado de México</option>
                                      <option value="Toluca">Toluca</option>
                                      <option value="Queretaro">Queretaro</option>
                                      <option value="Otro">Otro</option>
                                    </select>
                                    <label>¿Donde lo vendes?</label>
                             </div>
                                        <div className="input-field col s6">
                                          <textarea id="price" class="materialize-textarea" data-length="10" maxlength="10"></textarea>
                                          <label for="price">Precio</label>
                                        </div>

                                        <div className="col s6">
                                                <button id="add-to-do" className="modal-close btn waves-effect waves-light summit disabled" type="submit" name="action">Publicalo
                                                        <i className="material-icons right">send</i>
                                                </button>
                                        </div>
            </form>
            </div>
            </span>
            </div>
            </div>
            
    );
}

export default Form;
