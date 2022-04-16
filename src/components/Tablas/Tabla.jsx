import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";
import { BiTrashAlt } from "react-icons/bi";

const Tabla = ({
  data,
  detallesUsuario,
  editarUsuario,
  confirmarEliminacion,
  handleShow,
}) => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="card card-primary">
          <div className="card-header">
            <h3 className="card-title">Tabla de Usuarios</h3>
            <div className="card-tools">
              <span title="Cantidad de usuarios" className="badge badge-secondary mr-2">{data.length}</span>
              <button onClick={handleShow} type="button" className="btn btn-tool" title="Agregar Nuevo Usuario" >
                <i className="fa fa-user-plus"></i>
              </button>
            </div>
          </div>
          {/* /.card-header */}
          <div
            className="card-body table-responsive p-0"
            style={{ minHeight: 300 }}
          >
            {data.length === 0 ? (
              <p
                style={{ textAlign: "center", fontWeight: "bold", marginTop: 10, fontSize: 25 }}
                className="lead">No hay Datos que mostrar</p>
            ) : (
              <table className="table table-head-fixed text-nowrap table-primary">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Apellidos</th>
                    <th>Correo</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((fila) => (
                    <tr key={fila.id} style={{ verticalAlign: "middle" }}>
                      <td>{fila.first_name}</td>
                      <td>{fila.last_name}</td>
                      <td>{fila.email}</td>
                      {/* <td><span className="tag tag-success">Approved</span></td> */}
                      <td>
                        <button
                          type="button"
                          className="btn btn-outline-primary mr-1"
                          onClick={() => detallesUsuario(fila)}
                        >
                          <AiOutlineEye /* style={{fontSize: "20px"}} */ />
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-success mr-1"
                          onClick={() => editarUsuario(fila)}
                        >
                          <AiOutlineEdit />
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-danger mr-1"
                          onClick={() => confirmarEliminacion(fila.id)}
                        >
                          <BiTrashAlt />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
          {/* /.card-body */}
        </div>
        {/* /.card */}
      </div>
    </div>
  );
};

export default Tabla;
