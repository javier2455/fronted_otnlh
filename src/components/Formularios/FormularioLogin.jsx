import React, { useState, useEffect } from "react";
import MyToast from "../Mensajes/MyToast";
import { useHistory } from "react-router";
import { helpHttp } from "../../helpers/helpHttp";

import { useAutenticationManager } from '../../hooks/useAutenticationManager'
import { FaBattleNet } from "react-icons/fa";

let initialForm = {
  username: "",
  password: "",
};

const FormularioLogin = () => {
  const [form, setForm] = useState(initialForm);
  const [ruta, setRuta] = useState(null);
  //Toast
  const [mostrar, setMostrar] = useState(false);
  const [msg, setMsg] = useState({});

  useEffect(() => {
    //setLoading(true);

    helpHttp()
      .get("./routes/rutas.json")
      .then((response) => {
        setRuta(response.rutasProduccion.rutaLogin);
      });
  }, []);

  let history = useHistory();
  let autenticacion = useAutenticationManager();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //let userAccount = JSON.parse(sessionStorage.getItem("userAccount"));
    let cuerpo = {
        body: form,
        headers: { 
          "content-type": "application/json",
          /* "Authorization": `${userAccount.datos}` */
        }
      };

    helpHttp()
      .post(ruta, cuerpo)
      .then((res) => {
        if (!res.error) {
            console.log(res)
            autenticacion.ConfirmValidation(res)
            setForm(initialForm);
            history.push("/home")
        } else {
            setMostrar(true);
            setMsg({
              msg: `${res.statusText}`,
              tipo: "danger",
              titulo: `${res.status}`,
            });
          console.log(res);
        }
      });
    /* if (autenticacion.ValidateUser(form).code === "200") {
            setForm(initialForm);
            history.push("/home");
        } else {
            setMostrar(true);
            setMsg({
                msg: "Usuario o Contraseñas Incorrectas",
                icono: "fas fa-exclamation-triangle",
                tipo: 'danger',
                titulo: "Error en la Autenticación"
            })
            return;
        }*/
  }; 
  return (
    <div className="login-page">
      <div className="login-box">
        <div className="login-logo">
          {/* Este icono es puramente ilustrativo, para la versión final debe ser el logotipo oficial */}
          <h4>
            <FaBattleNet />
            <strong> Sistema OTNLH</strong>
          </h4>
        </div>
        {mostrar && <MyToast setMostrar={setMostrar} msg={msg} />}
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">Iniciar Sesión</p>
            <form onSubmit={handleSubmit} method="post">
              <div className="input-group mb-3">
                <input
                  type="text"
                  id="userInput"
                  name="username"
                  placeholder="Usuario"
                  onChange={handleChange}
                  value={form.username}
                  className="form-control"
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-user" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  id="passwordInput"
                  className="form-control"
                  placeholder="Contraseña"
                  name="password"
                  onChange={handleChange}
                  value={form.password}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-5 ml-auto">
                  <button type="submit" className="btn btn-primary btn-block">
                    <i className="fas fa-fingerprint mr-1" /> Autenticar
                  </button>
                </div>
              </div>
            </form>
            {/* <p className="my-2">
                            <a href="">Olvidé mi contraseña</a>
                        </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormularioLogin;
