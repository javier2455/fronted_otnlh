import React, {useState} from "react";
import MyToast from "../../components/Mensajes/MyToast";
import { useAutenticationManager } from "../../hooks/useAutenticationManager";

let initialForm = {
  archivoRespaldo: "",
  archivoRestaura: ""
};

const AdminDB = () => {
  const [form, setForm] = useState(initialForm);
  const [mostrar, setMostrar] = useState(false);
  const [msg, setMsg] = useState({})

  const showAlert = (mensaje) => {
    setMostrar(true);
    setMsg(mensaje);
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  const Respaldar = () => {

  }

  const Restaurar = () => {

  }
  let autenticacion = useAutenticationManager();

  autenticacion.inSession();

  return (
    <div className="content-wrapper">
      <div className="content-header">
        {/* <button
          type="button"
          className="btn btn-default toastsDefaultBottomRight"
          onClick={() => {
            setMostrar(true);
          }}
        >
          Launch Default Toast (bottomRight)
        </button>*/}
      </div>
      <section className="content">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card card-primary">
                <div className="card-header clear-fix">
                  <h3 className="card-title">Respaldo/Restaura de datos</h3>
                  <i className="nav-icon fas fa-database float-right" />
                </div>
                <div className="card-body">
                  <strong>
                    <i className="fas fa-book mr-1" /> Descripción de la
                    operación
                  </strong>
                  <p
                    className="text-muted"
                    style={{ textAlign: "justify", minHeight: 120 }}
                  >
                    En esta sección respaldaremos/restauraremos toda la
                    información del sistema en/desde un archivo físico fuera del
                    sistema para protegerlo ante posibles fallas o para disponer
                    de la información almacenada en un período de tiempo pasado.
                  </p>
                  <hr />
                  <strong>
                    <i className="fas fa-file-alt mr-1" /> Nota
                  </strong>
                  <p
                    className="text-muted"
                    style={{ textAlign: "justify", minHeight: 80 }}
                  >
                    Esta operación debe ser realizada por un especialista del
                    sistema tomando las precauciones de no provocar
                    malfuncionamiento en el sistema. Esta operación hará que la
                    información actual ya no este disponible si no fue
                    respaldada previamente.
                  </p>
                </div>
                <div className="card-footer clear-fix">
                  <div className="form-group">
                    <label htmlFor="exampleInputFile">Archivo</label>
                    <div className="input-group">
                      <div className="custom-file">
                        <input
                          type="file"
                          className="custom-file-input"
                          id="inputFileResp"
                          name="archivoRespaldo"
                          placeholder="<Seleccione archivo>"
                          onChange={handleChange}
                          value={form.archivoRespaldo}
                        />
                        <label
                          className="custom-file-label"
                          htmlFor="inputFileResp"
                        >
                          {form.archivoRespaldo}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <button
                        type="button"
                        className="btn btn-block btn-success"
                        onClick={Respaldar}
                      >
                        <i className="nav-icon fas fa-download float-left mt-1" />
                        Respaldar
                      </button>
                    </div>
                    <div className="col-6">
                      <button
                        type="button"
                        className="btn btn-block btn-danger"
                        onClick={Restaurar}
                      >
                        <i className="nav-icon fas fa-upload float-left mt-1" />
                        Restaurar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {mostrar && <MyToast setMostrar={setMostrar} msg={msg} />}
    </div>
  );
};

export default AdminDB;
