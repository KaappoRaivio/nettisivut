import React, { Component } from 'react';



class Portfolio extends Component {
  constructor (props) {
    super(props);

    this.images = props.images.map((item, index) => require(item + ""));
    // this.images = props.images;
    console.log(this.images);
    // this.a = require("./DSC_6284.jpg");
    // this.a = require(this.images[0] + "");
    // alert(this.images[0] == "./DSC_6284.jpg");
  }

  render () {
    return (
      <section className="w-100 resume-section p-3 p-lg-5 Portfolio align-items-center" id="portfolio">
        <h1 className="mb-0 text-title portfolio">Portfolio</h1>
        <div className="image-container">
        {
          this.images.map((image, index) => {
            // <img src="../Assets/DSC_6284.jpg" key={index} onError={(e) => alert(e)} />
            // <img src="https://www.w3schools.com/images/picture.jpg" key={index} />
            // const img = require(image);
            return (
              <img className="portfolioimage" src={image} key={index} alt="paska"/>
            )

          })
        }
        </div>
      </section>
    )
  }
}

export default Portfolio;
