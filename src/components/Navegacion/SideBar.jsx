import React from "react";
import { NavLink } from "react-router-dom";

//Iconos
import { FaBookOpen } from "react-icons/fa";
//import { GrMoney } from "react-icons/gr";

const SideNav = ({ valor }) => {
  return (
    <div className="sidebar">
      <div></div>
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
            <NavLink to="/home" className="nav-link" activeClassName="active">
              <i className="nav-icon fas fa-th-large" />
              <p>Indicadores</p>
            </NavLink>
          </li>

          <li className="nav-item has-treeview" activeClassName="menu-open">
            <NavLink
              /* href="/under_construct" */
              to="/under_construct"
              activeClassName="active"
              className="nav-link"
            >
              <i className="nav-icon fas fa-building" />
              <p>
                &nbsp;Departamentos
                <i className="fas fa-angle-left right" />
              </p>
            </NavLink>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <NavLink
                  to="/under_construct"
                  activeClassName="active"
                  className="nav-link"
                >
                  <i className="nav-icon far fa-circle" />
                  <p> Comercial</p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/under_construct"
                  activeClassName="active"
                  className="nav-link"
                >
                  <i class="nav-icon far fa-circle"></i>
                  <p> Normalización</p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/under_construct"
                  activeClassName="active"
                  className="nav-link"
                >
                  <i className="nav-icon far fa-circle" />
                  <p> Inspección/Supervisión</p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/under_construct"
                  activeClassName="active"
                  className="nav-link"
                >
                  <i className="nav-icon far fa-circle" />
                  <p> Metrología</p>
                </NavLink>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <NavLink
              to="/gestion_usuarios"
              activeClassName="active"
              /* href="" */ className="nav-link"
            >
              <i className="nav-icon fa fa-lock" />
              <p>
                Seguridad
                <i className="fas fa-angle-left right" />
              </p>
            </NavLink>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <NavLink
                  to="/gestion_usuarios"
                  activeClassName="active"
                  className="nav-link"
                >
                  <i className="nav-icon fa fa-users ml-2" />
                  <p>Usuarios</p>
                </NavLink>
              </li>
              <li className="nav-item ml-1.5">
                <NavLink
                  to="/trazas"
                  activeClassName="active"
                  className="nav-link"
                >
                  <i className="nav-icon fa fa-shoe-prints ml-2" />
                  <p>Trazas</p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/admindb"
                  activeClassName="active"
                  className="nav-link"
                >
                  <i className="nav-icon fa fa-database ml-2" />
                  <p>Información</p>
                </NavLink>
              </li>
              {/* <li className="nav-item">
                  <NavLink
                    to="/under_construct"
                    activeClassName="active"
                    className="nav-link"
                  >
                    <p>UnderConstruct</p>
                  </NavLink>
                </li> */}
            </ul>
          </li>
          <li className="nav-item">
            <NavLink
              to="/nomencladores"
              className="nav-link"
              activeClassName="active"
            >
              <FaBookOpen className="nav-icon mb-1" />
              <p>Nomencladores</p>
            </NavLink>
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
  );
};

export default SideNav;
