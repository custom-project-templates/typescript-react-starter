import React, { FunctionComponent, useState } from 'react';

const Index: FunctionComponent<IProps> = ({}) => {
  const [count, setCount] = useState(0);
  return <>
    <div>Index Pag</div>
    <div>{count}</div>
    <button onClick={() => {setCount(count => count-1)}}> - </button>
    <button onClick={() => {setCount(count => count+1)}}> + </button>
  </>;
};

interface IProps {}

export default Index;
