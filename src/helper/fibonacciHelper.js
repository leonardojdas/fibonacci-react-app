export class FibonacciHelper {
  // TODO: add comment
  loadFibonacci(fLength) {
    let fArray = [];

    try {
      fArray = [...Array(fLength).keys()].reduce((acc, i) => {
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
  
  // TODO: add comment
  fibonacci(n, size) {
    const fArray = this.loadFibonacci(size);

    return fArray.includes(n);
  }
}