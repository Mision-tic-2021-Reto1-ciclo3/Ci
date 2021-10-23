import React from "react";
import logo from "media/logoEcoTextil.png";
import "styles/estilos.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import GoogleLogin from 'react-google-login';
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  const respuestaGoogle = (respuesta) => {
    console.log(respuesta);
    console.log(respuesta.profileObj);
  }
  return (
    <div className="login-box">
      <div>
        <div className="login-logo">
          <img src={logo} alt="logo empresa" className="img-responsive" />
        </div>
        <div className="login-box-body">
          <h2 className="login-box-msg">Ingresa al sistema</h2>
          <div className="form-group has-feedback">
            <input
              type="text"
              class="form-control"
              placeholder="Usuario"
              name="ingUsuario"
            />
            <span class="glyphicon glyphicon-user form-control-feedback"></span>
          </div>
        </div>
        <div className="login-box-body">
          <div class="form-group has-feedback">
            <input
              type="password"
              className="form-control"
              placeholder="Contraseña"
              name="ingPassword"
            />
            <span className="glyphicon glyphicon-lock form-control-feedback"></span>
          </div>
        </div>
        <main>
          <div class="row center">
            <div class="col-xs-4">
              <button onClick={() => loginWithRedirect()} type="submit" className="btn btn-primary btn-flat">
                Iniciar Sesión
              </button>

            </div>
          </div>
          <a href="Menu.jsx">
            <div class="row center">
              <div class="col-xs-4">
                <button type="button" className="btn btn-primary btn-flat">
                  Registrar nueva cuenta
                </button>
              </div>
            </div>
          </a>
          <br />

          <div class="row center">
            <div class="g-signin2"></div>
          </div>
          <div className="App">
            <br /><br />
            <GoogleLogin
              clientId="860580858571-ompc5ips8jmlagnrmcm2a9j0cjfire43.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={respuestaGoogle}
              onFailure={respuestaGoogle}
              cookiePolicy={'single_host_origin'}
            />,

          </div>
        </main>
      </div>
    </div>
  );
};
export default Login;
