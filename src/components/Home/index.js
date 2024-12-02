import React from 'react';
import HomeComponent from './HomeComponent';
import ContactComponent from './ContactComponent';

class HomeContainer extends React.Component {
  render() {
    return (
      <div>
        <HomeComponent />
        <ContactComponent />
      </div>
    );
  }
}

export default HomeContainer;
