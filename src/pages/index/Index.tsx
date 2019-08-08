import React, { FunctionComponent } from 'react';
import Img from '@images/apple.jpg';
import Button from '@components/Button';
import useCounter from '@hooks/useCounter';

const Index: FunctionComponent<IProps> = ({}) => {
  const { count, dec, inc } = useCounter(0);

  return (
    <>
      <div>Index Page</div>
      <img src={Img} alt="" width={100} height={100} />
      <Button onClick={dec} value="subtract" />
      <span>{count}</span>
      <Button onClick={inc} value="add" />
    </>
  );
};

interface IProps {}

export default Index;
