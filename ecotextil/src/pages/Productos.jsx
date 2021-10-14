import React, { useEffect, useState } from "react";
import "styles/estilos.css";
import tela from "media/tela4.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

const Productos = () => {
  const [mostrarTabla, setMostrarTabla] = useState(true);
  useEffect(() => {
    console.log(setMostrarTabla);
  }, [mostrarTabla]);

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
      {
        //<img src={tela} alt="" />
      }
      <header class="font center ">Administrar Productos</header>
      <div className="contentSells">
        <section>
          <div>
            
            <form className="contentForm" action="">
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
                <div className="">
                  <h4>Registra el nuevo producto</h4>

                  <form className="contentForm">

                    <label>Identificador de producto
                      <input
                        type="text"
                        placeholder="Identificador de producto"
                        name="idproducto"
                      /><br />
                    </label><br />
                    <label>Nombre de producto
                      <input
                        type="text"
                        placeholder="Nombre de producto"
                        name="nameproducto"
                      />
                    </label><br />
                    <label>Cantidad producto
                      <input
                        type="text"
                        placeholder="Cantidad producto"
                        name="cantproducto"
                      />
                    </label><br />
                    <label>Precio Unitario producto
                      <input
                        type="text"
                        placeholder="Precio unitario producto"
                        name="precioroducto"
                      /><br />
                    </label>
                    <div>
                      <label for="Estado de producto">Estado de producto
                        <select name="estado" id="">
                          <option value="en proceso">Disponible</option>
                          <option value="cancelado">No Disponible</option>
                        </select>

                      </label>
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
                  <button type="button" className=" margen btn btn-primary btn-flat  ">
                    Buscar producto
                  </button>
                  <button type="button" className=" margen btn btn-primary btn-flat">
                    Listar producto
                  </button>
                </div>
              </legend>
              <TablaProductos/>

            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

const FormularioRegistroProductos = ({

}) => {
  
}

//Creación de table productos como componente
const TablaProductos = () => {
  return (
    <div>
      <h2>
        Lista de productos
      </h2>
      <table>
        <thead class="thead">
          <tr>
            <th>Identificador de producto</th>
            <th>Nombre de producto</th>
            <th>Cantidad producto</th>
            <th>Precio Unit producto</th>
            <th>Disponibilidad</th>
          </tr>
        </thead>
        <tbody>
          {
            //Llamada de productos desde el backend
          }
        </tbody>

      </table>
    </div>
  );
}

export default Productos;
