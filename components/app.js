import Footer from './footer';
import HeadingComponent from './siteHeading/HeadingComponent';
import Navbar from './navbar';
import React, { Component } from 'react';
import styles from './main.style';
import {theme} from './AppStyles';
import { ThemeProvider } from 'emotion-theming';
import { Global } from '@emotion/core';
import '../public/fonts/mt4w-icons.svg';

class App extends Component {
  state = {
    // a value from 0 to 1 representing proportion of window scroll until
    // the navbar styling changes
    scrollPosition: 0,
  }

  componentDidMount = () => {
    let startTransition = 50; // amount of pixels to scroll before the navbar styling changes
    window.addEventListener('scroll', evt => {
      let position = window.scrollY;
      if (position < startTransition) {
        this.setState({scrollPosition: position / startTransition});
      } else if (position >= startTransition && this.state.scrollPosition < 1) {
        this.setState({scrollPosition: 1});
      }
    });
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <Global styles={styles}/>
          <HeadingComponent position={this.state.scrollPosition} />
          <Navbar position={this.state.scrollPosition} />
          {this.props.children}
          <Footer />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
