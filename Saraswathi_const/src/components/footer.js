import React from "react";
import scslogo from "..//components/img/scs logo.png";

export default function Appfooter() {
  return (
    <div className="container-fluid text-center bg-dark">
      <div className="row py-5 text-white">
        <div className="col-md-3 col-lg-3 col-xl-3 mx-5 mt-3">
          <img src={scslogo} className="logo" width="100%" />
          <br />
          <br />
        </div>
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
          <h5 className="text-white">QUICK LINKS</h5>
          <br />
          <p className="text-secondary">New Construction</p>
          <p className="text-secondary">Renovation</p>
          <p className="text-secondary">Interior Solution</p>
        </div>
        <div className="col-md-3 col-lg-2 col-xl-2 me-auto mt-3">
          <h5 className="text-white">HEAD OFFICE</h5>
          <br />
          <p className="text-secondary">
            27/15, Shanthi Nagar Main Road, Adambakkam,
            <br />
            Chennai - 600 088
          </p>
          <p className="contact-details text-secondary">
            <i className="fa fa-phone me-2"></i>
            +91 80727 98551
          </p>
          <p className="contact-details text-secondary">
            <i className="fa fa-envelope ms-4 me-2"></i>
            nanandn@gmail.com
          </p>
        </div>
        <div className="col-md-4 col-lg-3 col-xl-3 me-auto mt-3">
          <h5 className="text-white">FOLLOW US</h5>
          <br />

          <a href="">
            <i className="fab fa-facebook-f me-2 text-secondary"></i>
          </a>
          <a href="">
            <i className="fab fa-linkedin-in me-2 text-secondary"></i>
          </a>
          <a href="">
            <i className="fab fa-whatsapp me-2 text-secondary"></i>
          </a>
        </div>
        <br />
        <hr></hr>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="text-secondary">
                Copyrights © 2023 Saraswathi Constructions. All Rights Reserved.
              </p>
            </div>
            <div className="col-md-6">
              <p className="text-secondary">
                Developed by{" "}
                <span className="text-warning"> Legends Tech Solution </span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
