import { css, Global } from '@emotion/react';

function MyApp({ Component, pageProps }) {
  return (
    <>
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
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
