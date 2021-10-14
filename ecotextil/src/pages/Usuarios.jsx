import React from "react";
import "styles/estilos.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import axios from "axios";
/*
const actualizarUsuario = async () => {
  //Enviar info al backend
  const options = {
    mehtod: "PATCH",
    url: "http://localhost:5000/usuarios/nuevo",
    headers: { "Content-Type": "application/json" },
    data: { ...infoNuevoUsuario, id: usuario._id },
  };
};
await axios.request(options).then(function (response) {
  console.log(response.data);
  toast.success("Usuario modificado con éxito");
  setEdit(false);
});
*/
const Usuarios = () => {
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
      <header class="font center ">Administrador de Usuarios</header>
      <div class="contentSells">
        <section>
          <div>
            <form action="" class="contentForm">
              <h1 class="subtitle">Gestión de Usuarios</h1>
              <div>
                <legend>
                  Estado del Usuario
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-file-earmark-person-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm2 5.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-.245S4 12 8 12s5 1.755 5 1.755z" />
                  </svg>
                  <hr />
                  <div class="col-xs-4 margen">
                    <button type="button" class="btn btn-primary btn-flat">
                      Buscar usuario
                    </button>
                    <div class="buscar">
                      <input
                        type="text"
                        name="search"
                        placeholder="Buscar usuario"
                        class="src"
                        autocomplete="off"
                      />
                    </div>
                  </div>
                </legend>

                <div id="main-container">
                  <table class="table">
                    <thead class="thead">
                      <tr>
                        <th>Id</th>
                        <th>Nombre </th>
                        <th>Tipo identificación</th>
                        <th>Númeor Identificción</th>
                        <th>Correo</th>
                        <th>Rol</th>
                        <th>Estado</th>
                      </tr>
                    </thead>
                    <tr>
                      <td>01</td>
                      <td>usua1</td>
                      <td>CC</td>
                      <td>1234</td>
                      <td>ajajajs@com</td>
                      <td>Adm</td>
                      <td>Activo</td>
                    </tr>
                    <tr>
                      <td>02</td>
                      <td>usua2</td>
                      <td>CC</td>
                      <td>5678</td>
                      <td>kakakak@com</td>
                      <td>cliente</td>
                      <td>Activo</td>
                    </tr>
                    <tr>
                      <td>03</td>
                      <td>usua3</td>
                      <td>CC</td>
                      <td>9012</td>
                      <td>ururut@com</td>
                      <td>vendedor</td>
                      <td>Activo</td>
                    </tr>
                  </table>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Usuarios;
