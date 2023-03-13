export class FibonacciHelper {
  //
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
  
  //
  Fibonacci(n, size) {
    const fArray = this.loadFibonacci(size);

    return fArray.includes(n);
  }
}