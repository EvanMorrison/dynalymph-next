import SurgeriesMDX from '../../content/surgeries.mdx'
import React from 'react';
import Subnav from './subnav';
import { PropTypes } from 'prop-types';
import { Section, SectionTitle, SectionBody, Paragraph } from '../../components/AppStyles'
import appState from '../../components/appState'

const ServiceThree = () => {
  const info = appState.homePage.heroPanels[2];
  return (
    <Section topcolor="logoGreen">
      <Subnav/>
      <SectionTitle image={info.image}>{info.title}</SectionTitle>
      <SectionBody>
        <Paragraph>
          <SurgeriesMDX/>
        </Paragraph>
      </SectionBody>
    </Section>
  );
};

ServiceThree.propTypes = {
  info: PropTypes.object
};

export default ServiceThree;
