/* stylelint-disable */
import { css } from '@emotion/react';
import { rgba } from 'polished';

const globalStyle = theme => css`
  @import url('https://fonts.googleapis.com/css?family=Material+Icons|Arimo:900,700,500,400,300,100|Bilbo+Swash+Caps');

  :root {
    font-family: Arimo, sans-serif;
    font-size: 16px;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  p {
    margin: 1em 0;
  }

  p ~ ul {
    margin-left: 30px;
  }

  nav {
    text-decoration: none;
    color: inherit;
  }

  div a.styled-link:not([href^='mailto']) {
    text-decoration: none;
    color: inherit;
  }

  .active {
    border-bottom: 1px solid ${rgba(theme.primary, 0.7)};
  }

  [class^='icon-'],
  [class*=' icon-'] {
    /* use !important to prevent issues with browser extensions that change fonts */
    font-family: 'Material Icons' !important;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    font-size: 24px;
    color: ${rgba('#000000', 0.87)};

    /* Enable Ligatures ================ */
    letter-spacing: 0;
    -webkit-font-feature-settings: 'liga';
    -moz-font-feature-settings: 'liga=1';
    -moz-font-feature-settings: 'liga';
    -ms-font-feature-settings: 'liga' 1;
    font-feature-settings: 'liga';
    -webkit-font-variant-ligatures: discretionary-ligatures;
    font-variant-ligatures: discretionary-ligatures;

    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default globalStyle;
