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
        Is Fibonacci?
      </button>

      <span
        id='display'
        className='material-icons'
      ></span>

    </div>
  );

  function handleValidation() {
    let numberRange = number < 1 || number > 50;
    const display = document.querySelector('#display');

    if(isNaN(number) || numberRange) {
      display.innerHTML = '';
      alert('Please inform only numbers between 1-50');
    } else {
      if(f.fibonacci(number, fSize)) display.innerHTML = 'check';
      else display.innerHTML = 'clear';
    }
  }
}