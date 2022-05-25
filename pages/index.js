import { css } from '@emotion/react';
import Head from 'next/head';
import Layout from '../components/Layout.js';

const h1Styles = css`
  font-family: 'Righteous', cursive;
  text-align: center;
  margin: 0;
  font-size: 40px;
  padding-top: 40px;
  color: #05d6a5;
`;

export default function Home() {
  return (
    <div>
      {/* layout wraps all pages */}
      <Layout>
        <Head>
          <title>Home page</title>
          <meta name="description" content="Dashboard for the application" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <h1 css={h1Styles}>Algebraic!</h1>
        </main>
      </Layout>
    </div>
  );
}
