import React from 'react';
import Map from './Map';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { rgba } from 'polished';
import { Row, Column } from '../AppStyles';

const LocationWrapper = styled(Row)`
  @media (max-width: 426px) {
    padding-top: 80px;
  }

  min-height: 700px;
  border-radius: 90% 0 0 0 / 150px 0 0 0;
  border-top: 12px solid ${props => rgba(props.theme.logoGreen, 0.8)};
  :after {
    content: '';
    position: absolute;
    z-index: -2;
    height: calc(100% + 10px);
    width: 100%;
    top: -10px;
    left: 0;
    background-image: linear-gradient(${rgba("#045", 0.6)}, ${rgba("#045", 0.6)}), url(/assets/images/bubbles-2595227_1280.jpg);
    background-size: cover;
    filter: blur(2px) contrast(125%);
    border-radius: 90% 0 0 0 / 150px 0 0 0;
  }
`;

const SectionHeading = styled.h1`
  font-family: ${props => props.theme.headingFont};
  text-align: center;
  margin-bottom: 30px;
`;

const blurredWhiteBackground = css`
  position: relative;
  padding: 10px;
  color: #000;
  :after {
    content: '';
    position: absolute;
    z-index: -1;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.6);
    filter: blur(40px);
  }
`;

class LocationComponent extends React.Component {
  render() {
    return (
      <LocationWrapper>
        <Column >
          <SectionHeading><span css={blurredWhiteBackground}>Where to Find Us</span></SectionHeading>
          <div css={[{height: 80, maxWidth: 600, marginBottom: 20, textAlign: "center", alignSelf: "center"}, blurredWhiteBackground]}>
            We are located in north Scottsdale just off the 101 on Bell Rd.<br/>Treatments are by appointment only, please text or call 310-283-9382
          </div>
          <Map />
        </Column>
      </LocationWrapper>
    );
  }
}

export default LocationComponent;
