import Footer from './footer';
import Head from 'next/head'
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
        <Head>
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-112343025-1"></script>
          <script dangerouslySetInnerHTML={{__html:
              `window.dataLayer = window.dataLayer || [];
              function gtag(){ dataLayer.push(arguments); }
              gtag('js', new Date());
              gtag('config', 'UA-112343025-1');`}}/>
          <meta charset="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no"/>
          <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
          <meta name="theme-color" content="#000000"/>
          <meta name="description" content="Dynamic Lymphatics provides lymphatic drainage therapy."/>
          <meta name="description" content="lymphatic massage"/>
          <meta name="description" content="Trish Romano, CLT has over 17 years experience helping clients of all types, from hard training athletes, to office warriors, to those facing serious illness."/>
          <meta name="description" content="Lymphatic Massage Lymphatic Drainage Therapy"/>
          <meta name="description" content="Best lymphatic drainage therapy in Scottsdale Arizona"/>
        </Head>
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
