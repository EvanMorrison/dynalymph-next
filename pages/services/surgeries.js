import React from 'react';
import Head from 'next/head';
import MDXContent from '../../content/surgeries.mdx';
import Subnav from '../../components/Services/subnav';
import { Section } from '../../components/AppStyles';

const Surgeries = () => (
  <>
    <Head>
      <title>Pre & Post Surgical | Lymphatic Massage Services | Dynamic Lymphatics</title>
    </Head>
    <Section topcolor='logoGreen' nav={<Subnav />} title='Pre & Post Surgical' content={<MDXContent />} />
  </>
);

export default Surgeries;
