import React, { useState, useEffect } from "react";
import { FaBattleNet, FaSignOutAlt } from "react-icons/fa"
import img from "../../img/id-card-clip-solid.svg"

import { useAutenticationManager } from "../../hooks/useAutenticationManager";

const usuarioInicial = {
  username: "",
  first_name: "",
  last_name: "",
}

const AppNav = () => {
  const [usuario, setUsuario] = useState(usuarioInicial);

  let autenticacion = useAutenticationManager();

  useEffect(() => {
    //setLoading(true);
    let userAuth = sessionStorage.getItem("userAuth");
    if (userAuth !== null) setUsuario(JSON.parse(userAuth));
  }, []);

  const nombreCompleto = (user) => {
    return `${user.first_name} ${user.last_name}`;
  }

  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="#" className="nav-link" data-widget="pushmenu" role="button">
            <i className="fas fa-bars" />
          </a>
        </li>
      </ul>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          {/* Este icono es puramente ilustrativo, para la versión final debe ser el logotipo oficial */}
          <h4><FaBattleNet /><strong> Sistema OTNLH</strong></h4>
        </li>
      </ul>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item dropdown">
          <a href="" className="nav-link" data-toggle="dropdown" title="Perfil de usuario">
            <i className="fas fa-user-circle" style={{ fontSize: 24 }} />
          </a>
          <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <div className="dropdown-item">
              <div className="media">
                <img src={img} alt="Avatar" className="img-size-50 mr-3" />
                <div className="media-body">
                  <h3 className="dropdown-item-title">
                    {usuario.username}
                    {/* <span className="float-right text-sm text-danger"><i className="fas fa-star" /></span> */}
                  </h3>
                  <p className="text-sm">{nombreCompleto(usuario)}</p>
                  {/* <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p> */}
                </div>
              </div>
            </div>
            <div className="dropdown-divider" />
            <div className="dropdown-item" onClick={autenticacion.closeSession} style={{ cursor: "pointer" }}>
              <FaSignOutAlt /> Cerrar sesión
            </div>
          </div>
        </li>
      </ul>
    </nav >
  );
};

export default AppNav;
