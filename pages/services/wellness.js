import content from '../../public/content/wellness.md'
import React from 'react';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link'
import { PropTypes } from 'prop-types';
import { SectionTitle, SectionBody, Paragraph } from '../../components/AppStyles';
import { StyledList } from './index'
import appState from '../../components/appState'

class ServiceTwo extends React.Component {
  render() {
    const props = appState.homePage.heroPanels;
    const info = props[1];
    return (
      <React.Fragment>
        <nav>
          <StyledList>
            <li><Link href={`/services/${props[0].routeName}`}><a>{props[0].title} | </a></Link></li>
            <li><Link href={`/services/${props[1].routeName}`}><a>{props[1].title} | </a></Link></li>
            <li><Link href={`/services/${props[2].routeName}`}><a>{props[2].title}</a></Link></li>
          </StyledList>
        </nav>
        <SectionTitle image={info.image}>{info.title}</SectionTitle>
        <SectionBody>
          <Paragraph>
            <ReactMarkdown source={content} escapeHtml={false}/>
          </Paragraph>
        </SectionBody>
      </React.Fragment>
    );
  }
};

ServiceTwo.propTypes = {
  info: PropTypes.object
};

export default ServiceTwo;
