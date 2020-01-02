import styled from '@emotion/styled';

// theme settings used with Emotion

export const theme = {
  primary: '#336633',
  primaryLt: 'rgb(200, 250, 200)',
  primaryText: 'rgba(0,0,0,.87)',
  contrastText: '#FFFFFF',
  logoBlue: '#43C7ED',
  logoOrange: '#FF7D09',
  logoGreen: '#66C368',
  titleFont: 'Bilbo Swash Caps',
  headingFont: 'Arimo',
  bodyFont: 'Arimo',
  menuFont: 'Arimo'
};

export const Row = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: center;
  flex: 1;
`;

export const RowCentered = styled(Row)`
  justify-content: center;
  align-content: center;
`;

export const Column = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  flex: 1;
`;

export const Section = styled(Column)`
  width: 100%;
  max-width: 1440px;
  overflow-x: hidden;
  min-height: calc(100vh - 270px);
  margin: 0 auto;
  padding: 50px 10%;
  border-radius: 100% 0 100% 0/ 100px 0 200px 0;
  ${props => props.topcolor && `border-top: 8px solid ${props.theme[props.topcolor]}`};
  ${props => props.bottomcolor && `border-bottom: 12px solid ${props.theme[props.bottomcolor]}`};
`;

const SectionTitleStyle = styled.h1`
  position: relative;
  font-family: ${props => props.theme.titleFont};
  /* font-weight: 500; */
  font-size: 3.3em;
  margin: 1em 0 1em;
  transition: all 0.2s ease-out;

  @media (max-width: 428px) {
    font-size: 2.5em;
  }

  @media (min-width: 428px) and (max-width: 667px) {
    font-size: 2.5em;
  }

  @media (min-width: 668px) and (max-width: 1023px) {
    font-size: 3em;
  }

  @media (max-width: 1023px) {
    &:after {
      position: relative;
      transform: translateY(0);
      display: block;
      left: -50px;
      margin-right: 0;
    }
  }
`;

export const Divider = styled.hr`
  border-color: #083;
  border-width: 0.5px;
  margin-top: 6px;
`;

export const SectionTitle = props => (
  <SectionTitleStyle>
    {props.children}
    <Divider/>
  </SectionTitleStyle>
);

export const SectionBody = styled.div`
  margin-bottom: 100px;
`;

export const Paragraph = styled.div`
  font-family: ${props => props.theme.textFont};
  font-size: 1.15em;
  font-weight: 300;
  line-height: 1.5em;
  max-width: 38em;
  text-align: justify;

  @media screen and (max-width: 667px) {
    text-align: left;
  }

  p {
    margin-top: 2em;

    &:first-of-type {
      margin-top: 0;
    }
  }
`;
