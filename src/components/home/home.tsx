import "./home.css";
import { contenthome, assurance_auto, habitation } from "../../assets/images";

const Home = () => {
  return (
    <div>
      {/* <div>
        <img src={contenthome} className="content-home" />
      </div> */}

      <div className="row text-start content-home position-relative">
        <img src={contenthome} />
        <span className="centered">
          {/* Le Groupe RGF: */}
          The RGF Group:
          <h6>
            {/* <p>le meilluer service et unne </p>  */}
            <p>The best service and</p>
            <p>optimum protection !</p>
            {/* <p>The best service and optimum protection!</p> */}
          </h6>
        </span>
      </div>

      <div className="p-5">
        <span className="h3">
          Compose your insurance online
          <hr className="horizontal-line" />
        </span>
      </div>

      <div className="controls p-4">
        <div className="row text-white p-2">
          <span className="h4">
            {/* Cliquez sur votre assurance pour simuler votre prime */}
            Click on your insurance to simulate your premium
          </span>
        </div>
        <div className="d-flex justify-content-center p-5 mr-2">
          <a href="habitation" className="nav-link text-white">
            <img
              src={assurance_auto}
              // width="200"
              // height="200"
              className="image-size col-md-6"
            />
          </a>
          <a href="/" className="nav-link text-white">
            <img src={habitation} className="image-size col-md-6 offset-md-2" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Home;
