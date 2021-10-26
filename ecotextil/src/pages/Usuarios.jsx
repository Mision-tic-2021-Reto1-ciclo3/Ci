import React, { useEffect, useRef, useState } from "react";
import "styles/estilos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { nanoid } from "nanoid";
import { Tooltip, Dialog } from "@material-ui/core";
import { ToastContainer } from "react-toastify";
import  { Toaster, toast } from 'react-hot-toast';

const Usuarios = () => {
  const [mostrarTabla, setMostrarTabla] = useState(false);
  //variable para obtener los usuarios
  const [usuarios, setUsuarios] = useState([]);
  const [textoBoton, setTextoBoton] = useState("Validar Usuario");
  const [ejecutarConsulta, setEjecutarConsulta] = useState(true);

  useEffect(() => {
    const obtenerUsuarios = async () => {
      const options = { method: 'GET', url: 'http://localhost:5000/usuarios' };
      await axios.request(options).then(function (response) {
        setUsuarios(response.data);
      }).catch(function (error) {
        console.error(error);
      });
    }
    if (ejecutarConsulta) {
      obtenerUsuarios();
      setEjecutarConsulta(false);
    };

  }, [ejecutarConsulta])

  //método efect para obtener los usuarios de la base de datos
  useEffect(() => {
    if (mostrarTabla) {
      setEjecutarConsulta(true);
    }
  }, [mostrarTabla]);

  //useEffect para cambiar el contenido del texto del botón
  useEffect(() => {
    if (mostrarTabla) {
      setTextoBoton("Validar nuevo usuario");
    } else {
      setTextoBoton("Listar Usuarios")
    }
  }, [mostrarTabla]);


  return (
    <div class="style">
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
      <title>Usuarios</title>
      <header class="font center ">Administrar Usuarios</header>
      {
        mostrarTabla ? (
          <TablaUsuarios listaUsuarios={usuarios} setEjecutarConsulta={setEjecutarConsulta} />
        ) : (
          <FormularioRegistroUsuarios setMostrarTabla={setMostrarTabla} listaUsuarios={usuarios} setUsuarios={setUsuarios} />
        )
      }

      <div className="contentSells margen center">
        <button onClick={() => setMostrarTabla(!mostrarTabla)} type="button" className="btn btn-primary btn-flat margen">
          {textoBoton}
        </button>
      </div>
      <div><Toaster/></div>

      <mostrarTabla setMostrarTabla />

      <ToastContainer position='bottom-center' autoClose={5000} />


    </div>
  );
};

//formulario para validar usuarios
const FormularioRegistroUsuarios = ({ setMostrarTabla, listaUsuarios, setUsuarios }) => {
  const form = useRef(null);

  const submitForm = async (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);

    //conexión a la DB
    const nuevoUsuario = {};
    fd.forEach((value, key) => {
      nuevoUsuario[key] = value;
    });

    const options = {
      method: 'POST', url: 'http://localhost:5000/usuarios/',
      headers: { 'Content-Type': 'application/json' },
      data: {
        nombres: nuevoUsuario.nombres,
        correo: nuevoUsuario.correo,
        rol: nuevoUsuario.rol,
        estado: nuevoUsuario.estado
      },
    };

    await axios.request(options).then(function (response) {
      console.log(response.data);
      toast.success('Usuario validado con éxito', {
        position: "bottom-center",
        autoClose: 5000,
      });
        console.log('Usuario agregado con éxito');
    }).catch(function (error) {
      console.error(error);
      toast.error('No se pudo validar el usuario', {
        position: "top-right",
        autoClose: 5000,
      });
      //Aquí va un toast (una librería para mostrar mensajes emergentes toast.error('Error creando un usuario))
      console.error('Error creando un usuario');
    });

    setMostrarTabla(true);
    console.log('Usuario validado');

  };

  return (
    <div>
      <h2 className="subtitle">
        Gestión de usuarios
      </h2>
      <div className="center">
        <form ref={form} onSubmit={submitForm}>
          <legend>
            Validar Usuario
            <i class="far fa-user"></i>
          </legend>
          <div className="margen">
            <label htmlFor="nombres">Nombres usuario
              <input
                type="text"
                placeholder="nombres"
                name="nombres"
              />
            </label><br />
            <label htmlFor="correo">Correo usuario
              <input
                type="text"
                placeholder="correo"
                name="correo"
              />
            </label><br />

            <label htmlFor="rol">Rol de usuario
              <select name="rol" id="">
                <option disabled value={0} >Seleccione una opción</option>
                <option >Administrador</option>
                <option >Vendedor</option>
              </select>
            </label><br />
            <label htmlFor="estado">Estado de usuario
              <select name="estado" id="">
                <option value={0} >Pendiente</option>
                <option >Autorizado</option>
                <option >No Autorizado</option>
              </select>
            </label><br />

          </div>
          <button type="submit" className="btn btn-primary btn-flat margen">
            Validar Usuario
          </button>
        </form>

      </div>

    </div>
  );
}

//Creación de tabla usuarios
const TablaUsuarios = ({ listaUsuarios, setEjecutarConsulta }) => {
  const [busqueda, setBusqueda] = useState('');
  const [usuariosFiltrados, setUsuariosFiltrados] = useState(listaUsuarios);

  //Efect para devolver una lista filtrada

  useEffect(() => {
    setUsuariosFiltrados(
      listaUsuarios.filter((elemento) => {
        return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
      })
    );
  }, [busqueda, listaUsuarios]);

  useEffect(() => {
    console.log("Listado de productos en el componente de la tabla", listaUsuarios);
  }, [listaUsuarios]);

  return (
    <div>
      <h1 className="subtitle">Registro de Usuarios</h1>
      <input
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)} placeholder="Buscar"
        className="" />
      <legend>
        Estado del Usuario
        <i class="fas fa-users-cog"></i>
        <hr />
      </legend>
      <table className="tabla">
        <thead>
          <tr className="contentForm">
            <th>Nombres</th>
            <th>Correo </th>
            <th>Rol </th>
            <th>Estado</th>
            <th>Acciones Edit Del</th>
          </tr>
        </thead>
        <tbody>
          {
            usuariosFiltrados.map((usuarios) => {
              return (
                <FilaUsuario key={nanoid()} usuarios={usuarios} setEjecutarConsulta={setEjecutarConsulta} />
              );
            })}
        </tbody>
      </table>
    </div>
  )
}

//Método para actualizar las filas de la tabla por cada registro
const FilaUsuario = ({ usuarios, setEjecutarConsulta }) => {
  console.log('Usuario', usuarios);
  const [edit, setEdit] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [infoNuevoUsuario, setInfoNuevoUsuario] = useState({
    nombres: usuarios.nombres,
    correo: usuarios.correo,
    rol: usuarios.rol,
    estado: usuarios.estado
  })
  const actualizarUsuario = async () => {
    console.log(infoNuevoUsuario);
    //enviar información al backend
    const options = {
      method: 'PATCH',
      url: `http://localhost:5000/usuarios/${usuarios._id}/`,
      headers: { 'Content-Type': 'application/json' },
      data: { ...infoNuevoUsuario }
    };
    await axios.request(options).then(function (response) {
      console.log(response.data);
      //Toast.succes
      toast.success('Usuario validado con éxito', {
        position: "bottom-center",
        autoClose: 5000,
      });
      console.log("Usuario actualizado con éxito");
      setEdit(false);
      setEjecutarConsulta(true);
    }).catch(function (error) {
      //toast.error
      toast.error('Error actualizando el usuario', {
        position: "top-right",
        autoClose: 5000,
      });
      console.error(error);
    });
  };

  const eliminarUsuario = async () => {
    const options = {
      method: 'DELETE',
      url: `http://localhost:5000/usuarios/${usuarios._id}/`,
      headers: { 'Content-Type': 'application/json' },
      data: { id: usuarios._id }
    };

    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        //Toast.succes
        toast.success('Usuario eliminado de manera exitosa', {
          position: "bottom-center",
          autoClose: 5000,
        });
        console.log("Usuario eliminado con éxito");
        setEjecutarConsulta(true);
      }).catch(function (error) {
        //toast.error
        toast.error('No se pudo eliminar el usuario', {
          position: "top-right",
          autoClose: 5000,
        });
        console.error(error);
        console.log("Error eliminando el usuario");

      });


  };

  return (
    <tr>
      {edit ?
        <>
          <td><input type="text" value={infoNuevoUsuario.nombres}
            onChange={(e) => setInfoNuevoUsuario({ ...infoNuevoUsuario, nombres: e.target.value })} /></td>
          <td><input type="text" value={infoNuevoUsuario.correo}
            onChange={(e) => setInfoNuevoUsuario({ ...infoNuevoUsuario, correo: e.target.value })} /></td>
          <td>
            <select name="rol" id="" value={infoNuevoUsuario.rol}
              onChange={(e) => setInfoNuevoUsuario({ ...infoNuevoUsuario, rol: e.target.value })}>
              <option value={0} >Seleccione una opción</option>
              <option >Administrador</option>
              <option >Vendedor</option>
            </select>
          </td>
          <td>

            <select name="estado" id="" value={infoNuevoUsuario.estado} onChange={(e) => setInfoNuevoUsuario({ ...infoNuevoUsuario, estado: e.target.value })}>
              <option value={0} >Pendiente</option>
              <option >Autorizado</option>
              <option >No Autorizado</option>
            </select>


          </td>
        </>
        :
        <>
          <td>{usuarios.nombres}</td>
          <td>{usuarios.correo}</td>
          <td>{usuarios.rol}</td>
          <td>{usuarios.estado}</td>
        </>

      }
      <td>
        <div className="center">
          {edit ? (
            <>
              <Tooltip title="Confirmar Edición" arrow>
                <i text="Editar" className="mini" onClick={() => actualizarUsuario()} class="fas fa-check"></i>
              </Tooltip>
              <Tooltip title="Cancelar Edición" arrow>
                <i className="mini" onClick={() => setEdit(!edit)} class="fas fa-ban"></i>
              </Tooltip>

            </>
          ) : (
            <>
              <Tooltip title="Editar Usuario" arrow>
                <i className="mini" onClick={() => setEdit(!edit)} class="fas fa-pencil-alt"></i>
              </Tooltip>

              <Tooltip title="Eliminar Usuario" arrow>
                <i className="mini" onClick={() => setOpenDialog(true)} class="fas fa-trash"></i>
              </Tooltip>
            </>
          )}
        </div>
        <Dialog open={openDialog}>
          <div className="contentForm margen">
            <h1>¿Está seguro de eliminar el Usuario?</h1>
            <div className="center margen">
              <button onClick={() => eliminarUsuario()} type="button" class="btn btn-outline-success margen" >Sí</button>
              <button onClick={() => setOpenDialog(false)} type="button" class="btn btn-outline-danger margen">No</button>

            </div>
          </div>
        </Dialog>
      </td>
    </tr>
  );

}


export default Usuarios;
