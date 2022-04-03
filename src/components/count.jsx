import { useState } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const countStyle = css`
  width: 50%;
  margin: 0 auto;
  text-align: center;
  color: #bbb;
`;

const buttonStyle = css`
  color: white;
  font-size: 1.6rem;
  border: 1px;
  background-color: #bbb;
  border-radius: 50%;
  line-height: 30px;
  width: 30px;
  height: 30px;
  padding: 0;
  margin-left: 15px;
  cursor: pointer;
  &:hover {
    color: #fff;
    background: #ddd;
  }
`;

export const Count = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div css={countStyle}>
      <h1>Counter</h1>
      <h2>カウント: {count}</h2>
      <button css={buttonStyle} onClick={increment}>
        +
      </button>
      <button css={buttonStyle} onClick={decrement}>
        -
      </button>
    </div>
  );
};
