import React from 'react';
import Head from 'next/head';
import MDXContent from '../../content/wellness.mdx';
import Subnav from '../../components/Services/subnav';
import { Section } from '../../components/AppStyles';

const Wellness = () => (
  <>
    <Head>
      <title>Wellness | Lymphatic Massage Services | Dynamic Lymphatics</title>
    </Head>
    <Section topcolor='logoGreen' nav={<Subnav />} title='Wellness' content={<MDXContent />} />
  </>
);

export default Wellness;
