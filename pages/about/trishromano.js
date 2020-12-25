import React from 'react';
import Head from 'next/head';
import MDXContent from '../../content/about.mdx';
import Subnav from '../../components/About/subnav';
import appdata from '../../components/appState';
import { SectionStyle, SectionTitle, SectionBody, Paragraph } from '../../components/AppStyles';
import { css } from '@emotion/core';

const AboutComponent = () => {
  return (
    <SectionStyle topcolor='logoGreen'>
      <Head>
        <title>About | Dynamic Lymphatics</title>
      </Head>
      <Subnav />
      <SectionTitle title='About Trish Romano' />
      <SectionBody>
        <img
          src={appdata.trishPortrait}
          alt='Trish Romano, CLT'
          css={css`
            float: left;
            margin: 0 20px 0 0;
            width: 170px;

            @media (max-width: 426px) {
              width: 120px;
            }
          `}
        />
        <Paragraph>
          <MDXContent />
        </Paragraph>
      </SectionBody>
    </SectionStyle>
  );
};

export default AboutComponent;
