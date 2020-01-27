import React, { Component } from 'react';
import Sidebar from './Components/Sidebar';
import Landing from './Components/Landing';
import Experience from './Components/Experience';
import Education from './Components/Education';
import Skills from './Components/Skills';
import Interests from './Components/Interests';
import Awards from './Components/Awards';
import Portfolio from "./Components/Portfolio";
import profileData from './profileData.json';

// <Experience experience={this.state.experience} />
// <hr className="m-0" />
// <Education education={this.state.education}/>
// <hr className="m-0" />
// <Skills skills={this.state.skills} />
// <hr className="m-0" />
// <Interests interests={this.state.interests} />
// <hr className="m-0" />
// <Awards awards={this.state.awards} />

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      landingData : profileData.landing,
      experience : profileData.experience,
      education : profileData.education,
      skills : profileData.skills,
      interests : profileData.interests,
      awards : profileData.awards,
      images: profileData.images
    }
  }
  render() {
    return (
      <div className="App bg-secondary">
        <Sidebar sidebarData={this.state.landingData} />
        <div className="container-fluid p-0 text-normal">
          <Landing landingData={this.state.landingData} />
          <hr className="m-0" />

        </div>

        <div className="container-fluid p-0 text-normal">
          <Portfolio images={this.state.images} />
        </div>
      </div>
    );
  }
}

export default App;
