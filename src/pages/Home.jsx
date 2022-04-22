import React, {useState} from "react";
import MultiSelect from "../components/Formularios/MultiSelect";

import { IoSchoolSharp } from "react-icons/io5";
import { HiUserGroup } from "react-icons/hi";
import { IoMdDocument } from "react-icons/io";
import { HiOutlineDocumentSearch } from "react-icons/hi";
import Graficas from "../components/Graficas/Graficas";

import { useAutenticationManager } from "../hooks/useAutenticationManager";

let inicial = {
  state: []
}

const Home = () => {
  const [test, setTest] = useState(inicial)
  let autenticacion = useAutenticationManager();

  const handleChange = (e) => {
    setTest({
        ...test,
        [e.target.name]: e.target.value,
    });
};

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
            <div className="col-12 col-sm-6">
              <div className="form-group">
                <label>Multiple (.select2-purple)</label>
                <div className="select2-primary">
                  <select
                    className="select2"
                    name="state"
                    onChange={handleChange}
                    value={test.state}
                    multiple="multiple"
                    data-placeholder="Select a State"
                    data-dropdown-css-class="select2-primary"
                    style={{ width: "100%" }}
                  >
                    <option>Alabama</option>
                    <option>Alaska</option>
                    <option>California</option>
                    <option>Delaware</option>
                    <option>Tennessee</option>
                    <option>Texas</option>
                    <option>Washington</option>
                  </select>
                </div>
              </div>
              {/* /.form-group */}
            </div>
            <div className="col-12 col-sm-6">
              <MultiSelect />
            </div>
          </div>
        </div>
        {/* /.row */}
        {/* Main row */}
        {/* Aqui va el contenido numero 3 */}
        {/* /.row (main row) */}
        {/* /.container-fluid */}
        <Graficas />
      </section>

      {/* /.card-body */}
      {/* /.content */}
    </div>
  );
};

export default Home;
