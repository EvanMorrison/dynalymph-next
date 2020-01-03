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
  {/* <img src="/assets/images/lymphatic_system_blue_crop.png" css={{position: "absolute", right: 0, bottom: 150, opacity: 0.8}}/> */}
  <Section
    nav={<Subnav/>}
    title="The Lymphatic System"
    content={<MDXContent/>}
  />
  </>
)

export default LymphaticSystem
