import { useState } from 'react';
import Button from './button';

function CountSection() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(new Date().getTime());
  }

  return (
    <div>
      <Button callFunc={handleClick} callCount={count}/>
      <Button callFunc={handleClick} callCount={count}/>
    </div>
  );

}

export default CountSection;