import React from 'react';
import styled from '@emotion/styled';
import { rgba } from 'polished';

import { Row, Column } from '../AppStyles';

const FooterWrapper = styled(Row)`
  height: 120px;
  width: 100%;
  background: ${props => rgba(props.theme.primary, 0.8)};
  align-content: center;
  justify-content: space-between;

  div {
    flex: 1;
    display: flex;
    margin: auto;
    max-width: 1280px;
    justify-content: flex-start;

    span {
      margin-right: 30px;
      color: ${() => rgba('#FFFFFF', 0.4)};
    }
  }
`;

const Footer = () => (
  <FooterWrapper>
    <div>
      <Column>
        <Row>
          <span>&copy;{new Date().getFullYear()}</span>
          <span>Dynamic Lymphatics, LLC</span>
        </Row>
      </Column>
    </div>
  </FooterWrapper>
);

export default Footer;
