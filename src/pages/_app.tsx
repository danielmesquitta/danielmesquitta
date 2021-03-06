import { Helmet } from 'react-helmet';

import { AppProps } from 'next/dist/next-server/lib/router/router';
import { ThemeProvider } from 'styled-components';

import * as styles from '~/styles';

const { GlobalStyle, ...theme } = styles;

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Helmet>
      <title>Daniel Mesquita | Resume</title>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  </>
);

export default App;
