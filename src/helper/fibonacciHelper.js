export class FibonacciHelper {
  /**
   * Creates a Fibonacci sequence array with <size> elements.
   * 
   * @param {number} <size> an integer greater than 0
   * @returns {array} <fArray> an array with the size of <size> elements
   */
  loadFibonacciSequence(size) {
    let fArray = [];

    try {
      fArray = [...Array(size).keys()].reduce((acc, i) => {
        if(i > 1) {
          acc.push(acc[i - 2] + acc[i - 1]);
        } else {
          acc.push(i);
        }
    
        return acc;
      }, []);
    } catch(err) {
      console.log(`Error loading the sequence, message: ${err}`);
    }

    return fArray;
  }
  
  /**
   * Checks if the given number is part of the Fibonacci sequence
   *
   * @param {number} <n> an integer in the range [1-50]
   * @param {number} <size> an integer greater than 0
   * @returns {boolean} <true> if the number if part of Fibonacci sequence and <false> if not
   */
  fibonacci(n, size) {
    const fArray = this.loadFibonacciSequence(size);

    return fArray.includes(n);
  }
}