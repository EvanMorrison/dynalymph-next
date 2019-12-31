import React from 'react';
import Welcome from './welcome.mdx';
import appdata from '../appState'
import Link from 'next/link'
import styled from '@emotion/styled';
import { Row, Column, Paragraph } from '../AppStyles';

const ContactSection = styled(Row)`
  flex-flow: wrap;
  position: relative;
  min-height: 500px;
  width: 95%;
  max-width: 1280px;
  margin: 100px auto;
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

const mdxStyle = {
  fontSize: "1.15em",
  fontWeight: 300,
  h1: {
    color: "#083"
  },
  hr: {
    borderColor: "#083"
  },
  p: {
    lineHeight: "1.5em",
    maxWidth: "38em",
  }
};

const ContactComponent = () => (
  <ContactSection>
    <div css={[{marginBottom: 30, flex: "0 0 100%"}, mdxStyle]}>
      <Welcome/>
    </div>
    <Portrait src={appdata.trishPortrait} alt="Trish Romano, CLT"/>
    <Column>
      <Headline>
        Founder & Principal Care Provider
      </Headline>
      <Name>
        <strong>Trish Romano</strong>, CLT LMT
      </Name>
      <Headline>
        <table>
          <tbody>
            <tr><td><i className="icon-phone">phone</i></td><td css={{paddingLeft: '12px'}}>310-283-9382</td></tr>
            <tr><td><i className="icon-mail_outline">mail_outline</i></td><td css={{paddingLeft: '12px'}}><a href="mailto:trish@mt4w.com">trish@mt4w.com</a></td></tr>
            <tr><td><i className="icon-pin_drop">pin_drop</i></td><td css={{paddingLeft: '12px'}}>9815 East Bell Road, Suite 110</td></tr>
            <tr><td><i></i></td><td css={{paddingLeft: '12px'}}>Scottsdale, AZ 85260</td></tr>
          </tbody>
        </table>
      </Headline>
    </Column>
      <div css={{margin: "30px 0 80px", flex: "0 0 100%"}}>Learn more about Trish on the <Link href="/about"><span css={{color: "#00E", cursor: "pointer"}}><a>About</a></span></Link> page</div>
  </ContactSection>
);

export default ContactComponent;
