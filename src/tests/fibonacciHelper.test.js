import chai from 'chai';
const assert = chai.assert;

import { FibonacciHelper } from '../helper/fibonacciHelper'

describe('fibonacciHelper Class', function() {
  describe('Valid inputs', function() {
    it('Input 2: expected true', function() {
      const f = new FibonacciHelper();
      const received = f.Fibonacci(2, 10);
      const expected = true;

      assert.equal(received, expected);
    })
  });

  describe('Invalid inputs', function() {
    it('Input 4: expected false', function() {
      const f = new FibonacciHelper();
      const received = f.Fibonacci(4, 10);
      const expected = false;

      assert.equal(received, expected);
    })
  });
});