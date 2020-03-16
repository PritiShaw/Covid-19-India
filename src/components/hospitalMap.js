import { GoogleComponent } from 'react-google-location' 

//... 
import React, { Component } from 'react';



const API_KEY = "AIzaSyDNuZSFsD41ixJF8VzIQeXwzU8cO1g"  // how to get key - step are below

class HomeComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      place: null,
    };
  }

  render() {
    return (
      <div >
         <GoogleComponent
         
          apiKey={API_KEY}
          language={'en'}
          country={'country:in|country:us'}
          coordinates={true}
          placeholder={'Start typing location'}
          locationBoxStyle={'custom-style'}
          locationListStyle={'custom-style-list'}
          onChange={(e) => { this.setState({ place: e }) }} />
      </div>

    )
  } 
}


export default HomeComponent;