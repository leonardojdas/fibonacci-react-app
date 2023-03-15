import { useState } from 'react';
import { FibonacciHelper } from '../helper/fibonacciHelper'

export function FibonacciForm() {
  const [number, setNumber] = useState(0);
  const fSize = 10;
  const f = new FibonacciHelper();

  return (
    <div className='wrapper'>

      <div className='container'>
        <div className='title'>
          Fibonacci Checker
        </div>

        <div className='form-floating'>
          <input
            type='text'
            id='number'
            className='form-control'
            placeholder='placeholder'
            onChange={e => setNumber(Number(e.target.value))}
          />
          <label htmlFor='number'>Number</label>
        </div>

        <div className='wrapper-content'>
          <button
            onClick={handleValidation}
            className='btn btn-primary'
          >
            Is Fibonacci?
          </button>
        </div>

        <div className='wrapper-content'>
          <span
            id='result'
            className=''
          ></span>
        </div>
      </div>

    </div>
  );

  /**
   * Validates the value informed, displaying a proper message to the client
   * 
   * @param {void}
   * @returns {void}
   */
  function handleValidation() {
    const numberOutRange = number < 1 || number > 50;
    const result = document.querySelector('#result');

    result.classList.remove('material-icons');
    result.classList.remove('valid');
    result.classList.remove('invalid');

    if(isNaN(number) || numberOutRange) {
      result.innerHTML = 'Please inform only numbers between 1-50';
    } else {
      result.classList.add('material-icons');

      if(f.fibonacci(number, fSize)) {
        result.classList.add('valid');
        result.innerHTML = 'check';
      } else {
        result.classList.add('invalid');
        result.innerHTML = 'clear';
      }
    }
  }
}