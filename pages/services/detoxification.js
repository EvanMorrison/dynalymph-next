import MDXContent from '../../content/detoxification.mdx'
import React from 'react';
import Subnav from '../../components/Services/subnav';
import { PropTypes } from 'prop-types';
import { Section, SectionTitle, SectionBody, Paragraph } from '../../components/AppStyles';
import appState from '../../components/appState'

class ServiceTwo extends React.Component {
  render() {
    const info = appState.servicesPanels[4];
    return (
      <Section topcolor="logoGreen">
        <Subnav/>
        <SectionTitle image={info.image}>{info.title}</SectionTitle>
        <SectionBody>
          <Paragraph>
            <MDXContent/>
          </Paragraph>
        </SectionBody>
      </Section>
    );
  }
};

ServiceTwo.propTypes = {
  info: PropTypes.object
};

export default ServiceTwo;
