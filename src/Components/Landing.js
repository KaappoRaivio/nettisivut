import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";

class Landing extends Component {
  constructor(props) {
    super(props);

    this.landingData = props.landingData;
  }
  render() {
    return (
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
        <div className="w-100">
          <h1 className="mb-0 text-title">{this.landingData.firstName}{this.landingData.lastName}
          </h1>

          <div className="subheading mb-5 text-normal">{this.landingData.phoneNumber} · 
            <a className="text-normal" href={"mailto:" + this.landingData.email}>{this.landingData.email}</a>
          </div>
          <p className="lead mb-5 text-normal">{this.landingData.bio}</p>
          <div className="social-icons">

            <a href={this.landingData.github} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href={this.landingData.instagram} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Landing;
