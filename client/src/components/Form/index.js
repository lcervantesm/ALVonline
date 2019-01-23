import React from "react";

// This file exports the Input, TextArea, and FormBtn components

function Form() {
    return (
<div id="modal1" class="modal">
    <div class="modal-content">
        <form>
            <span id="todo-item">
            <div class="row">
             <form class="col s12">
              <div class="row">
                                        <div class="input-field col s6">
                                          <input id="name" type="text" class="validate" data-length="15" maxlength="15"></input>
                                          <label for="name">Nombre</label>
                                        </div>
                                        <div class="input-field col s6">
                                          <input id="phone" type="tel" class="validate" data-length="10" maxlength="10"></input>
                                          <label for="phone">WhatsApp 10 Numeros</label>
                                        </div>
             </div>
             <div class="row">
                             <div class="input-field col s12">
                                <input id="item" type="text" data-length="30" maxlength="30"></input>
                                <label for="item">¿Qué quieres vender?</label>
                             </div>
                            <div class="input-field col s12">
                              <textarea id="description" class="materialize-textarea" data-length="240" maxlength="240"></textarea>
                              <label for="description">¿Que nos quieres contar de lo que vendes?</label>
                            </div>
             </div>
             <div class="input-field col s6">
                                    <select id="category">
                                      <option value="" disabled selected>Selecciona una categoria</option>
                                      <option value="../../IMAGES/videojuegos.png">Videojuegos</option>
                                      <option value="../../IMAGES/tecnologia.png">Tecnologia</option>
                                      <option value="../../IMAGES/hogar.png">Hogar</option>
                                      <option value="../../IMAGES/servicios.png">Servicios</option>
                                      <option value="../../IMAGES/otros.png">Otros</option>
                                    </select>
                                    <label>¿Qué tipo de venta es?</label>
              </div>
              <div class="input-field col s6">
                                    <select id="location">
                                      <option value="" disabled selected>Selecciona tu ubicacion</option>
                                      <option value="CDMX">Ciudad de México</option>
                                      <option value="EDOMX">Estado de México</option>
                                      <option value="Toluca">Toluca</option>
                                      <option value="Queretaro">Queretaro</option>
                                      <option value="Otro">Otro</option>
                                    </select>
                                    <label>¿Donde lo vendes?</label>
              </div>
              <div class="row">
                                    <form class="col s6">
                                      <div class="row">
                                        <div class="input-field col s6">
                                          <textarea id="price" class="materialize-textarea" data-length="10" maxlength="10"></textarea>
                                          <label for="price">Precio</label>
                                        </div>

                                        <div class="col s6">
                                                <button id="add-to-do" class="btn waves-effect waves-light summit" type="submit" name="action">Publicalo
                                                        <i class="material-icons right">send</i>
                                                </button>
                                        </div>
                                        </div>
            </form>
            </div>
            </form>
            </div>
            </span>
            </form>
            </div>
            </div>
            
    );
}

export default Form;
