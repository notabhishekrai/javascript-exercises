const fibonacci = function(position) {
    if(position < 0) {return 'OOPS'} 
    let fib_seq = [0,1];
    for(let i = 2; i <= 50; i++){
      fib_seq.push(fib_seq[(i-1)] + fib_seq[(i-2)]);
    }
    return fib_seq[position];
};
// Do not edit below this line
module.exports = fibonacci;
