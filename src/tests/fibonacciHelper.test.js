import chai from 'chai';
const assert = chai.assert;
const expect = chai.expect;

import { FibonacciHelper } from '../helper/fibonacciHelper'
const f = new FibonacciHelper();

describe('FibonacciHelper Class', function() {
  describe('Valid inputs (2 tests)', function() {
    it('#1 - Method fibonacci(n, size): received n=2, size=10; expected true (<n> is part of the Fibonacci sequence)', function() {
      const received = f.fibonacci(2, 10);
      const expected = true;

      assert.equal(received, expected);
    });

    it('#2 - Method loadFibonacci(fLength): received fLength=10; expected [0, 1, 2, ...] (<fLength> is a valid number > 0)', function() {
      const received = f.loadFibonacciSequence(10);
      const expected = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];

      expect(received).to.have.same.members(expected);
    });
  });

  describe('Invalid inputs (4 tests)', function() {
    it('#3 - Method fibonacci(n, size): received n=4, size=10; expected false (<n> is not part of the Fibonacci sequence)', function() {
      const received = f.fibonacci(4, 10);
      const expected = false;

      assert.equal(received, expected);
    });

    it('#4 - Method fibonacci(n, size): received n=\'x\' size=10; expected false (<n> must be a valid number > 0)', function() {
      const received = f.fibonacci('x', 10);
      const expected = false;

      assert.equal(received, expected);
    });

    it('#5 - Method fibonacci(n, size): received n=8, size=-1; expected false (<size> must be a valid number > 0)', function() {
      const received = f.fibonacci(8, -1);
      const expected = false;

      assert.equal(received, expected);
    });

    it('#6 - Method loadFibonacci(fLength): received fLength=-1; expected [] (<fLength> must be a number > 0)', function() {
      const received = f.loadFibonacciSequence(-1);
      const expected = [];

      expect(received).to.have.same.members(expected);
    });
  });
});