import "./simulation.css";
import { policybanner } from "../../assets/images";
import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

const VehicleSimulation = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  const [vNumber, setVnumber] = useState("");
  const handleChange = (e: any) => {
    e.preventDefault();
    setVnumber(e.target.value);
  };

  return (
    <div>
      <div>
        <div className={open ? "popup" : "popup-hide"}>
          <i
            className="fa fa-times-circle"
            onClick={handleClick}
            aria-hidden="true"
          ></i>
          <h4>
            Le numéro de chassis
            <hr />{" "}
          </h4>
          <p>
            7 Le numéro de chassis Ce numéro se trouve généralement à plusieurs
            endroits :
          </p>
          <p>
            Sur la planche de bord côté conducteur – vous pouvez le voir à
            travers le pare-brise depuis l’extérieur de la voiture.
          </p>
          <p>
            Sur la porte côté conducteur, vérifiez l’autocollant qui contient
            des informations sur la voiture, y compris le numéro de chassis.
          </p>{" "}
          <p>
            {" "}
            Dans le compartiment moteur – ce numéro peut se trouver sur le bloc
            moteur ou d’autres pièces du moteur.{" "}
          </p>
          <p>
            {" "}
            Sur les documents d’immatriculation de la voiture – généralement sur
            le certificat d’immatriculation du véhicule.
          </p>
          <p>
            Sur vos documents d’assurance – généralement sur votre carte ou
            police d’assurance.
          </p>
        </div>
        <div className={open ? "simulation-info-blur" : "simulation-info"}>
          <div>
            <img src={policybanner} className="content-home" />
          </div>
          <div className="p-3">
            <span className="h4">
              {" "}
              {/* Simulation en ligne */}
              Online simulation
            </span>
            <hr className="horizontal-line" />
          </div>

          <div className="p-3">
            <div className="row p-2 d-flex flex-column">
              <div className="h5 col-12">
                {/* Remplissez votre numero de chassis */}
                Enter your chassis number
                <i
                  className="fa fa-info info-icon"
                  onClick={handleClick}
                  aria-hidden="true"
                >
                  {" "}
                </i>
              </div>
              <div className="p-2">
                <input
                  className="form-control vehicleText"
                  type="text"
                  width="100"
                  placeholder="ABCDEFG1234567890"
                  value={vNumber}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div style={{ float: "right" }}>
            <div className="p-3 d-flex justify-content-end">
              {vNumber ? (
                <>
                  <Link to="/Car/YourCarDetails">
                    <button
                      type="button"
                      disabled={!vNumber}
                      className="btn btn-sm p-2"
                    >
                      Next
                    </button>
                  </Link>
                </>
              ) : (
                <button
                  type="button"
                  disabled={!vNumber}
                  className="btn btn-sm p-2"
                >
                  {/* Suivant */}
                  Next
                </button>
              )}
            </div>
            <div className="p-2">
              <Link
                to="/Car/YourCar"
                style={{ width: "200px" }}
                className="btn btn-outline col-3 mb-2 order-1 p-2"
              >
                Without chassis number
              </Link>
              {/* <button type="button" className="btn btn-primary">
            Sans numero de chassis
            Without chassis number
          </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VehicleSimulation;
