import { css } from '@emotion/react';
import Head from 'next/head';
import Link from 'next/link';

const mainStyles = css`
  font-family: 'Righteous', cursive;
  text-align: center;
  margin: 0;
  font-size: 40px;
  padding-top: 40px;

  a {
    text-decoration: none;
    color: #05d6a5;
  }
`;

export default function About() {
  return (
    <>
      <Head>
        <title>About Page</title>
        <meta name="description" content="About the app" />
      </Head>
      <main css={mainStyles}>
        {/* Link is the next.js link that subsitute the a tag
        sometimes you want to use the a tag, but for most cases you'll use Link */}
        <Link href="/about">About</Link>
      </main>
    </>
  );
}
