import React from 'react';
import Head from 'next/head'
import MDXContent from '../../content/lymphaticSystem.mdx'
import Subnav from '../../components/About/subnav'
import { Section } from '../../components/AppStyles'

const LymphaticSystem = () => (
  <>
  <Head>
    <title>Lymphatic System | Dynamic Lymphatics</title>
  </Head>
  <Section
    nav={<Subnav/>}
    image="/assets/woman-lymphatic-system-full-body.png"
    title="The Lymphatic System"
    content={<MDXContent/>}
  />
  </>
)

export default LymphaticSystem
