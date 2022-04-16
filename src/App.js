import React from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";

import SideNav from './components/Navegacion/SideNav';
import AppNav from './components/Navegacion/AppNav';
import Footer from './components/Footer';

// Páginas
import Home from './pages/Home'
import GestionUsuarios from './pages/SeccionSeguridad/GestionUsuarios';
import GenerarYMostrarTrazas from './pages/SeccionSeguridad/GenerarYMostrarTrazas';
import AdminDB from './pages/SeccionSeguridad/AdminDB';
import Login from './pages/Login'
import Blank from './pages/Blank';
import UnderConstruct from './pages/UnderConstruct';

import './App.css';

function App() {
  return (
    <>
      <HashRouter>
        <Switch>
          <Route exact path="/">
            <Blank />
          </Route>
          <Route exact path="/login">
            <SideNav valor={0}/>
            <Login />
          </Route>
          <Route exact path="/home" >
            <SideNav />
            <AppNav />
            <Home />
            <Footer />
          </Route>
          <Route exact path="/gestionusuarios" >
            <SideNav />
            <AppNav />
            <GestionUsuarios />
            <Footer />
          </Route>
          <Route exact path="/genymosttrazas" >
            <SideNav />
            <AppNav />
            <GenerarYMostrarTrazas />
            <Footer />
          </Route>
          <Route exact path="/admindb" >
            <SideNav />
            <AppNav />
            <AdminDB />
            <Footer />
          </Route>
          <Route exact path="/under_construct" >
            <SideNav />
            <AppNav />
            <UnderConstruct />
            <Footer />
          </Route>
        </Switch>
      </HashRouter>
      {/* <Header />
      <Footer /> */}
    </>
  );
}

export default App;
