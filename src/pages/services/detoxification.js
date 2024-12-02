import React from 'react';
import Head from 'next/head';
import MDXContent from '../../content/detoxification.mdx';
import Subnav from '../../components/Services/subnav';
import { Section } from '../../components/AppStyles';

const Detoxification = () => (
  <>
    <Head>
      <title>Detoxification | Lymphatic Massage Services | Dynamic Lymphatics</title>
    </Head>
    <Section topcolor='logoGreen' nav={<Subnav />} title='Detoxification' content={<MDXContent />} />
  </>
);

export default Detoxification;
