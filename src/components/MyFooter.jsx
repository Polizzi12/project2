import { Component } from "react";
import { Container } from "react-bootstrap";


function Footer(){
    return(
        <footer className="Footer bg-warning">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h4>Library.net</h4>
              <ul>
                <li className="punto iff"><a href="#">Chi siamo</a></li>
                <li className="punto iff"><a href="#">Opportunità di lavoro</a></li>
                <li className="punto iff"><a href="#">For the Record</a></li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="cont">
                <div>
                  <p className="iff">informazioni legali </p>
                  <p className="iff">Sicurezza e Centro sulla privacy </p>
                  <p className="iff">Informativa sulla privacy </p>
                  <p className="iff">Impostazioni coockie </p>
                  <p className="iff">Info annunci </p>
                  <p className="iff">Accessibilità</p>
                </div>
                <div>
                  <p>&copy;2024 Library.net</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
}
export default Footer;