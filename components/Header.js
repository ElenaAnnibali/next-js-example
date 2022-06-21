import { css } from '@emotion/react';
import Link from 'next/link';

const headerStyles = css`
  padding: 8px 14px;
  background: #fff1ad;
  border-radius: 6px;
  display: flex;
  justify-content: right;
  gap: 10px;
  font-size: 20px;
  padding-right: 20px;
  font-family: 'Chakra Petch', sans-serif;

  a {
    text-decoration: none;
    color: #2e0800;
  }
`;

export default function Header() {
  return (
    <header css={headerStyles}>
      <div>
        <Link href="/">Home </Link>
        <Link href="/about">About </Link>
        <Link href="/math">Mathematic </Link>
        <Link href="/fruits">Fruits</Link>
        <Link href="/api-frontend-mathematic-list">List</Link>
        <Link href="/register">Register</Link>
        <Link href="/login">Login</Link>

        {/*
          This is how Next.js used to require
          links to be
          <Link href="/about">
            <a>About</a>
          </Link>
        */}
      </div>
    </header>
  );
}
