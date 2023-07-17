import "./details.css";
import { Vehicle_Details } from "../../constants";
import moment from "moment";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Details = () => {
  const [open, setOpen] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [amount, setAmount] = useState("");
  const [month, setMonth] = useState("");
  const [carburant, setCaburant] = useState("");
  const [marque, setMarque] = useState("");
  const [model, setModel] = useState("");
  const [type, setType] = useState("");
  const [years, setYears] = useState("");
  const handleChange = (e: any) => {
    if (e.target.name == "amount") {
      setAmount(e.target.value);
    } else if (e.target.name == "month") {
      setMonth(e.target.value);
    } else if (e.target.name == "carburant") {
      setCaburant(e.target.value);
    } else if (e.target.name == "marque") {
      setMarque(e.target.value);
    } else if (e.target.name == "model") {
      setModel(e.target.value);
    } else if (e.target.name == "type") {
      setType(e.target.value);
    } else if (e.target.name == "years") {
      setYears(e.target.value);
    }
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(years, "years");
    console.log("Form is Submitted");
    setAmount("");
    setMonth("");
    setCaburant("");
    setMarque("");
    setModel("");
    setYears("");
    setType("");
  };
  // console.log(open)
  const handleClick = () => {
    setOpen(!open);
  };
  useEffect(() => {
    console.log(window.location.pathname, "path");
    if (window.location.pathname === "/Car/YourCarDetails") {
      setToggle(false);
    }
    if (window.location.pathname === "/Car/YourCar") {
      setToggle(true);
    }
  }, []);

  return (
    <div className="container pb-5">
      <div className="d-flex justify-content-center align-items-center pb-8">
        {/* details-page */}

        <div className={open ? "popup1" : "popup-hide"}>
          <i
            className="fa fa-times-circle"
            onClick={handleClick}
            aria-hidden="true"
          ></i>
          <h2>{/* Valeur facture */}Invoice value</h2>
          <p>
            {/* Il est possible de retrouver cette information sur la facture, le
            bon de commande ou le contrat de vente qui vous a été remis lors de
            l'achat de votre voiture. */}
            This information can be found on the invoice, order form or sales
            purchase order or sales contract you received when you bought your
            car, purchase of your car.
          </p>
          <p>
            {/* Si vous n'avez plus ces documents, vous pouvez vérifier vos relevés
            de compte pour retrouver le montant et la date de paiement. */}
            If you no longer have these documents, you can check your account
            statements to find the amount and date of payment.
          </p>
        </div>
        <div className={open ? "details-info-blur" : "details-info"}>
          <Link to="/VehicleSimulation">
            <button className="back-button">
              <i className="fa fa-chevron-left" aria-hidden="true"></i>
              {/* Retour */}
              Back
            </button>
          </Link>
          <h2>
            {/* Votre voiture */}
            Your Car :
            <hr className="horizontal-line" />
          </h2>

          <form className="needs-validation" onSubmit={handleSubmit}>
            {/* <div className="row mb-3 p1">
                            <div className="col-sm-1 c1">Name</div>
                            <div className='col-sm-1 c2 d-flex justify-content-end '>
                                <div className="  c3">Name</div>
                            </div>
                        </div> */}
            <div className="detail-row row mb-3">
              <div className="col-lg-7 col-md-7 col-sm-7">
                {/* Carburant  */}Fuel
              </div>
              {toggle ? (
                <select
                  className="form-select form-select-sm col-lg-5 col-md-5 col-sm-12"
                  id="fuels"
                  required
                  name="carburant"
                  value={carburant}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    {/* Sélectionnez */} Select
                  </option>
                  {Vehicle_Details.Fuels.length > 0 &&
                    Vehicle_Details.Fuels?.map((item, index) => {
                      return (
                        <option key={index} value={item.value}>
                          {item.label}
                        </option>
                      );
                    })}
                </select>
              ) : (
                <span className="col-lg-5 col-md-5 col-sm-5 d-flex justify-content-end fw-semibold">
                  {" "}
                  Esscence{" "}
                </span>
              )}
            </div>

            <div className="detail-row row mb-3">
              <div className="col-lg-7 col-md-7 col-sm-12">
                {/* Marque */}Brand
              </div>
              {toggle ? (
                <select
                  className="form-select form-select-sm col-lg-5 col-md-5 col-sm-12"
                  id="fuels"
                  required
                  name="marque"
                  value={marque}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    {/* Sélectionnez */}Select
                  </option>
                  {Vehicle_Details.Fuels.length > 0 &&
                    Vehicle_Details.Fuels?.map((item, index) => {
                      return (
                        <option key={index} value={item.value}>
                          {item.label}
                        </option>
                      );
                    })}
                </select>
              ) : (
                <span className="col-lg-5 col-md-5 d-flex justify-content-end fw-semibold">
                  {" "}
                  Volkswagen{" "}
                </span>
              )}
            </div>
            <div className="detail-row row mb-3">
              <div className="col-lg-7 col-md-7 col-sm-12">
                {/* Modéle */} Model
              </div>
              {toggle ? (
                <select
                  className="form-select form-select-sm col-lg-5 col-md-5 col-sm-12"
                  id="fuels"
                  required
                  name="model"
                  value={model}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    {/* Sélectionnez */}Select
                  </option>
                  {Vehicle_Details.Fuels.length > 0 &&
                    Vehicle_Details.Fuels?.map((item, index) => {
                      return (
                        <option key={index} value={item.value}>
                          {item.label}
                        </option>
                      );
                    })}
                </select>
              ) : (
                <span className="col-lg-5 col-md-5 d-flex justify-content-end fw-semibold">
                  {" "}
                  Golf Vill{" "}
                </span>
              )}
            </div>
            <div className="detail-row row mb-3">
              <div className="col-lg-7 col-md-7"> Type </div>
              {toggle ? (
                <select
                  className="form-select form-select-sm col-lg-5 col-md-5 col-sm-12"
                  id="fuels"
                  required
                  name="type"
                  value={type}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    {/* Sélectionnez */}Select
                  </option>
                  {Vehicle_Details.Fuels.length > 0 &&
                    Vehicle_Details.Fuels?.map((item, index) => {
                      return (
                        <option key={index} value={item.value}>
                          {item.label}
                        </option>
                      );
                    })}
                </select>
              ) : (
                <span className="col-lg-5 col-md-5 d-flex justify-content-end fw-semibold">
                  {" "}
                  tsi 110{" "}
                </span>
              )}
            </div>
            {!toggle ? (
              <div className="detail-row row mb-3">
                <div className="col-lg-7 col-md-7"> Annee de construction </div>
                <select
                  className="form-select form-select-sm col-lg-5 col-md-5"
                  id="fuels"
                >
                  {Vehicle_Details.Fuels.length > 0 &&
                    Vehicle_Details.Fuels?.map((item, index) => {
                      return (
                        <option key={index} value={item.value}>
                          {item.label}
                        </option>
                      );
                    })}
                </select>
              </div>
            ) : (
              <></>
            )}
            {toggle ? (
              <div className="row mb-3">
                <div className="col-lg-7 col-md-7">
                  {" "}
                  {/* Première immatriculation */}
                  Initial registration{" "}
                </div>
                <select
                  className="form-select form-select-sm col-lg-5 col-md-5 years col-sm-12"
                  id="cars"
                  required
                  name="years"
                  value={years}
                  onChange={handleChange}
                >
                  {Vehicle_Details.Years.length > 0 &&
                    Vehicle_Details.Years?.map((item, index) => {
                      return (
                        <option key={index} value={item.value}>
                          {item.label}
                        </option>
                      );
                    })}
                </select>
              </div>
            ) : (
              <></>
            )}
            <div className="detail-row row mb-3 d-flex flex-column flex-sm-column flex-md-row">
              <div className="info-label col-lg-8 col-md-8 col-sm-12">
                <div className='info-div'>
                  {/* Valeur facture(tvac) */}
                  <span className="info-span">Invoice value(incl. VAT)</span>
                  <i
                    className="fa fa-info info-icon"
                    onClick={handleClick}
                    aria-hidden="true"
                  >
                    {" "}
                  </i>
                </div>
                <span className='info-span2'>
                  {/* remises comprises (hors reprise)  */}
                  including discounts (excluding trade-in)
                </span>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-12 d-flex justify-content-sm-start justify-content-md-end ">
                <span className="euro mr-5 pr-5">&euro;</span>
                <input
                  type="number"
                  min="2000"
                  max="157300"
                  className="form-control dropdown amount"
                  name="amount"
                  value={amount}
                  onChange={handleChange}
                  placeholder="0,00"
                />
                <div className="invalid-feedback">
                  Please choose a Valid Amount.
                </div>
              </div>
            </div>
            <div className="detail-row row mb-3 d-flex flex-column flex-sm-column flex-md-row">
              <div className="col-lg-7 col-md-7">
                {" "}
                {/* Date d’achat de votre voiture */}
                Date of purchase
              </div>
              <div className="col-lg-5 col-md-5 d-flex justify-content-sm-start justify-content-md-end">
                <input
                  type="month"
                  className="month dropdown "
                  placeholder="mm/aaaa"
                  name="month"
                  value={month}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="submit-button">
              <button type="submit" className="btn btn-sm">
                {/* Suivant */}
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    // <div className="container">
    //     <div className="row">
    //         <div className="col-md-4">.col-md-8</div>
    //         <div className="col-md-4">.col-md-8</div>
    //         <div className="col-6 col-md-4">.col-6 .col-md-4</div>
    //     </div>
    // </div>
  );
};

export default Details;
