import React, { useState, useEffect } from "react";

//Componentes
import Tabla from "../../components/Tablas/Tabla";
import MyToast from "../../components/Mensajes/MyToast";

//Iconos
import { AiOutlineClose } from "react-icons/ai";

//Componentes de React-Bootstrap
import { Button, Modal, Row, Col, Form } from "react-bootstrap";

//Libreria para peticiones AJAX
import { helpHttp } from "../../helpers/helpHttp";
import { useAutenticationManager } from "../../hooks/useAutenticationManager"

//variables globales
let arregloUsuarios = [];

//let url = "./routes/rutas.json"
//let url = "http://localhost:5000/usuarios";
//let url = "http://192.168.8.60:8000/gestionar-usuarios";
let tituloModal = "Insertar nuevo usuario";
let btnNombre = "Insertar"


let nuevoUsuario = {
  id: null,
  password: "",
  last_login: null,
  is_superuser: false,
  username: "",
  first_name: "",
  last_name: "",
  email: "",
  is_staff: false,
  is_active: false,
  date_joined: "",
  groups: [],
  user_permissions: [],
};

//Componente GestionUsuarios
const GestionUsuarios = () => {
  const [dbUsuarios, setDbUsuarios] = useState(arregloUsuarios);
  const [checkSu, setCheckSu] = useState(false);
  const [checkSt, setCheckSt] = useState(false);
  const [show, setShow] = useState(false);
  const [showEl, setShowEl] = useState(false);
  const [showDetalles, setShowDetalles] = useState(false);
  const [insertarUsuario, setInsertarUsuario] = useState(nuevoUsuario);
  const [eliminarUs, setEliminarUs] = useState(null);
  const [ruta, setRuta] = useState(null);

  //Toast
  const [mostrar, setMostrar] = useState(false);
  const [msg, setMsg] = useState({})

  //Efecto para cargar los datos antes de que se rendericen los componentes
  useEffect(() => {
    //setLoading(true);

    helpHttp()
      .get("./routes/rutas.json")
      .then(response => {
        setRuta(response.rutasDesarrollo.rutaUsuarios);
        helpHttp()
          .get(response.rutasDesarrollo.rutaUsuarios)
          .then((res) => {
            //console.log(res);
            if (!res.error) {
              //console.log(res)
              //setDbUsuarios(res.data);
              setDbUsuarios(res);
            } else {
              setDbUsuarios([]);
            }
          })
      })

  }, []);

  let autenticacion = useAutenticationManager();

  autenticacion.inSession();

  //console.log(ruta);

  //Metodos del CRUD
  const crearUsuario = (datos) => {
    //datos.id = Date.now();
    datos.id = Math.floor(Math.random() * (30 - 12)) + 12;

    let cuerpo = {
      body: datos,
      headers: { "content-type": "application/json" },
    };

    helpHttp()
      .post(ruta, cuerpo)
      .then((res) => {
        if (!res.error) {
          setDbUsuarios([...dbUsuarios, res]);
          setMostrar(true);
          setMsg({
            msg: "Usuario Creado Satisfactoriamente",
            tipo: 'success',
            titulo: "Usuario Creado"
          })
        } else {
          console.log(res);
        }
      });
  };

  const detallesUsuario = (datos) => {
    setInsertarUsuario(datos);
    //console.log(datos);
    handleShowD();
  };

  const editarUsuario = (datos) => {
    setInsertarUsuario(datos);
    console.log(datos);
    tituloModal = "Editar Usuario";
    btnNombre = "Editar"
    handleShow();
  };

  const actualizarUsuario = (datos) => {
    let endpoint = `${ruta}/${datos.id}`;
    console.log(endpoint);
    console.log(datos);
    let cuerpo = {
      body: datos,
      headers: { "content-type": "application/json" },
    };

    helpHttp()
      .put(endpoint, cuerpo)
      .then((res) => {
        console.log(res);
        if (!res.error) {
          let actualizacion = dbUsuarios.map((usuario) =>
            usuario.id === datos.id ? datos : usuario
          );
          setMostrar(true);
          setMsg({
            msg: "Usuario Editado Satisfactoriamente",
            tipo: 'info',
            titulo: "Usuario Editado"
          })
          setDbUsuarios(actualizacion);
        } else {
        }
      });
  };

  const confirmarEliminacion = (id) => {
    setEliminarUs(id);
    handleShowE();
  };

  const eliminarUsuario = (id) => {
    let endpoint = `${ruta}/${id}`;

    let cuerpo = {
      headers: { "content-type": "application/json" },
    };

    helpHttp()
      .del(endpoint, cuerpo)
      .then((res) => {
        if (!res.error) {
          let actualizacion = dbUsuarios.filter((cliente) => cliente.id !== id);
          setMostrar(true);
          setMsg({
            msg: "Usuario Eliminado Satisfactoriamente",
            tipo: 'danger',
            titulo: "Usuario Eliminado"
          })
          setDbUsuarios(actualizacion);
        } else {
          alert(res);
        }
      });
  };

  //Funciones Manejadoras de Eventos
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !insertarUsuario.password ||
      !insertarUsuario.username ||
      !insertarUsuario.first_name ||
      !insertarUsuario.last_name ||
      !insertarUsuario.email
    ) {
      alert("Debe llenar todos los campos del formulario");
      return;
    }

    //Cargando los valores restantes del nuevo usuario
    let date = new Date();

    insertarUsuario.is_superuser = checkSu;
    insertarUsuario.is_staff = checkSt;
    insertarUsuario.date_joined = date.toLocaleDateString();

    if (insertarUsuario.id === null) {
      crearUsuario(insertarUsuario);
    } else {
      actualizarUsuario(insertarUsuario);
    }

    handleReset();
    handleClose();
  };

  const handleChange = (e) => {
    setInsertarUsuario({
      ...insertarUsuario,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckSu = (e) => {
    setCheckSu(!checkSu);
  };

  const handleCheckSt = (e) => {
    setCheckSt(!checkSt);
  };

  const handleReset = () => {
    setInsertarUsuario(nuevoUsuario);
  };

  //Funciones Manejadoras de los eventos de los Modales
  const handleShow = () => {
    setShow(true);
  };

  const handleClose = () => {
    setCheckSt(false);
    setCheckSu(false);
    tituloModal = "Insertar nuevo usuario";
    btnNombre = "Insertar"
    handleReset();
    setShow(false);
  };

  const handleShowD = () => setShowDetalles(true);

  const handleCloseD = () => {
    setCheckSt(false);
    setCheckSu(false);
    handleReset();
    setShowDetalles(false);
    tituloModal = "Insertar nuevo usuario";
  };

  const handleShowE = () => setShowEl(true);

  const handleCloseE = () => setShowEl(false);

  return (
    <>
      <div className="content-wrapper">
        <div className="content-header"></div>
        <section className="content ml-3 mr-3">
          {/* <button
            type="button"
            className="btn btn-outline-primary mb-3"
            onClick={handleShow}
          >
            <BsPlusLg className="mb-1" /> Insertar Nuevo Usuario
          </button> */}
          <Tabla
            data={dbUsuarios}
            detallesUsuario={detallesUsuario}
            editarUsuario={editarUsuario}
            confirmarEliminacion={confirmarEliminacion}
            handleShow={handleShow}
          />
        </section>

        {/* {msg.abrir && <Toast msg={msg}/>} */}

        {/* Modal */}
        <Modal size="lg" show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>{tituloModal}</Modal.Title>
            <AiOutlineClose
              style={{ fontSize: 20, cursor: "pointer" }}
              onClick={handleClose}
            />
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Nombre:</Form.Label>
                    <Form.Control
                      type="text"
                      name="first_name"
                      onChange={handleChange}
                      value={insertarUsuario.first_name}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Apellidos:</Form.Label>
                    <Form.Control
                      type="text"
                      name="last_name"
                      onChange={handleChange}
                      value={insertarUsuario.last_name}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Nombre de usuario:</Form.Label>
                    <Form.Control
                      type="text"
                      name="username"
                      onChange={handleChange}
                      value={insertarUsuario.username}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Correo:</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      onChange={handleChange}
                      value={insertarUsuario.email}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Contraseña:</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      onChange={handleChange}
                      value={insertarUsuario.password}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Form.Check
                  type="checkbox"
                  className="ml-4"
                  name="is_superuser"
                  onChange={handleCheckSu}
                  value={insertarUsuario.is_superuser}
                />
                <Form.Label>¿Es superusuario?</Form.Label>
                <Form.Check
                  type="checkbox"
                  className="ml-5"
                  name="is_staff"
                  onChange={handleCheckSt}
                  value={insertarUsuario.is_staff}
                />
                <Form.Label>¿Es usuario del sistema?</Form.Label>
              </Row>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" onClick={handleSubmit} variant="primary">
              {btnNombre}
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal size="lg" show={showDetalles} onHide={handleCloseD}>
          <Modal.Header>
            <Modal.Title>Detalles del Usuario</Modal.Title>
            <AiOutlineClose
              style={{ fontSize: 20, cursor: "pointer" }}
              onClick={handleCloseD}
            />
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col>
                <p style={{ fontWeight: "bold", fontSize: 20 }}>Nombre: </p>
                <span>{insertarUsuario.first_name}</span>
                <p style={{ fontWeight: "bold", fontSize: 20 }}>Apellidos: </p>
                <span>{insertarUsuario.last_name}</span>
                <p style={{ fontWeight: "bold", fontSize: 20 }}>
                  Nombre de Usuario:{" "}
                </p>
                <span>{insertarUsuario.username}</span>
                <p style={{ fontWeight: "bold", fontSize: 20 }}>Contraseña: </p>
                <span>{insertarUsuario.password}</span>
                <p style={{ fontWeight: "bold", fontSize: 20 }}>Correo: </p>
                <span>{insertarUsuario.email}</span>
              </Col>
              <Col>
                <p style={{ fontWeight: "bold", fontSize: 20 }}>
                  Último inicio:{" "}
                </p>
                <span>{insertarUsuario.last_login}</span>
                <p style={{ fontWeight: "bold", fontSize: 20 }}>
                  Fecha de registro:{" "}
                </p>
                <span>{insertarUsuario.date_joined}</span>
                <p style={{ fontWeight: "bold", fontSize: 20 }}>Activo: </p>
                {insertarUsuario.is_active === true ? (
                  <span>Activo</span>
                ) : (
                  <span>No Activo</span>
                )}
                <p style={{ fontWeight: "bold", fontSize: 20 }}>Empleado: </p>
                {insertarUsuario.is_staff === true ? (
                  <span>Es empleado</span>
                ) : (
                  <span>No es empleado</span>
                )}
                <p style={{ fontWeight: "bold", fontSize: 20 }}>
                  Superusuario:{" "}
                </p>
                {insertarUsuario.is_superuser === true ? (
                  <span>Es superusuario</span>
                ) : (
                  <span>No es superusuario</span>
                )}
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseD}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={showEl} onHide={handleCloseE}>
          <Modal.Header>
            <Modal.Title>Eliminar Usuario</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>¿Estás seguro de eliminar?</p>
          </Modal.Body>
          <Modal.Footer>
            <Button
              type="submit"
              onClick={() => {
                eliminarUsuario(eliminarUs);
                handleCloseE();
              }}
              variant="primary"
            >
              Si
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                setEliminarUs(null);
                handleCloseE();
              }}
            >
              No
            </Button>
          </Modal.Footer>
        </Modal>

        {mostrar && <MyToast setMostrar={setMostrar} msg={msg} />}
      </div>
    </>
  );
};

export default GestionUsuarios;
