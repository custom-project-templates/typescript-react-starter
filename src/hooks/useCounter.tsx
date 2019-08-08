import { useState } from 'react';

function useCounter(init: number): IUseCounterResult {
  const [count, setCount] = useState(init);
  function inc(): void {
    setCount(count => count + 1);
  }
  function dec(): void {
    setCount(count => count - 1);
  }
  return {
    count,
    inc,
    dec
  };
}
interface IUseCounterResult {
  count: number;
  inc: () => void;
  dec: () => void;
}
export default useCounter;
