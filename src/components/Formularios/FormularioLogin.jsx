import React, { useState } from 'react'
import { useHistory } from "react-router";

import { useAutenticationManager } from '../../hooks/useAutenticationManager'

let initialForm = {
    id: null,
    username: "",
    password: ""
};

const FormularioLogin = () => {
    const [form, setForm] = useState(initialForm);

    let history = useHistory();
    let autenticacion = useAutenticationManager();

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (autenticacion.ValidateUser(form).code === "200") {
            setForm(initialForm);
            history.push("/home");
        } else {
            alert("Usuario o contraseña incorrectas");
            return;
        }
    };
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 m-auto">
                    <div className="card card-primary">
                        <div className="card-header">
                            <h3 className="card-title">Iniciar Sesión</h3>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="card-body">
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Nombre de Usuario</label>
                                    <input
                                        type="text"
                                        name="username"
                                        placeholder="Usuario"
                                        onChange={handleChange}
                                        value={form.username}
                                        className="form-control"
                                        id="exampleInputEmail1" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Contraseña</label>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Contraseña"
                                        onChange={handleChange}
                                        value={form.password}
                                        className="form-control"
                                        id="exampleInputPassword1" />
                                </div>
                            </div>
                            {/* /.card-body */}
                            <div style={{ display: "flex", justifyContent: "center" }} className="card-footer">
                                <button
                                    type="submit"
                                    className="btn btn-lg btn-primary"
                                    /* onClick={} */>
                                    Loguearse
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormularioLogin