import React from "react";
import { NavLink, Link } from "react-router-dom";

//Iconos
import { GrUserAdmin } from "react-icons/gr";
import { AiOutlineControl } from "react-icons/ai";
//import { GrMoney } from "react-icons/gr";

const SideNav = ({valor}) => {
  return (
    /* Main Sidebar Container */
    <aside style={{opacity: valor}} className="main-sidebar sidebar-dark-primary elevation-4">
      <a style={{ textAlign: "center" }} href="" className="brand-link">
        <span className="brand-text font-weight-light">Departamentos</span>
      </a>
      <div className="sidebar">
        {/* <div></div> */}
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}

            {/* <li className="nav-header">EXAMPLES</li> */}
            <li className="nav-item">
              <a href="" className="nav-link">
                <AiOutlineControl className="nav-icon" />
                <p>Panel de Control</p>
              </a>
            </li>

            {/*  <li className="nav-item">
              <a href="pages/calendar.html" className="nav-link active">
                <i className="nav-icon far fa-calendar-alt" />
                <p>
                  Calendar
                  <span className="badge badge-info right">2</span>
                </p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/gallery.html" className="nav-link">
                <i className="nav-icon far fa-image" />
                <p>
                  Gallery
                </p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/kanban.html" className="nav-link">
                <i className="nav-icon fas fa-columns" />
                <p>
                  Kanban Board
                </p>
              </a>
            </li> */}
            <li className="nav-item">
              <a href="" className="nav-link">
                <GrUserAdmin className="nav-icon" />
                <p>
                  Seguridad
                  <i className="fas fa-angle-left right" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <NavLink
                    to="/gestionusuarios"
                    activeClassName="active"
                    className="nav-link"
                  >
                    <p>Gestión de Usuarios</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/genymosttrazas"
                    activeClassName="active"
                    className="nav-link"
                  >
                    <p>Generar y Mostrar Trazas</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/admindb"
                    activeClassName="active"
                    className="nav-link"
                  >
                    <p>Administrar Bases de Datos</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/under_construct"
                    activeClassName="active"
                    className="nav-link"
                  >
                    <p>UnderConstruct</p>
                  </NavLink>
                </li>
              </ul>
            </li>
            {/* <li className="nav-item">
              <a href="#" className="nav-link">
              <GrMoney className="nav-icon" />
                <p>
                Comercial
                  <i className="fas fa-angle-left right" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="pages/mailbox/compose.html" className="nav-link">
                  <p>Gestión de Clientes</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/examples/profile.html" className="nav-link">
                    <p>Gestión de Cursos</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/examples/e-commerce.html" className="nav-link">
                    <p>Administrar Normas</p>
                  </a>
                </li>
              </ul>
            </li> */}

            {/* <li className="nav-header">MISCELLANEOUS</li>
            <li className="nav-item">
              <a href="iframe.html" className="nav-link">
                <i className="nav-icon fas fa-ellipsis-h" />
                <p>Tabbed IFrame Plugin</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="https://adminlte.io/docs/3.1/" className="nav-link">
                <i className="nav-icon fas fa-file" />
                <p>Documentation</p>
              </a>
            </li>
            <li className="nav-header">MULTI LEVEL EXAMPLE</li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="fas fa-circle nav-icon" />
                <p>Level 1</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-circle" />
                <p>
                  Level 1
                  <i className="right fas fa-angle-left" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Level 2</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>
                      Level 2
                      <i className="right fas fa-angle-left" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        <i className="far fa-dot-circle nav-icon" />
                        <p>Level 3</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        <i className="far fa-dot-circle nav-icon" />
                        <p>Level 3</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        <i className="far fa-dot-circle nav-icon" />
                        <p>Level 3</p>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Level 2</p>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="fas fa-circle nav-icon" />
                <p>Level 1</p>
              </a>
            </li>
            <li className="nav-header">LABELS</li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon far fa-circle text-danger" />
                <p className="text">Important</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon far fa-circle text-warning" />
                <p>Warning</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon far fa-circle text-info" />
                <p>Informational</p>
              </a>
            </li> */}
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
  );
};

export default SideNav;
