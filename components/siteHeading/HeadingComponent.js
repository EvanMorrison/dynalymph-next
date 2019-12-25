import React from 'react';
import styled from '@emotion/styled';
import { PropTypes } from 'prop-types';
import { Column } from '../AppStyles';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 150px;
  max-width: 1280px;
  margin: 0 auto;
`;

const Brand = styled.div`
  position: fixed;
  opacity: ${props => (props.position === 1) ? 0 : 1};
  min-width: 7em;
  margin-left: 110px;
  z-index: -1;
  transition: all 0.2s ease-out;

  @media (min-width: 550px) {
    transform-origin: -100px top;
    transform:
      scale(${props => 1 - props.position > 0.75 ? 1 - props.position : 0.75})
      translateY(${props => -23 * (props.position)}px)
      translateX(${props => -30 * (props.position)}px);
  }

  @media (max-width: 549px) {
    transform:
      scale(${props => 1 - props.position > 0.85 ? 1 - props.position : 0.85})
      translateY(${props => -40 * (props.position)}px);
    margin-left: 2%;
    font-size: 80%;

    &:after {
      width: 65px;
      left: -65px;
    }
  }
`;

const BrandName = styled.h1`
  font-family: ${props => props.theme.titleFont};
  font-size: 4em;
`;

const Tagline = styled.h3`
  font-family: ${props => props.theme.bodyFont};
  font-size: 1.1em;
`;

class HeadingComponent extends React.Component {
  render() {
    return (
      <StyledWrapper>
        <Column>
          <Brand position={this.props.position}>
            <BrandName><em>Dynamic Lymphatics</em></BrandName>
            <Tagline>Lymphatic Drainage Therapy</Tagline>
          </Brand>
        </Column>
      </StyledWrapper>
    );
  }
}

HeadingComponent.propTypes = {
  position: PropTypes.number
};

export default HeadingComponent;
