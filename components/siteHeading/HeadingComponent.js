import React from 'react';
import styled from '@emotion/styled';
import { PropTypes } from 'prop-types';
import { Column } from '../AppStyles';
import { keyframes } from '@emotion/react';
import { useRouter } from 'next/router';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 150px;
  max-width: 1280px;
  margin: 0 auto;
`;

const Brand = styled.div`
  position: fixed;
  opacity: ${props => (props.position === 1 ? 0 : 1)};
  min-width: 7em;
  margin-left: 110px;
  z-index: -1;
  transition: all 0.2s ease-out;

  @media (min-width: 550px) {
    transform-origin: -100px top;
    transform: scale(${props => (1 - props.position > 0.75 ? 1 - props.position : 0.75)})
      translateY(${props => -23 * props.position}px) translateX(${props => -30 * props.position}px);
  }

  @media (max-width: 549px) {
    transform: scale(${props => (1 - props.position > 0.85 ? 1 - props.position : 0.85)})
      translateY(${props => -40 * props.position}px);
    margin-left: 2%;
    font-size: 70%;

    &:after {
      width: 65px;
      left: -65px;
    }
  }
`;

const BrandName = styled.h1`
  font-family: ${props => props.theme.titleFont};
  /* font-weight: 500; */
  font-size: 4em;
`;

const Tagline = styled.h3`
  font-family: ${props => props.theme.bodyFont};
  /* font-weight: 500; */
  font-size: 1.1em;
  padding-left: 0.7em;
`;

const covidAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const HeadingComponent = props => {
  const router = useRouter();

  const handleClickCovidNotice = () => {
    const notice = document.getElementById('covid');
    if (notice) {
      setTimeout(() => {
        notice.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      });
    } else {
      router.push('/');
      setTimeout(() => {
        handleClickCovidNotice();
      });
    }
  };

  return (
    <>
      <div
        css={{
          cursor: 'pointer',
          opacity: 0,
          animation: `${covidAnimation} 2s ease 2s forwards`,
          position: 'absolute',
          top: 0,
          width: '100%',
          zIndex: 100,
          textAlign: 'center',
          color: '#fff',
          background: '#f00',
          padding: 8,
          fontSize: '0.9em',
        }}
        onClick={handleClickCovidNotice}
      >
        CURRENTLY CLOSED DURING THE PANDEMIC <span css={{ fontSize: '0.8em' }}>(click for info)</span>
      </div>
      <StyledWrapper>
        <Column>
          <Brand position={props.position}>
            <BrandName>Dynamic Lymphatics</BrandName>
            <Tagline>Lymphatic Drainage Therapy</Tagline>
          </Brand>
        </Column>
      </StyledWrapper>
    </>
  );
};

HeadingComponent.propTypes = {
  position: PropTypes.number,
};

export default HeadingComponent;
