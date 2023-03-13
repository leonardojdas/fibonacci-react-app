import chai from 'chai';
const assert = chai.assert;
const expect = chai.expect;

import { FibonacciHelper } from '../helper/fibonacciHelper'
const f = new FibonacciHelper();

describe('FibonacciHelper Class', function() {
  describe('Valid inputs', function() {
    // TODO: add comment
    it('Method fibonacci - inputs: n=2, size=10: expected true (<n> IS part of the Fibonacci sequence)', function() {
      const received = f.fibonacci(2, 10);
      const expected = true;

      assert.equal(received, expected);
    });

    // TODO: add comment
    it('Method loadFibonacci - inputs: fLength=10: expected true (<fLength> is a valid number > 0 returning an array with 10 elements)', function() {
      const received = f.loadFibonacciSequence(10);
      const expected = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];

      expect(received).to.have.same.members(expected);
    });
  });

  describe('Invalid inputs', function() {
    // TODO: add comment
    it('Method fibonacci - inputs: n=4, size=10: expected false (<n> IS NOT part of the Fibonacci sequence)', function() {
      const received = f.fibonacci(4, 10);
      const expected = false;

      assert.equal(received, expected);
    });

    // TODO: add comment
    it('Method fibonacci - inputs: n=\'x\' size=10: expected false (<n> must be a valid number > 0)', function() {
      const received = f.fibonacci('x', 10);
      const expected = false;

      assert.equal(received, expected);
    });

    // TODO: add comment
    it('Method fibonacci - inputs: n=4, size=-1: expected false (<size> must be a valid number >= 0)', function() {
      const received = f.fibonacci(8, -1);
      const expected = false;

      assert.equal(received, expected);
    });
  });
});