import React from 'react';
import Head from 'next/head';
import MDXContent from '../../content/lymphedema.mdx'
import Subnav from '../../components/Services/subnav';
import { Section } from '../../components/AppStyles';

const Lymphedema = () => (
  <>
    <Head>
      <title>Lymphedema | Lymphatic Massage Services | Dynamic Lymphatics</title>
    </Head>
    <Section
      topcolor="logoGreen"
      nav={<Subnav/>}
      title="Lymphedema"
      content={<MDXContent/>}
    />
  </>
);

export default Lymphedema;
