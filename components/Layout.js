import { css } from '@emotion/react';
import Footer from './Footer';
import Header from './Header';

const divStyles = css`
  padding: 0 200px 500px 200px;
`;

export default function Layout(props) {
  return (
    <div>
      <Header />
      <div css={divStyles}>{props.children}</div>
      <Footer />
    </div>
  );
}
