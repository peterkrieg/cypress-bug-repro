import React, { useState } from 'react';
import { Button } from './Button';

export function App() {
  const [count, setCount] = useState(0);

  const human = { alive: true };

  return (
    <div>
      <Button onClick={() => setCount(count + 1)} label="increment" />
      <p>count: {count} </p>
    </div>
  );
}
