import React from "react";
//import { /*  Row, Col, */ Toast, ToastContainer, Form } from "react-bootstrap";

const MyToast = ({ setMostrar, msg }) => {

  setTimeout(() => {
    setMostrar(false);
  }, 4000);

  return (
    <>
      <div id="toastsContainerBottomRight" className="toasts-bottom-right mb-1">
      {/* <div id="toastsContainerTopCenter" className="toasts-top-center mb-1"> */}
        <div
          className={`toast bg-${msg.tipo} fade show mr-3`}
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-header">
            <i className={`${msg.icono} mr-1`}></i>
            <strong className="mr-auto">{msg.titulo}</strong>
            <small></small>
            <button
              data-dismiss="toast"
              type="button"
              className="ml-2 mb-1 close"
              aria-label="Close"
            >
              <span onClick={() => setMostrar(false)} aria-hidden="true">×</span>
            </button>
          </div>
          <div className="toast-body">
            {msg.msg}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyToast;
