import { css } from '@emotion/react';

const footerStyles = css`
  padding: 8px 14px;
  background: #fff1ad;
  border-radius: 6px;
  font-family: 'Chakra Petch', sans-serif;

  a {
    text-decoration: none;
    color: #2e0800;
  }
`;

export default function Footer() {
  return (
    <footer css={footerStyles}>
      <a href="/" target="_blank" rel="noopener noreferrer">
        Powered by your favorite apple pie <span>🥧</span>
      </a>
    </footer>
  );
}
