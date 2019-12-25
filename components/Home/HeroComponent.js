import appState from '../appState';
import PanelComponent from './PanelComponent';
import React from 'react';
import styled from '@emotion/styled';
import { rgba } from 'polished';
import Router from 'next/router'
import {theme} from '../AppStyles'

const HeroSection = styled.div`
  position: relative;
  top: -85px;
  display: flex;
  flex-direction: row;
  padding: 80px 0 180px;
  background: transparent;
  justify-content: center;
  z-index: 1;

  :after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0.3;
    z-index: -1;
    background-image:
      linear-gradient(
        to bottom,
        ${props => rgba(props.theme.logoGreen, 0.5)} 67%,
        ${props => rgba(props.theme.logoGreen, 0.5)}
      ),
      url(/assets/images/background-1998454_980.jpg);
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: fixed;
    background-size: cover;
    border-radius: 100% 0 100% 0/ 100px 0 200px 0;
    border-top: 12px solid ${props => props.theme.logoGreen};
    border-bottom: 12px solid ${props => props.theme.logoGreen};
  }

  @media screen and (max-width: 1023px) {
    flex-direction: column;
    align-items: center;
    width: 100vw;
  }
`;

class HeroComponent extends React.Component {
  state = {
    panels: appState.homePage.heroPanels,
    routes: [appState.homePage.heroPanels[0].routeName, appState.homePage.heroPanels[1].routeName, appState.homePage.heroPanels[2].routeName]
  }

  panelClick = (event, i) => {
    Router.push(`/services/${this.state.routes[i]}`);
  }

  render() {
    const panels = this.state.panels;
    const colors = [theme.logoGreen, theme.logoGreen, theme.logoGreen];
    return (
      <HeroSection>
        {panels.map((p, i) => {
          return (<PanelComponent key={i} props={p} color={colors[i]} onClick={(e) => this.panelClick(e, i)}/>);
        })}
      </HeroSection>
    );
  }
};

export default HeroComponent;
