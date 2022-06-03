import { css, Global } from '@emotion/react';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout.js';
import { getLocalStorage, setLocalStorage } from '../util/localStorage.js';

const cookieBannerStyles = (isOpen) => css`
  height: ${isOpen ? '25px' : 0};
  overflow: hidden;
  transition: all 200ms ease-in;
`;

function MyApp({ Component, pageProps }) {
  const [areCookiesAccepted, setAreCookiesAccepted] = useState(false);

  function cookieBannerButtonHandler() {
    // 2. set the value for the cookieBanner
    setLocalStorage('areCookiesAccepted', true);
    setAreCookiesAccepted(true);
  }

  // useEffect is only frontend
  useEffect(() => {
    // 1. we need to check if there is already a value for the cookie banner
    if (getLocalStorage('areCookiesAccepted')) {
      setAreCookiesAccepted(getLocalStorage('areCookiesAccepted'));
    }
  }, []);

  return (
    <div>
      <Global
        style={css`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: 'Chakra Petch', sans-serif;
          }

          * {
            box-sizing: border-box;
          }
        `}
      />
      <div css={cookieBannerStyles(!areCookiesAccepted)}>
        cookie banner{' '}
        <button
          onClick={() => {
            cookieBannerButtonHandler();
          }}
        >
          {[[], false, null, undefined]}
          yes
        </button>
      </div>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
