import { useState } from 'react';
import { FibonacciHelper } from '../helper/fibonacciHelper'

export function FibonacciForm(props) {
  const [number, setNumber] = useState(0);
  const fSize = 10;
  const f = new FibonacciHelper();

  return (
    <div>
      Hello, {props.name}

      <input
        type='text'
        id='number'
        onChange={e => setNumber(Number(e.target.value))}
      />

      <button
        onClick={handleValidation}
      >
        Button
      </button>
      
      <span
        className='material-symbols-outlined'
      >
        Done
      </span>
    </div>
  );

  function handleValidation() {
    let numberRange = number < 1 || number > 50;
    let msg = '';

    if(isNaN(number) || numberRange) {
      msg = 'Please inform only numbers between 1-50';
    } else {
      msg = f.fibonacci(number, fSize);
    }

    console.log(msg);
  }
}