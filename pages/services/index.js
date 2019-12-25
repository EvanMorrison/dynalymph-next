import content from '../../public/content/services.md'
import React from 'react';
import Link from "next/link"
import styled from '@emotion/styled';
import { Section, SectionTitle, SectionBody, Paragraph } from '../../components/AppStyles'
import ReactMarkdown from 'react-markdown'
import appState from '../../components/appState'

export const StyledList = styled.ul`
  list-style: none;
  margin-top: 40px;

  li {
    display: inline-block;
    margin-right: 5px;
    font-size: 18px;
    &:first-of-type { color: ${props => props.theme.logoGreen}; }
    &:nth-of-type(2) { color: ${props => props.theme.logoGreen}; }
    &:last-of-type { color: ${props => props.theme.logoGreen}; }
    &.active { text-decoration: underline; }

    @media (max-width: 540px) {
      display: block;
    }
  }
`;

class ServicesContainer extends React.Component {
  render() {
    const props = appState.homePage.heroPanels;
    return (
      <Section topcolor="logoGreen">
        <nav>
          <StyledList>
            <li><Link href={`/services/${props[0].routeName}`}><a>{props[0].title} | </a></Link></li>
            <li><Link href={`/services/${props[1].routeName}`}><a>{props[1].title} | </a></Link></li>
            <li><Link href={`/services/${props[2].routeName}`}><a>{props[2].title}</a></Link></li>
          </StyledList>
        </nav>
        <React.Fragment>
        <SectionTitle>Services</SectionTitle>
        <SectionBody>
          <Paragraph>
            <ReactMarkdown source={content} escapeHtml={false}/>
          </Paragraph>
        </SectionBody>
      </React.Fragment>
      </Section>
    );
  }
}

export default ServicesContainer;
