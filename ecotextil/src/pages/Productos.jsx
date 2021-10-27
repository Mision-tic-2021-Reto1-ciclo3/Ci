import React, { useEffect, useRef, useState } from "react";
import "styles/estilos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import { nanoid } from "nanoid";
import { Tooltip, Dialog } from "@material-ui/core";
import { ToastContainer } from 'react-toastify';
import { Toaster, toast } from 'react-hot-toast';
import { useAuth0 } from "@auth0/auth0-react";

const Productos = () => {
  const { logout }  = useAuth0();
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
      <div className="contentSells margen center">

        <button onClick={() => setMostrarTabla(!mostrarTabla)} type="button" className="btn btn-success btn-flat margen">
          {textoBoton}
        </button>

      </div>
      <mostrarTabla setMostrarTabla />
      <div><Toaster /></div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        draggable
        pauseOnHover
      />

      <button type="button" className="btn btn-danger btn-flat" onClick={() => logout({ returnTo: "http://localhost:3000/login" })}>Cerrar sesión</button>

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
      method: 'POST', url: 'http://localhost:5000/productos/',
      headers: { 'Content-Type': 'application/json' },
      data: { idProducto: nuevoProducto.idProducto, descripcion: nuevoProducto.descripcion, valorUnit: nuevoProducto.valorUnit, estado: nuevoProducto.estado },
    };

    await axios
      .request(options).then(function (response) {
        console.log(response.data);

        //toast.success('Producto agregado con éxito');
        toast.success('Producto agregado con éxito', {
          position: "bottom-center",
          autoClose: 5000,
        });
        console.log('producto agregado exitosamente');
      }).catch(function (error) {
        console.error(error);
        toast.error('Error agregando un producto', {
          position: "top-right",
          autoClose: 5000,
        });
        //Aquí va un toast (una librería para mostrar mensajes emergentes toast.error('Error creando un prod))
        console.error('Error creando un producto');
      });

    setMostrarTabla(true);
    //setProductos([...listaProductos, nuevoProducto]);
    console.log("producto agregado")
  };
  return (
    <div >
      <h2 className="subtitle">
        Gestión de productos
      </h2>
      <div className="center">
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
          <div className="margen">

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
          </div>
          <button type="submit" className="btn btn-outline-success btn-flat margen">
            Registrar producto
          </button>
          <br />

        </form>

      </div>
    </div>
  )
}

//Creación de table productos como componente
const TablaProductos = ({ listaProductos, setEjecutarConsulta }) => {
  const [busqueda, setBusqueda] = useState('');
  const [productosFiltrados, setProductosFiltrados] = useState(listaProductos);

  useEffect(() => {

    //Devuelve una lista filtrada
    setProductosFiltrados(
      listaProductos.filter((elemento) => {

        return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
      })
    );
  }, [busqueda, listaProductos]);

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
      <input
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)} placeholder="Buscar"
        className="" />
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
          <tr className="contentForm">
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
          {productosFiltrados.map((productos) => {
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
  const [openDialog, setOpenDialog] = useState(false);
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
      url: `http://localhost:5000/productos/${productos._id}/`,
      headers: { 'Content-Type': 'application/json' },
      data: { ...infoNuevoProducto }
    };

    await axios.request(options).then(function (response) {
      console.log(response.data);
      //Toast.succes
      toast.success('Producto actualizado con éxito', {
        position: "bottom-center",
        autoClose: 5000,
      });
      console.log("Registro Actualizado con éxito");
      setEdit(false);
      setEjecutarConsulta(true);
    }).catch(function (error) {
      //toast.error
      toast.error('No se pudo actualizar el producto', {
        position: "top-right",
        autoClose: 5000,
      });
      console.error(error);
    });

  };

  const eliminarProducto = async () => {
    const options = {
      method: 'DELETE',
      url: `http://localhost:5000/productos/${productos._id}/`,
      headers: { 'Content-Type': 'application/json' },
      data: { id: productos._id }
    };

    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        //Toast.succes
        toast.success('Producto eliminado de manera exitosa', {
          position: "bottom-center",
          autoClose: 5000,
        });
        console.log("Producto Eliminado con éxito");
        setEjecutarConsulta(true);
      }).catch(function (error) {
        //toast.error
        toast.error('No se pudo eliminar el producto', {
          position: "top-right",
          autoClose: 5000,
        });
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
        <div className="center">
          {edit ? (
            <>
              <Tooltip title="Confirmar Edición" arrow>
                <i text="Editar" className="mini" onClick={() => actualizarProducto()} class="fas fa-check"></i>
              </Tooltip>
              <Tooltip title="Cancelar Edición" arrow>
                <i className="mini" onClick={() => setEdit(!edit)} class="fas fa-ban"></i>

              </Tooltip>

            </>
          ) : (
            <>
              <Tooltip title="Editar Producto" arrow>
                <i className="mini" onClick={() => setEdit(!edit)} class="fas fa-pencil-alt"></i>
              </Tooltip>

              <Tooltip title="Eliminar Producto" arrow>
                <i className="mini" onClick={() => setOpenDialog(true)} class="fas fa-trash"></i>
              </Tooltip>

            </>
          )}
        </div>
        <Dialog open={openDialog}>
          <div className="contentForm margen">
            <h1>¿Está seguro de eliminar el producto?</h1>
            <div className="center margen">
              <button onClick={() => eliminarProducto()} type="button" class="btn btn-outline-success margen" >Sí</button>
              <button onClick={() => setOpenDialog(false)} type="button" class="btn btn-outline-danger margen">No</button>

            </div>
          </div>
        </Dialog>
      </td>
    </tr>
  );
}

export default Productos;
