import React, { FunctionComponent, MouseEventHandler } from 'react';

const Button: FunctionComponent<IProps> = ({ value, onClick }) => {
  return <button onClick={onClick}>{value}</button>;
};

interface IProps {
  value: string;
  onClick: MouseEventHandler;
}

export default Button;
