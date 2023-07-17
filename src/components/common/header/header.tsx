import "./header.css";
import { headerlogo, nngroup } from "../../../assets/images";

const Header = () => {
  return (
    <div className="p-4">
      <nav className="navbar navbar-light">
        <a className="navbar-brand" href="/">
          <img
            src={headerlogo}
            alt="Bootstrap"
            width="50"
            height="50"
            className="d-inline-block align-top"
          />
        </a>
        <div className="my-2 my-2 my-sm-0 text-end">
          <span className="h2 row">Courtier en assurance</span>
          <div className="row">
            <div className="col">
              <span>supporte par</span>
              <img
                src={nngroup}
                alt="Bootstrap"
                width="50"
                height="30"
                className="align-top"
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;
