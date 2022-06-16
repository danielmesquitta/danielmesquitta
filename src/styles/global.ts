import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

    &:focus {
      outline: 0;
    }
  }

  html {
    min-height: 100%;
    overflow-x: hidden;
    position: relative;
    scroll-behavior: smooth;
  }

  body {
    overflow-x: hidden;
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-font-smoothing: antialiased !important;
    background: ${({ theme }) => theme.colors.gray._000};
  }

  body, input, textarea, button, a, a:visited, h1, h2, h3, h4, h5, h6, p {
    font-size: ${({ theme }) => theme.typography.size.p};
    font-family: ${({ theme }) => theme.typography.family};
    font-weight: ${({ theme }) => theme.typography.weight.regular};
    color: ${({ theme }) => theme.colors.gray._400};
  }

  input, textarea, button {
    border: 0;
    background-color: transparent;
  }

  a, a:visited, button {
    text-decoration: none;
    cursor: pointer;
  }

  ul {
    list-style: none;
  }
`;

export default GlobalStyle;
