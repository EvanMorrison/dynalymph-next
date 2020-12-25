import React from 'react';
import Head from 'next/head';
import MDXContent from '../../content/lipedema.mdx';
import Subnav from '../../components/Services/subnav';
import { Section } from '../../components/AppStyles';

const Lipedema = () => (
  <>
    <Head>
      <title>Lipedema | Lymphatic Massage Services | Dynamic Lymphatics</title>
    </Head>
    <Section topcolor='logoGreen' nav={<Subnav />} title='Lipedema' content={<MDXContent />} />
  </>
);

export default Lipedema;
