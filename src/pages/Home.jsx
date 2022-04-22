import React from "react";

import { IoSchoolSharp } from "react-icons/io5";
import { HiUserGroup } from "react-icons/hi";
import { IoMdDocument } from "react-icons/io";
import { HiOutlineDocumentSearch } from "react-icons/hi";
import Graficas from "../components/Graficas/Graficas";

import { useAutenticationManager } from "../hooks/useAutenticationManager";


const Home = () => {
  let autenticacion = useAutenticationManager();


  autenticacion.inSession();

  return (
    /* Content Wrapper. Contains page content */
    <div className="content-wrapper">
      <div className="content-header"></div>
      {/* Main content */}
      <section className="content">
        <div className="container-fluid">
          {/* Small boxes (Stat box) */}
          <div className="row">
            <div className="col-lg-3 col-6">
              {/* small box */}
              <div className="small-box bg-info">
                <div className="inner">
                  <h3>150</h3>
                  <p>Cantidad de usuarios</p>
                </div>
                <div className="icon">
                  <HiUserGroup />
                  {/* <i className="ion ion-bag" /> */}
                </div>
                {/* <a href="#" className="small-box-footer">Más Información <i className="fas fa-arrow-circle-right" /></a> */}
              </div>
            </div>
            {/* ./col */}
            <div className="col-lg-3 col-6">
              {/* small box */}
              <div className="small-box bg-success">
                <div className="inner">
                  <h3>53{/* <sup style={{ fontSize: 20 }}>%</sup> */}</h3>
                  <p>Cantidad de cursos disponibles</p>
                </div>
                <div className="icon">
                  <IoSchoolSharp />
                  {/* <i className="ion ion-stats-bars" /> */}
                </div>
                {/* <a href="#" className="small-box-footer">Más Información <i className="fas fa-arrow-circle-right" /></a> */}
              </div>
            </div>
            {/* ./col */}
            <div className="col-lg-3 col-6">
              {/* small box */}
              <div className="small-box bg-warning">
                <div className="inner">
                  <h3>44</h3>
                  <p>Cantidad de trazas emitidas</p>
                </div>
                <div className="icon">
                  <IoMdDocument />
                  {/* <i className="ion ion-person-add" /> */}
                </div>
                {/* <a href="#" className="small-box-footer">Más Información <i className="fas fa-arrow-circle-right" /></a> */}
              </div>
            </div>
            {/* ./col */}
            <div className="col-lg-3 col-6">
              {/* small box */}
              <div className="small-box bg-danger">
                <div className="inner">
                  <h3>65</h3>
                  <p>Cantidad de normas emitidas</p>
                </div>
                <div className="icon">
                  <HiOutlineDocumentSearch />
                  {/* <i className="ion ion-pie-graph" /> */}
                </div>
                {/* <a href="#" className="small-box-footer">Más Información <i className="fas fa-arrow-circle-right" /></a> */}
              </div>
            </div>
            {/* ./col */}
          </div>
        </div>
      </section>
      <Graficas />
    </div>
  );
};

export default Home;
