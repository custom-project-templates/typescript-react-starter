import { hot } from 'react-hot-loader/root';
import React, { FC } from 'react';
import Index from '~pages/index/Index';

interface Props {}
const App: FC<Props> = () => {
  return (
    <>
      <Index />
    </>
  );
};


export default hot(App);
