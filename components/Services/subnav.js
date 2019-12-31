import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'
import appState from '../appState'

const Subnav = props => {
  const StyledList = styled.ul`
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
  const [p1, p2, p3] = appState.homePage.heroPanels;
  return(
    <nav>
      <StyledList>
        <li><Link href={`/services/${p1.routeName}`}><a className="styled-link">{p1.title} | </a></Link></li>
        <li><Link href={`/services/${p2.routeName}`}><a className="styled-link">{p2.title} | </a></Link></li>
        <li><Link href={`/services/${p3.routeName}`}><a className="styled-link">{p3.title}</a></Link></li>
      </StyledList>
    </nav>
  )
}
export default Subnav
