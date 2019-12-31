import LymphedemaMDX from '../../content/lymphedema.mdx'
import React from 'react';
import Subnav from '../../components/Services/subnav';
import { PropTypes } from 'prop-types';
import { Section, SectionTitle, SectionBody, Paragraph } from '../../components/AppStyles';
import appState from '../../components/appState'

class Lymphedema extends React.Component {
  render() {
    const info = appState.homePage.heroPanels[0];
    return (
      <Section topcolor="logoGreen">
       <Subnav/>
        <SectionTitle image={info.image}>{info.title}</SectionTitle>
        <SectionBody>
          <Paragraph>
            <LymphedemaMDX/>
          </Paragraph>
        </SectionBody>
      </Section>
    );
  }
};

Lymphedema.propTypes = {
  info: PropTypes.object
};

export default Lymphedema;
