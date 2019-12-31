import Head from 'next/head'
import ServicesMDX from '../../content/services.mdx'
import React from 'react';
import Subnav from './subnav';
import { Section, SectionTitle, SectionBody, Paragraph } from '../../components/AppStyles'

class ServicesContainer extends React.Component {
  render() {
    return (
      <Section topcolor="logoGreen">
        <Head>
          <title>Services || Dynamic Lymphatics</title>
        </Head>
        <Subnav/>
        <React.Fragment>
        <SectionTitle>Services</SectionTitle>
        <SectionBody>
          <Paragraph>
            <ServicesMDX/>
          </Paragraph>
        </SectionBody>
      </React.Fragment>
      </Section>
    );
  }
}

export default ServicesContainer;
