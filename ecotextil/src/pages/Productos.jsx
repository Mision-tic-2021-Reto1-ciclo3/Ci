import React, { useEffect, useRef, useState } from "react";
import "styles/estilos.css";
import tela from "media/tela4.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

const productosBackend = [
  { idProducto: 1, descripcion: "tela a", valorUnit: 10000, estado: "disponible" },
  { idProducto: 2, descripcion: "tela b", valorUnit: 10000, estado: "disponible" },
  { idProducto: 3, descripcion: "tela c", valorUnit: 10000, estado: "disponible" },
  { idProducto: 4, descripcion: "tela d", valorUnit: 10000, estado: "disponible" },

];

const Productos = () => {
  const [mostrarTabla, setMostrarTabla] = useState(false);
  //variable para obtener los productos
  const [productos, setProductos] = useState([]);
  const [textoBoton, setTextoBoton] = useState("Registrar producto");


  //UseEffect para llamar datos desde el back
  useEffect(() => {
    setProductos(productosBackend);
  }, []);

  //useEffect para cambiar el contenido del texto del botón
  useEffect(() => {
    if (mostrarTabla) {
      setTextoBoton("Agregar nuevo producto");
    } else {
      setTextoBoton("Listar productos")
    }
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
      <header class="font center ">Administrar Productos</header>
      {mostrarTabla ? (
        <TablaProductos listaProductos={productos} />
      ) : (
        <FormularioRegistroProductos setMostrarTabla={setMostrarTabla}
          listaProductos={productos}
          setProductos={setProductos} />
      )}
      <div className="contentSells">

        <button type="button" class="btn btn-primary">
          Actualizar
        </button>
        <button type="button" class="btn btn-primary btn-flat">
          Eliminar
        </button>
        <button type="button" className=" margen btn btn-primary btn-flat  ">
          Buscar producto
        </button>
        <button onClick={() => setMostrarTabla(!mostrarTabla)} type="button" className=" margen btn btn-primary btn-flat">
          {textoBoton}
        </button>

      </div>
      <mostrarTabla setMostrarTabla />

    </div>
  );
};

const FormularioRegistroProductos = ({ setMostrarTabla, listaProductos, setProductos }) => {
  const form = useRef(null);

  const submitForm = (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);
    const nuevoProducto = {};
    fd.forEach((value, key) => {
      nuevoProducto[key] = value;
    });
    setMostrarTabla(true);
    setProductos([...listaProductos, nuevoProducto]);
    console.log("producto agregado")
  };
  return (
    <div>
      <h2 className="subtitle">
        Gestión de productos
      </h2>
      <form ref={form} onSubmit={submitForm}>
        <legend>
          Agregar productos
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
        <label htmlFor="idProducto">Identificador de producto
          <input
            type="text"
            placeholder="Identificador de producto"
            name="idProducto"
          /><br />
        </label><br />
        <label htmlFor="descripcion">Descripción de producto
          <input
            type="text"
            placeholder="Descripción de producto"
            name="descripcion"
          />
        </label><br />
        <label htmlFor="valorUnit">Valor Unitario producto
          <input
            type="text"
            placeholder="Valor unitario producto"
            name="valorUnit"
          />
        </label><br />
        <label htmlFor="estado">Estado de producto
          <select name="estado" id="">
            <option disabled value={0} >Seleccione una opción</option>
            <option >Disponible</option>
            <option >No Disponible</option>
          </select>
        </label><br />
        <button type="submit" className="btn btn-primary btn-flat">
          Registrar producto
        </button>
        <br />

      </form>
    </div>
  )
}

//Creación de table productos como componente
const TablaProductos = ({ listaProductos }) => {
  useEffect(() => {
    console.log("Listado de productos en el componente de la tabla", listaProductos);
  }, [listaProductos]);
  return (
    <div>
      <h1 className="subtitle">Registro de Productos</h1>
      <legend>

        Listado de productos
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </svg>

        <i class="bi bi-cart-fill"></i>
      </legend>
      <table>
        <thead>
          <tr>
            <th>Identificador de producto</th>
            <th>Descripción de producto</th>
            <th>Valor Unit producto</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {
            //Llamada de productos desde el backend
          }
          {listaProductos.map((productos) => {
            return (
              <tr>
                <td>{productos.idProducto}</td>
                <td>{productos.descripcion}</td>
                <td>{productos.valorUnit}</td>
                <td>{productos.estado}</td>

              </tr>
            );
          })}
        </tbody>

      </table>
    </div>
  );
}

export default Productos;
