import { FibonacciHelper } from '../helper/fibonacciHelper'

export function FibonacciForm(props) {
  const fSize = 10;
  const a = new FibonacciHelper();
  const b = a.Fibonacci(2, fSize);

  console.log(b);

  return (
    <div>
      Hello, {props.name}

      <input type='text' />
      <button>Button</button>
      <span className='material-symbols-outlined'>done</span>
    </div>
  );
}