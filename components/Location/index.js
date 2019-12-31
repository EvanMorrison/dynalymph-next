import React from 'react';
import Map from './Map';
import styled from '@emotion/styled';
import { rgba } from 'polished';
import { Row, Column } from '../AppStyles';

const LocationWrapper = styled(Row)`
  @media (max-width: 426px) {
    padding-top: 80px;
  }

  min-height: 700px;
  border-radius: 90% 0 0 0 / 150px 0 0 0;
  border-top: 12px solid ${props => rgba(props.theme.logoGreen, 0.8)};
  background-image:
    linear-gradient(
      to bottom,
      ${props => rgba(props.theme.logoGreen, 0.5)} 67%,
      ${props => rgba(props.theme.logoGreen, 0.2)}
    ),
    url(/assets/images/relaxation-686392_1080x720.jpg);
  background-size: cover;
`;

const SectionHeading = styled.h1`
  font-family: ${props => props.theme.headingFont};
  text-align: center;
  margin-bottom: 30px;
`;

class LocationComponent extends React.Component {
  render() {
    return (
      <LocationWrapper>
        <Column >
          <SectionHeading>Where to Find Us</SectionHeading>
          <div css={{height: 80, textAlign: "center"}}>
            We are located in north Scottsdale just off the 101 on Bell Rd.<br/>Treatments are by appointment only, please text or call 310-283-9382
          </div>
          <Map />
        </Column>
      </LocationWrapper>
    );
  }
}

export default LocationComponent;
