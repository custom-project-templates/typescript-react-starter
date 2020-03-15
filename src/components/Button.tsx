import * as React from 'react';
import { FC, MouseEventHandler } from 'react';

interface Props {
  value: string;
  onClick: MouseEventHandler;
}
const Button: FC<Props> = ({ value, onClick }) => {
  return <button onClick={onClick}>{value}</button>;
};



export default Button;
