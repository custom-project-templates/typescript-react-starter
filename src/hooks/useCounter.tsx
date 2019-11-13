import { useState } from 'react';

interface UseCounterReturn {
  count: number;
  inc: () => void;
  dec: () => void;
}
function useCounter(init: number): UseCounterReturn {
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

export default useCounter;
