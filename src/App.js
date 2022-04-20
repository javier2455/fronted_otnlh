import React from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";

import SideNav from './components/Navegacion/SideNav';
import AppNav from './components/Navegacion/AppNav';
import Footer from './components/Footer';

// Páginas
import Blank from './pages/Blank';
import Login from './pages/Login'
import Home from './pages/Home'
import GestionUsuarios from './pages/SeccionSeguridad/GestionUsuarios';
import Trazas from './pages/SeccionSeguridad/Trazas';
import AdminDB from './pages/SeccionSeguridad/AdminDB';
import Nomencladores from './pages/Nomencladores'
import UnderConstruct from './pages/UnderConstruct';
import Error404 from './pages/Error404';

import './App.css';

const Modulos = [
  { modulo: <Home />, path: "/home" },
  { modulo: <GestionUsuarios />, path: "/gestion_usuarios" },
  { modulo: <Trazas />, path: "/trazas" },
  { modulo: <AdminDB />, path: "/admindb" },
  { modulo: <Nomencladores />, path: "/nomencladores" },
  { modulo: <UnderConstruct />, path: "/under_construct" },
];

function App() {
  return (
    <>
      <HashRouter>
        <Switch>
          <Route exact path="/"><Blank /></Route>
          <Route exact path="/login">
            <SideNav ocultar={true}/>
            <Login />
          </Route>
          {Modulos.map((m) => (
            <Route exact path={m.path}>
              <SideNav />
              <AppNav />
              {m.modulo}
              <Footer />
            </Route>
          ))}
          <Route path="*" component={Error404} />
        </Switch>
      </HashRouter>
      {/* <Header />
      <Footer /> */}
    </>
  );
}

export default App;

/* <Route exact path="/home" >
            <SideNav />
            <AppNav />
            <Home />
            <Footer />
          </Route>
          <Route exact path="/gestion_usuarios" >
            <SideNav />
            <AppNav />
            <GestionUsuarios />
            <Footer />
          </Route>
          <Route exact path="/trazas" >
            <SideNav />
            <AppNav />
            <Trazas />
            <Footer />
          </Route>
          <Route exact path="/admindb" >
            <SideNav />
            <AppNav />
            <AdminDB />
            <Footer />
          </Route>
          <Route exact path="/nomencladores" >
            <SideNav />
            <AppNav />
            <Nomencladores />
            <Footer />
          </Route>
          <Route exact path="/under_construct" >
            <SideNav />
            <AppNav />
            <UnderConstruct />
            <Footer />
          </Route> */
