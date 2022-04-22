import React from "react";
import SideBar from "../Navegacion/SideBar"

const SideNav = ({ ocultar }) => {
  return ocultar || false === true ? (
    <aside
      style={{ display: "none" }}
      className="main-sidebar sidebar-dark-primary elevation-4"
    >
      <a style={{ textAlign: "center" }} href="" className="brand-link">
        <span className="brand-text font-weight-light">Módulos</span>
      </a>
        <SideBar />
        
      {/* /.sidebar */}
    </aside>
  ) : (
    <aside
      style={{ opacity: ocultar }}
      className="main-sidebar sidebar-dark-primary elevation-4"
    >
      <a style={{ textAlign: "center" }} href="" className="brand-link">
        <span className="brand-text font-weight-light">Módulos</span>
      </a>
      <SideBar />
      {/* /.sidebar */}
    </aside>
  );
};

export default SideNav;
