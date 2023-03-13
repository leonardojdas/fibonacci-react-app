export class FibonacciHelper {
  // TODO: add comment
  loadFibonacci(fLength) {
    const fArray = [...Array(fLength).keys()].reduce((acc, i) => {
      if(i > 1) {
        acc.push(acc[i - 2] + acc[i - 1]);
      } else {
        acc.push(i);
      }
  
      return acc;
    }, []);
  
    return fArray;
  }
  
  // TODO: add comment
  Fibonacci(n, size) {
    const fArray = this.loadFibonacci(size);

    return fArray.includes(n);
  }
}