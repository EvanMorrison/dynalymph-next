import React from 'react';
import styled from '@emotion/styled';
import { PropTypes } from 'prop-types';
import { rgba } from 'polished';
import { Column } from '../AppStyles';

const Panel = styled.div`
  display: flex;
  margin: 20px;
  border-radius: 10px;
  transition: all 0.4s ease-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.02);
  }

  @media screen and (max-width: 1099px) {
    flex: 0 0 30%;
    width: 90%;
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1100px) {
    flex: 0 0 30%;
    height: 80px;
  }
`;

const Subpanel = styled.div`
  position: relative;
  display: flex;
  margin-left: 30px;
  /* background: ${props => rgba(props.theme.primary, 0.7)}; */
  border-radius: 50px;
  /* box-shadow: 1px 1px 10px 10px ${props => rgba(props.theme.primary, 0.7)}; */
  &:hover {
    /* box-shadow: 4px 4px 6px ${props => rgba(props.theme.primary, 1)}; */
  }

  :after {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-radius: 50px;
    background: ${props => rgba(props.theme.primary, 0.7)};
    /* filter: drop-shadow(0 0 4px ${props => rgba(props.theme.primary, 1)}); */
  }
`;

const PanelHeading = styled.h2`
  width: 400px;
  height: 80px;
  line-height: 80px;
  font-family: ${props => props.theme.headingFont};
  font-size: 2em;
  text-align: left;
  padding-left: 30px;
  color: #000;
  /* text-shadow: 1px 1px #222244; */
  /* background-image: linear-gradient(to bottom, ${props => rgba(props.theme.primary, 0.4)}, ${props =>
    rgba(props.theme.primary, 0.4)} 10%, ${props => rgba(props.theme.primary, 0.5)} 90%); */
`;

const PanelImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 40px;

  @media screen and (max-width: 1099px) {
    max-height: 200px;
    min-width: auto;
    position: relative;
    display: block;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
`;

const PanelContent = styled(Column)`
  padding: 12px;
  height: 80px;
`;

const PanelText = styled.p`
  font-family: ${props => props.theme.bodyFont};
  font-size: 1.2em;
  font-weight: 300;
  opacity: 0.87;
  line-height: 1.5em;
`;

const PanelComponent = ({ props, color, onClick }) => (
  <Panel onClick={onClick}>
    <PanelImg src={props.image} alt={`${props.title} image`} />
    <Subpanel>
      <PanelHeading color={color}>
        <em>{props.title}</em>
      </PanelHeading>
      <PanelContent>
        <PanelText>{props.text} </PanelText>
      </PanelContent>
    </Subpanel>
  </Panel>
);

PanelComponent.propTypes = {
  color: PropTypes.string,
  image: PropTypes.string,
  onClick: PropTypes.func,
  props: PropTypes.object,
  subtitle: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string,
};

export default PanelComponent;
