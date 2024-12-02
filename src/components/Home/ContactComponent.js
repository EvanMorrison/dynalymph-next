import React from 'react';
import Welcome from './welcome.mdx';
import appdata from '../appState';
import Link from 'next/link';
import styled from '@emotion/styled';
import { Row, Column } from '../AppStyles';

const ContactSection = styled(Row)`
  flex-flow: wrap;
  position: relative;
  min-height: 500px;
  width: 95%;
  max-width: 1280px;
  margin: 20px auto;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 786px) {
    flex-direction: column;
    justify-content: flex-end;
    align-content: flex-end;
    align-items: flex-start;
  }

  @media (min-width: 768px) and (max-width: 1439px) {
    width: 80%;
  }

  * {
    transition: all 0.3s ease-out;
  }
`;

const Portrait = styled.img`
  display: block;
  flex-basis: 150px;
  width: 150px;
  height: 200px;
  margin-right: 30px;
  border-radius: 5px;
`;

const Headline = styled.div`
  @media (max-width: 500px) {
    font-size: 1em;
  }

  @media (min-width: 501px) and (max-width: 768px) {
    font-size: 1.125em;
  }

  font-size: 1.25em;
  font-weight: 300;
`;

const Name = styled.div`
  @media (max-width: 500px) {
    font-size: 1.9em;
  }

  @media (min-width: 501px) and (max-width: 768px) {
    font-size: 2.5em;
  }

  font-size: 3.2em;

  strong {
    font-weight: 700;
  }
`;

const mdxStyle = theme => ({
  fontSize: '1.15rem',
  fontWeight: 300,
  h1: {
    fontSize: '3rem',
    fontFamily: theme.titleFont,
    fontWeight: 500,
  },
  hr: {
    borderColor: '#083',
    borderWidth: 0.5,
    marginTop: 6,
  },
  'p:first-of-type, p:last-of-type': {
    margin: '50px 0',
  },
  'p, ul': {
    lineHeight: '1.5em',
    maxWidth: '38em',
  },
  '@media (max-width: 667px)': {
    h1: {
      fontSize: '2.5rem',
    },
  },
});

const ContactComponent = () => (
  <ContactSection>
    <div css={theme => [{ marginBottom: 50, flex: '0 0 100%' }, mdxStyle(theme)]}>
      <Welcome />
    </div>
    <div
      id='announcement'
      css={{ flex: '0 0 100%', marginBottom: 30, border: '3px solid #f00', borderRadius: 3, padding: 12 }}
    >
      <h3>We have relocated to Utah!</h3>
      <p>
        If you live in the greater Salt Lake Valley area and would like to learn more about the treatment we offer,
        please call 310-283-9382.
      </p>
    </div>
    <Portrait src={appdata.trishPortrait} alt='Trish Romano, CLT' />
    <Column>
      <Headline>Founder & Principal Care Provider</Headline>
      <Name>
        <strong>Trish Romano</strong>, CLT LMT
      </Name>
      <Headline>
        <table>
          <tbody>
            <tr>
              <td>
                <i className='icon-phone'>phone</i>
              </td>
              <td css={{ paddingLeft: '12px' }}>310-283-9382</td>
            </tr>
            <tr>
              <td>
                <i className='icon-mail_outline'>mail_outline</i>
              </td>
              <td css={{ paddingLeft: '12px' }}>
                <a href='mailto:trish@mt4w.com'>trish@mt4w.com</a>
              </td>
            </tr>
            <tr>
              <td>
                <i className='icon-pin_drop'>pin_drop</i>
              </td>
              <td css={{ paddingLeft: '12px' }}>224 S Main Street, Suite 205</td>
            </tr>
            <tr>
              <td>
                <i></i>
              </td>
              <td css={{ paddingLeft: '12px' }}>
                Centerville, UT 84014
                <br />
                Treatments by appointment only
              </td>
            </tr>
          </tbody>
        </table>
      </Headline>
    </Column>
    <div css={{ margin: '30px 0 80px', flex: '0 0 100%' }}>
      Learn more about Trish on the{' '}
      <Link href='/about' legacyBehavior>
        <span css={{ color: '#00E', cursor: 'pointer' }}>
          <a>About</a>
        </span>
      </Link>{' '}
      page
    </div>
  </ContactSection>
);

export default ContactComponent;
