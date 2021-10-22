import React, { useEffect, useRef, useState } from "react";
import "styles/estilos.css";
import tela from "media/tela4.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import { nanoid } from "nanoid";
//import { Toast } from "bootstrap";



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
  const [ejecutarConsulta, setEjecutarConsulta] = useState(true);

  useEffect(() => {
    const obtenerProductos = async () => {
      const options = { method: 'GET', url: 'http://localhost:5000/productos' };
      await axios.request(options).then(function (response) {
        setProductos(response.data);
      }).catch(function (error) {
        console.error(error);
      });
    };
    if (ejecutarConsulta) {
      obtenerProductos();
      setEjecutarConsulta(false);
    }

  }, [ejecutarConsulta])

  //método para obtener los productos de la base de datos
  useEffect(() => {


    //Obtener lista de productos desde el backend
    if (mostrarTabla) {
      setEjecutarConsulta(true);
    }
  }, [mostrarTabla]);

  /*
    //UseEffect para llamar datos desde el back
    useEffect(() => {
      setProductos(productosBackend);
    }, []);
  */
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
        <TablaProductos listaProductos={productos} setEjecutarConsulta={setEjecutarConsulta} />
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

//formulario para registrar productos
const FormularioRegistroProductos = ({ setMostrarTabla, listaProductos, setProductos }) => {
  const form = useRef(null);

  const submitForm = async (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);

    //conexión a la base de datos
    const nuevoProducto = {};
    fd.forEach((value, key) => {
      nuevoProducto[key] = value;
    });

    const options = {
      method: 'POST', url: 'http://localhost:5000/productos/nuevo/',
      headers: { 'Content-Type': 'application/json' },
      data: { idProducto: nuevoProducto.idProducto, descripcion: nuevoProducto.descripcion, valorUnit: nuevoProducto.valorUnit, estado: nuevoProducto.estado },
    };

    await axios
      .request(options).then(function (response) {
        console.log(response.data);
        console.log('producto agregado exitosamente');
      }).catch(function (error) {
        console.error(error);
        //Aquí va un toast (una librería para mostrar mensajes emergentes toast.error('Error creando un prod))
        console.error('Error creando un producto');
      });

    setMostrarTabla(true);
    //setProductos([...listaProductos, nuevoProducto]);
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
const TablaProductos = ({ listaProductos, setEjecutarConsulta }) => {
  useEffect(() => {
    console.log("Listado de productos en el componente de la tabla", listaProductos);
  }, [listaProductos]);
  //const form = useRef(null);

  //una manera para poder modificar los campos
  /*const submitEdit = (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);
    console.log(e);
  };*/
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
      {
        /*
        <form ref={form} onSubmit={submitEdit}>
        </form>
        */
      }
      <table className="tabla">
        <thead>
          <tr>
            <th>Identificador de producto</th>
            <th>Descripción de producto</th>
            <th>Valor Unit producto</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            //Llamada de productos desde el backend
          }
          {listaProductos.map((productos) => {
            return (
              <FilaProducto key={nanoid()} productos={productos} setEjecutarConsulta={setEjecutarConsulta} />
            );
          })}
        </tbody>
      </table>


    </div>
  );
}

//Método para actualizar las filas de la tabla por cada registro
const FilaProducto = ({ productos, setEjecutarConsulta }) => {
  console.log("producto", productos)
  const [edit, setEdit] = useState(false);
  const [infoNuevoProducto, setInfoNuevoProducto] = useState({
    idProducto: productos.idProducto,
    descripcion: productos.descripcion,
    valorUnit: productos.valorUnit,
    estado: productos.estado,
  })
  const actualizarProducto = async () => {
    console.log(infoNuevoProducto);
    //enviar información al backend
    const options = {
      method: 'PATCH',
      url: 'http://localhost:5000/productos/editar/',
      headers: { 'Content-Type': 'application/json' },
      data: { ...infoNuevoProducto, id: productos._id }
    };

    await axios.request(options).then(function (response) {
      console.log(response.data);
      //Toast.succes
      console.log("Registro Actualizado con éxito");
      setEdit(false);
      setEjecutarConsulta(true);
    }).catch(function (error) {
      //toast.error
      console.error(error);
    });

  };

  const eliminarProducto = async () => {
    const options = {
      method: 'DELETE',
      url: 'http://localhost:5000/productos/eliminar/',
      headers: { 'Content-Type': 'application/json' },
      data: { id: productos._id }
    };

    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        //Toast.succes
        console.log("Producto Eliminado con éxito");
        setEjecutarConsulta(true);
      }).catch(function (error) {
        //toast.error
        console.error(error);
        console.log("Error eliminando el producto");

      });
  };
  return (
    <tr >
      {edit ?
        <>
          <td><input type="text" value={infoNuevoProducto.idProducto}
            onChange={(e) => setInfoNuevoProducto({ ...infoNuevoProducto, idProducto: e.target.value })} /></td>
          <td><input type="text" value={infoNuevoProducto.descripcion}
            onChange={(e) => setInfoNuevoProducto({ ...infoNuevoProducto, descripcion: e.target.value })} /></td>
          <td><input type="text" value={infoNuevoProducto.valorUnit}
            onChange={(e) => setInfoNuevoProducto({ ...infoNuevoProducto, valorUnit: e.target.value })} /></td>
          <td><input type="text" value={infoNuevoProducto.estado} onChange={(e) => setInfoNuevoProducto({ ...infoNuevoProducto, estado: e.target.value })} /></td>
        </>
        :
        <>
          <td>{productos.idProducto}</td>
          <td>{productos.descripcion}</td>
          <td>{productos.valorUnit}</td>
          <td>{productos.estado}</td>

        </>
      }
      <td>
        <div className="mini">
          {edit ? (<i text="Editar" className="mini" onClick={() => actualizarProducto()} class="fas fa-check"></i>
          ) : (
           
           

              <i className="mini" onClick={() => setEdit(!edit)} class="fas fa-pencil-alt"></i>
            
              

          )}
          <i className="mini" onClick={() => eliminarProducto()} class="fas fa-trash"></i>

        </div>
      </td>

    </tr>

  );
}

export default Productos;
