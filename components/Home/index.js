import React from 'react';
import HeroComponent from './HeroComponent';
import HomeComponent from './HomeComponent';
import ContactComponent from './ContactComponent';
import LocationComponent from './LocationComponent';

class HomeContainer extends React.Component {
  render() {
    return (
      <div>
        <HomeComponent/>
        <HeroComponent />
        <ContactComponent />
        <LocationComponent />
      </div>
    );
  }
}

export default HomeContainer;
