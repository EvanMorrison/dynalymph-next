import appdata from '../components/appState';
import AboutMDX from '../content/about.mdx';
import Head from 'next/head'
import React from 'react';
import { css } from '@emotion/core';
import { SectionStyle, SectionTitle, SectionBody, Paragraph } from '../components/AppStyles';

const AboutComponent = (props) => {
  return (
    <SectionStyle topcolor="logoGreen">
      <Head>
        <title>About | Dynamic Lymphatics</title>
      </Head>
      <SectionTitle title="About"/>
      <SectionBody>
        <img src={appdata.trishPortrait} alt="Trish Romano" css={css`
          float: left;
          margin: 0 20px 0 0;
          width: 170px;

          @media (max-width: 426px) { width: 120px; }
        `}/>
        <Paragraph>
          <AboutMDX/>
        </Paragraph>
      </SectionBody>
    </SectionStyle>
  );
};

export default AboutComponent;
