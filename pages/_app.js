import { useEffect } from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { Global, css } from '@emotion/react';
import { DefaultSeo } from 'next-seo';
import { AuthProvider } from '@/lib/auth';
import { customTheme } from '@/styles/theme';
import { usePanelbear } from '@panelbear/panelbear-nextjs';

import SEO from '../next-seo.config';

const GlobalStyle = ({ children }) => {
  return (
    <>
      <CSSReset />
      <Global
        styles={css`
          html {
            min-width: 360px;
            scroll-behavior: smooth;
            background-color: #edf2f7;
          }

          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
        `}
      />
      {children}
    </>
  );
};

const App = ({ Component, pageProps }) => {
  usePanelbear(process.env.NEXT_PUBLIC_PANELBEAR_SITE_ID);
  return (
    <ChakraProvider theme={customTheme}>
      <AuthProvider>
        <DefaultSeo {...SEO} />
        <GlobalStyle />
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
};

export default App;

// Router.events.on('routeChangeComplete', () => {
//   Fathom.trackPageview();
// });
