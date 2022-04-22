import React from "react";
import TablaNomencladores from "../Tablas/TablaNomencladores";
//import { FaWarehouse } from "react-icons/fa";

const TapsNomencladores = ({ organismos, empresas, sectorEstatal, trazas }) => {
  return (
    <div className="row">
      <div className="col-5 col-sm-3">
        <div
          className="nav flex-column nav-tabs h-100"
          id="vert-tabs-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <a
            className="nav-link active"
            id="vert-tabs-tipo-contrato-tab"
            data-toggle="pill"
            href="#vert-tabs-tipo-contrato"
            role="tab"
            aria-controls="vert-tabs-tipo-contrato"
            aria-selected="true"
          >
            Tipos de Contrato
          </a>
          <a
            className="nav-link"
            id="vert-tabs-tipo-curso-tab"
            data-toggle="pill"
            href="#vert-tabs-tipo-curso"
            role="tab"
            aria-controls="vert-tabs-tipo-curso"
            aria-selected="false"
          >
            Tipo de Curso
          </a>
          <a
            className="nav-link"
            id="vert-tabs-estado-contrato-tab"
            data-toggle="pill"
            href="#vert-tabs-estado-contrato"
            role="tab"
            aria-controls="vert-tabs-estado-contrato"
            aria-selected="false"
          >
            Estado del Contrato
          </a>
          <a
            className="nav-link"
            id="vert-tabs-estado-solicitud-tab"
            data-toggle="pill"
            href="#vert-tabs-estado-solicitud"
            role="tab"
            aria-controls="vert-tabs-estado-solicitud"
            aria-selected="false"
          >
            Estado de la Solicitud
          </a>
          <a
            className="nav-link"
            id="vert-tabs-tipo-solicitud-tab"
            data-toggle="pill"
            href="#vert-tabs-tipo-solicitud"
            role="tab"
            aria-controls="vert-tabs-tipo-solicitud"
            aria-selected="false"
          >
            Tipo de Solicitud
          </a>
          <a
            className="nav-link"
            id="vert-tabs-tipo-entidad-tab"
            data-toggle="pill"
            href="#vert-tabs-tipo-entidad"
            role="tab"
            aria-controls="vert-tabs-tipo-entidad"
            aria-selected="false"
          >
            Tipo de Entidad
          </a>
          <a
            className="nav-link"
            id="vert-tabs-organismo-tab"
            data-toggle="pill"
            href="#vert-tabs-organismo"
            role="tab"
            aria-controls="vert-tabs-organismo"
            aria-selected="false"
          >
            Organismo
          </a>
          <a
            className="nav-link"
            id="vert-tabs-tipo-servicio-tab"
            data-toggle="pill"
            href="#vert-tabs-tipo-servicio"
            role="tab"
            aria-controls="vert-tabs-tipo-servicio"
            aria-selected="false"
          >
            Tipo de Servicio
          </a>
          <a
            className="nav-link"
            id="vert-tabs-tipo-instrumento-tab"
            data-toggle="pill"
            href="#vert-tabs-tipo-instrumento"
            role="tab"
            aria-controls="vert-tabs-tipo-instrumento"
            aria-selected="false"
          >
            Tipo de Instrumento
          </a>
          <a
            className="nav-link"
            id="vert-tabs-magnitud-tab"
            data-toggle="pill"
            href="#vert-tabs-magnitud"
            role="tab"
            aria-controls="vert-tabs-magnitud"
            aria-selected="false"
          >
            Magnitud
          </a>
          <a
            className="nav-link"
            id="vert-tabs-tipo-inspeccion-tab"
            data-toggle="pill"
            href="#vert-tabs-tipo-inspeccion"
            role="tab"
            aria-controls="vert-tabs-tipo-inspeccion"
            aria-selected="false"
          >
            Tipo de Inspección
          </a>
          <a
            className="nav-link"
            id="vert-tabs-tematica-tab"
            data-toggle="pill"
            href="#vert-tabs-tematica"
            role="tab"
            aria-controls="vert-tabs-tematica"
            aria-selected="false"
          >
            Temática
          </a>
          <a
            className="nav-link"
            id="vert-tabs-tipo-especialista-tab"
            data-toggle="pill"
            href="#vert-tabs-tipo-especialista"
            role="tab"
            aria-controls="vert-tabs-tipo-especialista"
            aria-selected="false"
          >
            Tipo de Especialista
          </a>
          <a
            className="nav-link"
            id="vert-tabs-tipo-norma-tab"
            data-toggle="pill"
            href="#vert-tabs-tipo-norma"
            role="tab"
            aria-controls="vert-tabs-tipo-norma"
            aria-selected="false"
          >
            Tipo de Norma
          </a>
          <a
            className="nav-link"
            id="vert-tabs-cargo-tab"
            data-toggle="pill"
            href="#vert-tabs-cargo"
            role="tab"
            aria-controls="vert-tabs-cargo"
            aria-selected="false"
          >
            Cargo
          </a>
          <a
            className="nav-link"
            id="vert-tabs-sector-economico-tab"
            data-toggle="pill"
            href="#vert-tabs-sector-economico"
            role="tab"
            aria-controls="vert-tabs-sector-economico"
            aria-selected="false"
          >
            Sector Económico
          </a>
          <a
            className="nav-link"
            id="vert-tabs-gestion-certificados-tab"
            data-toggle="pill"
            href="#vert-tabs-gestion-certificados"
            role="tab"
            aria-controls="vert-tabs-gestion-certificados"
            aria-selected="false"
          >
            Gestión de Certificados
          </a>
        </div>
      </div>
      <div className="col-7 col-sm-9">
        <div className="tab-content" id="vert-tabs-tabContent">
          <div
            className="tab-pane text-left fade show active"
            id="vert-tabs-tipo-contrato"
            role="tabpanel"
            aria-labelledby="vert-tabs-tipo-contrato-tab"
          >
            <TablaNomencladores titulo="Tipo de Contrato" trazas={trazas}/>
          </div>
          <div
            className="tab-pane fade"
            id="vert-tabs-tipo-curso"
            role="tabpanel"
            aria-labelledby="vert-tabs-tipo-curso-tab"
          >
            <TablaNomencladores titulo="Tipo de Curso" trazas={trazas}/>
          </div>
          <div
            className="tab-pane fade"
            id="vert-tabs-estado-contrato"
            role="tabpanel"
            aria-labelledby="vert-tabs-estado-contrato-tab"
          >
            <TablaNomencladores titulo="Estado del Contrato" trazas={trazas}/>
          </div>
          <div
            className="tab-pane fade"
            id="vert-tabs-estado-solicitud"
            role="tabpanel"
            aria-labelledby="vert-tabs-estado-solicitud-tab"
          >
            <TablaNomencladores titulo="Estado de la Solicitud" trazas={trazas}/>
          </div>
          <div
            className="tab-pane fade"
            id="vert-tabs-tipo-solicitud"
            role="tabpanel"
            aria-labelledby="vert-tabs-tipo-solicitud-tab"
          >
            <TablaNomencladores titulo="Tipo de Solicitud" trazas={trazas}/>
          </div>
          <div
            className="tab-pane fade"
            id="vert-tabs-tipo-entidad"
            role="tabpanel"
            aria-labelledby="vert-tabs-tipo-entidad-tab"
          >
            <TablaNomencladores titulo="Tipo de Entidad" trazas={trazas}/>
          </div>
          <div
            className="tab-pane fade"
            id="vert-tabs-organismo"
            role="tabpanel"
            aria-labelledby="vert-tabs-organismo-tab"
          >
            <TablaNomencladores titulo="Organismo" trazas={trazas}/>
          </div>
          <div
            className="tab-pane fade"
            id="vert-tabs-tipo-servicio"
            role="tabpanel"
            aria-labelledby="vert-tabs-tipo-servicio-tab"
          >
            <TablaNomencladores titulo="Tipo de Servicio" trazas={trazas}/>
          </div>
          <div
            className="tab-pane fade"
            id="vert-tabs-tipo-instrumento"
            role="tabpanel"
            aria-labelledby="vert-tabs-tipo-instrumento-tab"
          >
            <TablaNomencladores titulo="Tipo de Instrumento" trazas={trazas}/>
          </div>
          <div
            className="tab-pane fade"
            id="vert-tabs-magnitud"
            role="tabpanel"
            aria-labelledby="vert-tabs-magnitud-tab"
          >
            <TablaNomencladores titulo="Magnitud" trazas={trazas}/>
          </div>
          <div
            className="tab-pane fade"
            id="vert-tabs-tipo-inspeccion"
            role="tabpanel"
            aria-labelledby="vert-tabs-tipo-inspeccion-tab"
          >
            <TablaNomencladores titulo="Tipo de Inspeccion" trazas={trazas}/>
          </div>
          <div
            className="tab-pane fade"
            id="vert-tabs-tematica"
            role="tabpanel"
            aria-labelledby="vert-tabs-tematica-tab"
          >
            <TablaNomencladores titulo="Temática" trazas={trazas}/>
          </div>
          <div
            className="tab-pane fade"
            id="vert-tabs-tipo-especialista"
            role="tabpanel"
            aria-labelledby="vert-tabs-tipo-especialista-tab"
          >
            <TablaNomencladores titulo="Tipo de Especialista" trazas={trazas}/>
          </div>
          <div
            className="tab-pane fade"
            id="vert-tabs-tipo-norma"
            role="tabpanel"
            aria-labelledby="vert-tabs-tipo-norma-tab"
          >
            <TablaNomencladores titulo="Tipo de Norma" trazas={trazas}/>
          </div>
          <div
            className="tab-pane fade"
            id="vert-tabs-cargo"
            role="tabpanel"
            aria-labelledby="vert-tabs-cargo-tab"
          >
            <TablaNomencladores titulo="Cargo" trazas={trazas}/>
          </div>
          <div
            className="tab-pane fade"
            id="vert-tabs-sector-economico"
            role="tabpanel"
            aria-labelledby="vert-tabs-sector-economico-tab"
          >
            <TablaNomencladores titulo="Sector Económico" trazas={trazas}/>
          </div>
          <div
            className="tab-pane fade"
            id="vert-tabs-gestion-certificados"
            role="tabpanel"
            aria-labelledby="vert-tabs-gestion-certificados-tab"
          >
            <TablaNomencladores titulo="Gestión de Certificados" trazas={trazas}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TapsNomencladores;
