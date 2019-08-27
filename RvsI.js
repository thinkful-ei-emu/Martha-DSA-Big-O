//12-14. Iterative Versions


//1
function countingSheep (sheep){
  for (let i = 1; i < sheep; i++){
    console.log('Another sheep jumped over the fence');
  }
  console.log('All sheep jumped over the fence');
}
//console.log(countingSheep(3));

/**
 * Recursive O(n)
 * 
 * Iterative O(n)
 */



//2
function powerCalculator (base, exp) {
  let result = 1;
  for(let i=0; i<exp; i++){
    if(exp < 0) {
      return 'exponent should be >= 0';
    }
    else if(exp === 0){
      return 1;
    } else{
      result *= base;
    }
  }
  return result;
}
//console.log(powerCalculator(10, 2));

/**
 * Recursive O(n)
 * 
 * Iterative O(n)
 */


//3
function reverseString(string) {
  let arr = string.split('');
  let reverse = [];
  for(let i=0; i<string.length; i++){
    reverse.push(arr.pop());
  }
  return reverse;
}
//console.log(reverseString('hello'));


/**
 * Recursive O(n)
 * 
 * Iterative O(n)
 */



//4
function triangluarNumber(num) {
  let answer = 0;
  for(let i=0; i<=num; i++){
    answer += i;
  }
  return answer;
}
//console.log(triangluarNumber(7));


/**
 * Recursive O(n)
 * 
 * Iterative O(n)
 */



//5
function stringSplitter(string){
  let str = string.split('/');
  let result = str.join('');
  return result;
}
//console.log(stringSplitter('02/20/2020'));


/**
 * Recursive O(n)
 *  
 * Iterative O(n)
 */


//6
function fibonacci(num){
  let result = [];
  for(let i=1; i<=num; i++){
    if(i < 3){
      result.push(1);
    }
    if(i >=3){
      let next = result[i-2] + result[i-3];
      result.push(next);
    }
  }
  return result;
}
console.log(fibonacci(7));

/**
 * Recursive O(n)
 * 
 * Iterative O(n)
 */



//7
function factorial (num) {
  let result = 1;
  for(let i=1; i<=num; i++){
    result *= i;
  }
  return result;
}
//console.log(factorial(5));

/**
 * Recursive O(n)
 * 
 * Iterative O(n)
 */