import appState from '../appState';
import PanelComponent from './PanelComponent';
import React from 'react';
import styled from '@emotion/styled';
import Router from 'next/router';
import { rgba } from 'polished';
import {theme} from '../AppStyles'

const ServicesPanels = styled.div`
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
    border-radius: 0 0 100% 0/ 100px 0 200px 0;
    border-top: 12px solid ${props => props.theme.logoGreen};
    border-bottom: 12px solid ${props => props.theme.logoGreen};
  }

  @media screen and (max-width: 1023px) {
    flex-direction: column;
    align-items: center;
    width: 100vw;
  }
`;

class PanelsSection extends React.Component {
  state = {
    panels: appState.servicesPanels,
    routes: appState.servicesPanels.map(p => p.routeName)
  }

  panelClick = (event, i) => {
    Router.push(`/services/${this.state.routes[i]}`);
  }

  render() {
    const panels = this.state.panels;
    const colors = [theme.logoGreen, theme.logoGreen, theme.logoGreen];
    return (
      <ServicesPanels>
        {panels.map((p, i) => {
          return (<PanelComponent key={i} props={p} color={colors[0]} onClick={(e) => this.panelClick(e, i)}/>);
        })}
      </ServicesPanels>
    );
  }
};

export default PanelsSection;
