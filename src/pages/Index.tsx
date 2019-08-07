import React, { FunctionComponent, useState } from 'react';

const Index: FunctionComponent<IProps> = ({}) => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>Index Pag</div>
      <button
        onClick={() => {
          setCount(count => count - 1);
        }}
      >
        subtract
      </button>
      <span>{count}</span>
      <button
        onClick={() => {
          setCount(count => count + 1);
        }}
      >
        add
      </button>
    </>
  );
};

interface IProps {}

export default Index;
