import React from "react";
import "styles/estilos.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Productos = () => {
  return (
    <div className="style">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
        crossorigin="anonymous"
      />
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Mulish:wght@500&family=Noto+Sans:wght@700&family=Raleway&display=swap');
      </style>
      <header class="font center ">Administrar Productos</header>
      <div className="contentSells">
        <section>
          <div>
            <form className="contentForm" action="">
              <h1 className="subtitle">Gestión de Productos</h1>
              <h1 className="subtitle">Listado de productos</h1>
              <legend>
                Estado del producto
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-shopping-cart"
                  aria-hidden="true"
                >
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>rgb(130, 155, 184)
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                <div className="col-xs-4 margen">
                  <button type="button" class="btn btn-primary btn-flat">
                    Buscar producto
                  </button>
                  <button type="button" class="btn btn-primary btn-flat">
                    Listar producto
                  </button>
                </div>
              </legend>
              <div id="main-container">
                <table className="table">
                  <thead class="thead">
                    <tr>
                      <th>Identificador de producto</th>
                      <th>Nombre de producto</th>
                      <th>Cantidad producto</th>
                      <th>Precio Unit producto</th>
                      <th>Disponibilidad</th>
                    </tr>
                  </thead>
                  <tr>
                    <td>0001</td>
                    <td>Tela uno</td>
                    <td>12</td>
                    <td>80.000</td>
                    <td>Disp</td>
                  </tr>
                  <tr>
                    <td>0002</td>
                    <td>Tela dos</td>
                    <td>24</td>
                    <td>120.000</td>
                    <td>Disp</td>
                  </tr>
                  <tr>
                    <td>0003</td>
                    <td>Tela tres</td>
                    <td>36</td>
                    <td>150.000</td>
                    <td>Disp</td>
                  </tr>
                </table>
              </div>
              <fieldset>
                <legend>
                  Registro de productos
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-shopping-cart"
                    aria-hidden="true"
                  >
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>rgb(130, 155, 184)
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg>
                </legend>
                <div className="login-box-body-prod">
                  <p class="login-box-msg">Registra el nuevo producto</p>
                  <form>
                    <div class="form-group has-feedback">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Identificador de producto"
                        name="idproducto"
                      />
                      <span class="glyphicon glyphicon-user form-control-feedback"></span>
                    </div>
                    <div class="form-group has-feedback">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Nombre de producto"
                        name="nameproducto"
                      />
                      <span class="glyphicon glyphicon-user form-control-feedback"></span>
                    </div>
                    <div class="form-group has-feedback">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Cantidad producto"
                        name="cantproducto"
                      />
                      <span class="glyphicon glyphicon-user form-control-feedback"></span>
                    </div>
                    <div class="form-group has-feedback">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Precio unitario producto"
                        name="precioroducto"
                      />
                      <span class="glyphicon glyphicon-user form-control-feedback"></span>
                    </div>

                    <div>
                      <label for="Estado de producto">Estado de producto</label>
                      <select name="estado" id="">
                        <option value="en proceso">Disponible</option>
                        <option value="cancelado">No Disponible</option>
                      </select>
                    </div>
                    <div class="row center">
                      <button type="button" class="btn btn-primary btn-flat">
                        Registrar
                      </button>
                      <br />
                    </div>
                  </form>
                </div>
              </fieldset>

              <div className="col-xs-4 margen">
                <button type="button" class="btn btn-primary">
                  Actualizar
                </button>

                <button type="button" class="btn btn-primary btn-flat">
                  Quitar
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Productos;
