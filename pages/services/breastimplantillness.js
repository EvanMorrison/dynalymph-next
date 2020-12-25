import React from 'react';
import Head from 'next/head';
import MDXContent from '../../content/breastImplantIllness.mdx';
import Subnav from '../../components/Services/subnav';
import { Section } from '../../components/AppStyles';

const BreastImplantIllness = () => (
  <>
    <Head>
      <title>Breast Implant Illness | Lymphatic Massage Services | Dynamic Lymphatics</title>
    </Head>
    <Section topcolor='logoGreen' nav={<Subnav />} title='Breast Implant Illness' content={<MDXContent />} />
  </>
);

export default BreastImplantIllness;
