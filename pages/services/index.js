import Head from 'next/head'
import ServicesMDX from '../../content/services.mdx'
import React from 'react';
import PanelsSection from '../../components/Services/PanelsSection'
import Subnav from '../../components/Services/subnav';
import { Section, SectionTitle, SectionBody, Paragraph } from '../../components/AppStyles'

class ServicesContainer extends React.Component {
  render() {
    return (
      <Section topcolor="logoGreen">
        <Head>
          <title>Lymphatic Massage Services | Dynamic Lymphatics</title>
        </Head>
        <Subnav/>
        <SectionTitle>
          Services
        </SectionTitle>
        <SectionBody>
          <Paragraph>
            <ServicesMDX/>
          </Paragraph>
        </SectionBody>
        {/* <PanelsSection/> */}
      </Section>
    );
  }
}

export default ServicesContainer;
