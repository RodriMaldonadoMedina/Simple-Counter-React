import React, { useState, useEffect } from "react";
import Card from "./Card.jsx";
import Alert from "./Alert.jsx";

const CuentaAtras = () => {
  const [seconds, setSeconds] = useState(0);
  const [texto, setToString] = useState([]);
  const [intervalID, setIntervalID] = useState(0);
  const [bool, setBool] = useState(false);
  const [mostrarModal, setMostrarModal] = useState(false);

  useEffect(() => {
    if (bool) {
      let newIntervalID = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
      setIntervalID(newIntervalID);
    } else stopInterval();
  }, [bool]);

  const stopInterval = () => {
    clearInterval(intervalID);
    setIntervalID(0);
  };

  useEffect(() => {
    setToString(seconds.toString().split("").reverse());
  }, [seconds]);

  useEffect(() => {
    if (seconds < 0) {
      setBool(false);
      setMostrarModal(true);
      //alert("Ha finalizado la cuenta regresiva");
      setSeconds(0);
    }
  }, [seconds]);

  console.log(mostrarModal);

  const countDown = () => {
    let inputValue = document.querySelector("input");
    if (inputValue.value > 0) {
      setSeconds((seconds) => (seconds = inputValue.value));
      setBool(true);
      inputValue.value = "";
    } else alert("El numero debe ser mayor que 0");
  };

  //A renderizar

  return (
    <div className="container-fluid p-0 text-center my-4">
      <div className="d-flex mb-3">
        <i className="fa-solid fa-clock fs-50 myClock"></i>
        <Card text={texto[5]} />
        <Card text={texto[4]} />
        <Card text={texto[3]} />
        <Card text={texto[2]} />
        <Card text={texto[1]} />
        <Card text={texto[0]} />
      </div>

      <div className="container">
        <div className="row g-3 align-items-center justify-content-start my-3">
          <div className="col-auto">
            <label htmlFor="inputTime" className="col-form-label text-white">
              Time
            </label>
          </div>
          <div className="col-4">
            <input type="number" id="inputTime" className="form-control" />
          </div>
          <div className="col-auto">
            <button
              className="btn btn-secondary mx-2 border"
              onClick={countDown}
            >
              Count Down
            </button>
          </div>
        </div>
        {mostrarModal ? (
          <Alert cambiarModo={setMostrarModal} texto="Atencion!" />
        ) : null}
      </div>
    </div>
  );
};

export default CuentaAtras;
