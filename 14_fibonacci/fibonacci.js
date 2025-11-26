const fibonacci = function(position) {
    if(position < 0) {return 'OOPS'} 
    let fib_seq = [0,1];
    for(let i = 2; i <= position; i++){
      fib_seq[i] = fib_seq[(i-1)] + fib_seq[(i-2)];
    }
    return fib_seq[position];
};
// Do not edit below this line
module.exports = fibonacci;
