import LymphedemaMDX from '../../content/lymphedema.mdx'
import React from 'react';
import Subnav from '../../components/Services/subnav';
import { PropTypes } from 'prop-types';
import { Section, SectionTitle, SectionBody, Paragraph } from '../../components/AppStyles';
import appState from '../../components/appState'

class Lymphedema extends React.Component {
  render() {
    const info = appState.servicesPanels[0];
    return (
      <Section topcolor="logoGreen">
       <Subnav/>
        <SectionTitle image={info.image}>
          {info.title}
        </SectionTitle>
        <SectionBody>
          <Paragraph>
            <div css={theme => ({h1: {marginTop: 50, fontStyle: "italic", fontWeight: "bold", fontFamily: theme.titleFont}})}>
              <LymphedemaMDX/>
            </div>
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
