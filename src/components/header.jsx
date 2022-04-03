/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

const headerStyle = css`
  height: 60px;
  color: white;
  vertical-align: middle;
  background-color: #aaa;
  display: flex;
  justify-content: space-between;
`;

const headerTopStyle = css`
  line-height: 20px;
  margin-left: 15px;
  cursor: pointer;
`;
const headerLists = css`
  display: flex;
  justify-content: center;
  text-decoration: none;
`;

const headerListItem = css`
  padding: 10px;
  fontsize: 1.3rem;
  line-height: 40px;
  border-left: solid 1px;
  cursor: pointer;
  text-decoration: none;
  color: white;
  &:hover {
    transition: 0.3s;
    background-color: #bbb;
    opacity: 0.5;
  }
`;

const Header = (props) => {
  return (
    <header css={headerStyle}>
      <h2 css={headerTopStyle}>{props.title}</h2>
      <nav css={headerLists}>
        <Link to="/count-app">
          <li css={headerListItem}>Count App</li>
        </Link>
        <Link to="/content">
          <li css={headerListItem}>Contents</li>
        </Link>
        <Link to="/setting">
          <li css={headerListItem}>Posts</li>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
