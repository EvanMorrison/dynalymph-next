import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const HomeSection = styled.div`
  height: calc(100vh - 50px);
  position: relative;
  display: flex;
  flex-direction: row;
  padding: 80px 0 180px;
  background: transparent;
  justify-content: center;

  :after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;

    /* opacity: 0.3; */
    z-index: -1;
    background-image: url(/assets/rocky-stream-1280x853.jpeg);
    background-repeat: no-repeat;
    background-position: center center;

    /* background-attachment: fixed; */
    background-size: cover;
    border-radius: 100% 0 0 0/ 100px 0 0 0;
    border-top: 12px solid ${props => props.theme.logoGreen};

    /* border-bottom: 12px solid ${props => props.theme.logoBlue}; */
  }

  @media screen and (max-width: 1023px) {
    flex-direction: column;
    align-items: center;
    width: 100vw;
  }
`;

const Mask = styled.div`
  position: absolute;
  bottom: -115px;
  background: #FFFFFF;
  height: 100px;
  width: 100%;
  border-top: 12px solid ${props => props.theme.logoGreen};
  border-radius: 100% 0 0 0/ 100px 0 0 0;
`;

const subheadBlock = css`
  position: absolute;
  width: 800px;
  max-width: 100%;
  height: 100px;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 1.3s ease-in-out;
  border-radius: 30% 5px 30% 5px / 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 900px) {
    height: 70px;
  }
`;

class HomeComponent extends React.Component {
  state = {
    enteringOne: false,
    enteringTwo: false,
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({enteringOne: true});
    });
    setTimeout(() => {
      this.setState({enteringTwo: true});
    }, 750);
  }

  render() {
    let one = this.state.enteringOne ? '25%' : '-800px';
    let two = this.state.enteringTwo ? '25%' : '-800px';
    const h2Style = css`
      text-align: center;
      font-weight: 300;
      color: #FFFFFF;

      @media screen and (max-width: 500px) {
        font-size: 12px;
        font-weight: 100;
      }
    `;
    return (
      <React.Fragment>
        <Mask/>
        <HomeSection>
          <div css={[subheadBlock, css`
            top: 15vh;
            right: ${one};

            @media screen and (max-width: 900px) {
              right: ${one === '25%' ? 0 : '-800px'};
            }
          `]}>
            <h2 css={h2Style}>The Lymphatic system maintains<br/> the dynamic balance of fluid in your body</h2>
          </div>
          <div css={[subheadBlock, css`
            top: 35vh;
            left: ${two};

            @media screen and (max-width: 900px) {
              left: ${two === '25%' ? 0 : '-800px'};
            }
          `]}>
            <h2 css={h2Style}>Lymphatic fluid carries immune<br/> cells into, and by-products out of, your cells</h2>
          </div>
          <div css={[subheadBlock, css`
            top: 55vh;
            right: ${two};

            @media screen and (max-width: 900px) {
              right: ${two === '25%' ? 0 : '-800px'};
            }
          `]}>
            <h2 css={h2Style}>Manual Lymphatic Drainage is a hands-on therapy<br/> for stimulation and support of these vital processes</h2>
          </div>
        </HomeSection>
      </React.Fragment>
    );
  }
};

export default HomeComponent;
