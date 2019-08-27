//Determine the Big O for the following algorithm:

/**
 * 1. A. You are sitting in a room with 15 people. You want to 
 * find a playmate for your dog, preferably of the same 
 * breed. So you want to know if anyone out of the 15 
 * people have the same breed as your dog. You stand up 
 * and yell out, who here has a golden retriever and would 
 * like to be a playdate for my golden. Someone yells - 
 * "I do, be happy to bring him over"
 * 
 * 
 * Answer:
 * Big O for this alogrithm would be O(1) or constant 
 * becuase you are asking the whole group and waiting 
 * for the response and only one person responded.
 * Questions:
 * Is this like an API call, you just wait for the response?
 */

/**
 * 1. B. You are sitting in a room with 15 people. You want
 * to find a playmate for your dog who is of the same 
 * breed. So you want to know if anyone out of the 15 
 * people have the same breed as your dog. You start with 
 * the first person and ask him if he has a golden 
 * retriever. He says no, then you ask the next person, 
 * and the next, and the next until you find someone who 
 * has a golden or there is no one else to ask.
 * 
 * Answer: This is a linear O(n) run-time complexity you can think 
 * of this as an array of 15 people with dogs, you are using 
 * the alogrithm that checks each option in order until you 
 * find a match. While you could find it on the first try 
 * resulting in constant O(1), more likely you will have to ask 
 * multiple people. At that point the "number of operations" is 
 * proportional to the number of data. 
*/


//2. 
function isEven(value) {
  if (value % 2 == 0) {
    return true;
  }
  else
    return false;
}

/**
 * Answer: This function has O(1) as it is only performing 
 * 1 basic arithmetic. 1 data -> 1 operation. The purpose
 * of this function is to determine if a number is even 
 * by using mod 2 and checking if the remainder is 0, ie 
 * if it is divisible by 2
 */


//3. 
function areYouHere(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    const el1 = arr1[i];
    for (let j = 0; j < arr2.length; j++) {
      const el2 = arr2[j];
      if (el1 === el2) return true;
    }
  }
  return false;
}

/**
 * Answer: This function is finding if two arrays have
 * any values/items in common. This is an example of O(n^2)
 * or polynomial run time complexity as it is looping through 
 * two arrays (nested). For each item in the first array check 
 * each item in the second array and return true if any items are 
 * equal. Then continue in that fashion with each item in 
 * the first array. So you are doing n^2 number of operations for 
 * n data. 
 */



//4. 
function doubleArrayValues(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] *= 2;
  }
  return array;
}

/**
 * Answer: In order, this function, takes each item and doubles
 * the item. This is an example of linear/proportional O(n)
 * run time complexity. The number of operations is directly 
 * proportional to the amount of data in the input.  
 */


//5. 
function naiveSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
}

/**
 * The purpose of this function is to find a specific item 
 * in an array. This particular alogrithm is checking each 
 * item and comparing it until it finds the item that matches. 
 * This is a linear run time complexity, O(n) because you 
 * are doing as many operations as you have input data. 
 */



//6. 
function createPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
      console.log(arr[i] + ", " +  arr[j] );
    }
  }
}

/**
 * Answer: This is combining two arrays into sets of pairs. 
 * It is utlizing nested arrays, looping through and pairing each 
 * item in the first array with each item in the second, and then 
 * the second item in the first array with each item in the second array, 
 * and so on...Making this a polynomial run time complexity, O(n^2).
 */


//7.
function compute(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {
    if (i === 1) {
      result.push(0); 
    }
    else if (i === 2) { 
      result.push(1);   
    }
    else {
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  return result;
}

/**
 * Answer: This function takes in a single input, and then 
 * performs multiple operations (as many operations as the
 * number itself). 
 * 
 *  Input       1        
 *  Operations  1     45      80000
 * 
 * Linear...O(n)
 * 
 */

 
//8. 
function efficientSearch(array, item) {
  let minIndex = 0;
  let maxIndex = array.length - 1;
  let currentIndex;
  let currentElement;

  while (minIndex <= maxIndex) {
    currentIndex = Math.floor((minIndex + maxIndex) / 2);
    currentElement = array[currentIndex];

    if (currentElement < item) {
      minIndex = currentIndex + 1;
    }
    else if (currentElement > item) {
      maxIndex = currentIndex - 1;
    }
    else {
      return currentIndex;
    }
  }
  return -1;
}

/**
 * Answer: This is O(log(n)) runtime complexity. This function
 * is searching for a specific item in an array, and uses a 
 * alogrithm that uses the average and eliminates sub sections 
 * of the array at each step. 
 */




//9. 
function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

/**
 * Answer: This function is return a random element in an array.
 * It is an example of O(1) as it is performing 1 operation only.
 */



//10.
function isWhat(n) {
  if (n < 2 || n % 1 != 0) {
    return false;
  }
  for (let i = 2; i < n; ++i) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

/**
 * 
 * 1 -> false
 * 
 * 2 -> true
 * 
 * 3 -> true
 * 
 * 4 -> 4%2 -> false
 * 
 * 5 -> 5%2 -> keep checking
 *      5%3 -> keep checking
 *      5%4 -> keep checking
 * 
 * 
 * Answer: This function is checking to see if numbers are prime
 * with an alogrithm that is linear or O(n). It is checking the 
 * divisibilty of numbers. 
 */