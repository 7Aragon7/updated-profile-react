import React from "react";
import {Link} from "react-router-dom";

function PortfolioPage() {
  return (
    <>
    <container className="row" style={{padding: "50px"}}>
      <div className="card col-md-4" style={{width: "18rem"}}>
        <img src="..." class="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Resume</h5>
          <p className="card-text">
            My Resume.
          </p>
          <Link to="/" class="btn btn-primary">
            Go somewhere
          </Link>
        </div>
      </div>
      <div className="card col-md-4" style={{width: "18rem"}}>
        <img src="..." class="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Homework</h5>
          <p className="card-text">
            A few apps to check out that I created.
          </p>
          <Link to="#" class="btn btn-primary">
            Go somewhere
          </Link>
        </div>
      </div>
      <div className="card col-md-4" style={{width: "18rem"}}>
        <img src="..." class="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Projects</h5>
          <p className="card-text">
            Here are some projects I help developed with my team while in the Bootcamp class.
          </p>
          <Link to="#" class="btn btn-primary">
            Go somewhere
          </Link>
        </div>
      </div>
      </container>
    </>
  );
}

export default PortfolioPage;
