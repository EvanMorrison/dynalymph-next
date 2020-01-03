import React from 'react';
import Head from 'next/head'
import MDXContent from '../../content/services.mdx'
import Subnav from '../../components/Services/subnav';
import { Section } from '../../components/AppStyles'

const ServicesContainer = () => (
  <>
    <Head>
      <title>Lymphatic Massage Services | Dynamic Lymphatics</title>
    </Head>
    <Section
      topcolor="logoGreen"
      nav={<Subnav/>}
      title="Services"
      content={<MDXContent/>}
    />
  </>
);
  
export default ServicesContainer;
