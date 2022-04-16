import React from "react";

const Graficas = () => {
  return (
    <section className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">Relación cantidad de cursos creados y cantidad de estudiantes que ingresarón a los cursos</h3>
                <div className="card-tools">
                  <button
                    type="button"
                    className="btn btn-tool"
                    data-card-widget="collapse"
                  >
                    <i className="fas fa-minus" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-tool"
                    data-card-widget="remove"
                  >
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
              <div className="card-body">
                <div className="chart">
                  <canvas
                    id="areaChart"
                    style={{
                      minHeight: 250,
                      height: 250,
                      maxHeight: 250,
                      maxWidth: "100%",
                    }}
                  />
                </div>
              </div>
              {/* /.card-body */}
            </div>
          </div>
          <div className="col-md-6">
            <div className="card card-info">
              <div className="card-header">
                <h3 className="card-title">Relación cantidad de estudiantes que aprobaron los cursos y los que suspendieron</h3>
                <div className="card-tools">
                  <button
                    type="button"
                    className="btn btn-tool"
                    data-card-widget="collapse"
                  >
                    <i className="fas fa-minus" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-tool"
                    data-card-widget="remove"
                  >
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
              <div className="card-body">
                <div className="chart">
                  <canvas
                    id="lineChart"
                    style={{
                      minHeight: 250,
                      height: 250,
                      maxHeight: 250,
                      maxWidth: "100%",
                    }}
                  />
                </div>
              </div>
              {/* /.card-body */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Graficas;
