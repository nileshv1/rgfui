import "./habitation.css";
import { calculation, calendar, mail, policybanner } from "../../assets/images";
import { Link } from "react-router-dom";

const VehicleHabitation = () => {
  return (
    <div className="pb-5">
      <div>
        <img src={policybanner} className="content-home" />
      </div>
      <div className=" container p-5">
        <span className="h5 headerColor">
          {/* Assurez vous de multiple dommages lies a votre habitation ! */}
          Benefit from comprehensive car insurance for your private or
          professional car, with the best covers and at an ultra-competitive
          price!
        </span>
      </div>

      <div className="container bgColor p-4">
        <div className="row p-2">
          <span className="h5 text-white">
            Compose your ideal home insurance policy
            <hr className="horizontal-line" />
            {/* Composez votre assurance habitation ideale */}
          </span>
        </div>
        <div className="row d-flex align-items-center justify-content-center py-2">
          <div className="row px-0 d-flex align-items-center">
            <div className="col-md-8 align-items-center desktop-devices">
              <img className="p-2 iconSize" src={calculation} />
              <div className="h6 text-white text-size">
                {/* Je prends rendez-vous avec un conseiller */}I make an online
                simulation
              </div>
            </div>
            <div className="col-md-4 mb-2 justify-content-end desktop-devices">
              <Link to="/VehicleSimulation" className="btn btn-sm p-2 btn-size">
                Simulation
              </Link>
            </div>
            {/* !---Mobile devices---! */}
            <div className="col-2 mb-4 align-items-center mobile-devices">
              <img className="iconSize" src={calculation} />
            </div>
            <div className="col-10 mb-4 flex-column mobile-devices">
              <div className="h6 text-white text-size">
                {/* Je prends rendez-vous avec un conseiller */}I make an online
                simulation
              </div>
              <Link to="/VehicleSimulation" className="btn btn-sm p-0 btn-size">
                Simulation
              </Link>
            </div>
            {/* !---Mobile devices---! */}
          </div>
          <div className="row px-0 d-flex align-items-center">
            <div className="col-md-8 align-items-center desktop-devices">
              <img className="p-2 iconSize" src={calendar} />
              <div className="h6 text-white text-size">
                {/* Je souhaite recevoir plus d informations */}Make an
                appointment with a consultant
              </div>
            </div>
            <div className="col-md-4 mb-2 justify-content-end desktop-devices">
              <Link
                to="/VehicleSimulation"
                className="btn btn-sm col-3 btn-orange p-2 btn-size"
              >
                Rendez-vous
              </Link>
            </div>
            {/* !---Mobile devices---! */}
            <div className="col-2 mb-4 align-items-center mobile-devices">
              <img className="iconSize" src={calendar} />
            </div>
            <div className="col-10 mb-4 flex-column mobile-devices">
              <div className="h6 text-white text-size">
                {/* Je prends rendez-vous avec un conseiller */}Make an
                appointment with a consultant
              </div>
              <Link to="/VehicleSimulation" className="btn btn-orange p-0 btn-size">
                Rendez-vous
              </Link>
            </div>
            {/* !---Mobile devices---! */}
          </div>

          <div className="row px-0 d-flex align-items-center">
            <div className="col-md-8 align-items-center desktop-devices">
              <img className="p-2 iconSize" src={mail} />
              <div className="h6 text-white col-6 text-size">
                {/* Composez votre assurance habitation ideale */}I would like
                to receive more information
              </div>
            </div>
            <div className="col-md-4 mb-2 justify-content-end desktop-devices">
              <Link
                to="/VehicleSimulation"
                className="btn btn-sm iconSize btn-blue p-2 btn-size"
              >
                Contact
              </Link>
            </div>
            {/* !---Mobile devices---! */}
            <div className="col-2 mb-4 align-items-center mobile-devices">
              <img className="iconSize" src={mail} />
            </div>
            <div className="col-10 mb-4 flex-column mobile-devices">
              <div className="h6 text-white text-size">
                {/* Je prends rendez-vous avec un conseiller */}I would like to
                receive more information
              </div>
              <Link to="/VehicleSimulation" className="btn iconSize btn-blue p-0 btn-size">
                Contact
              </Link>
            </div>
            {/* !---Mobile devices---! */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default VehicleHabitation;
