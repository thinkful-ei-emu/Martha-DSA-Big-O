function TowerOfHanoi (n, source, destination, temp){
  if(n===1){
    print(source, destination);
    return;
  }
  TowerOfHanoi(n-1, source, temp, destination);  
  print(source, destination);
  TowerOfHanoi(n-1, temp, destination, source);
}

function print(source, destination){
  console.log(`${source} -> ${destination}`);
}

TowerOfHanoi(5, 'A', 'C', 'B');


// If you are given 5 disks, how do the rods look like after 7 recursive calls?

/**
 * 1 (smallest) -> c 
 * 2 -> b
 * 1 ->b
 * 3->c
 * 1->a
 * 2->c
 * 1-> c
 * 
 * after 7 recursive calls
 * Col 1       |  Col 2       |    Col 3 
 *  4          |              |     1(smallest)
 *  5(largest) |    2         |     3
 */

// How many moves are needed to complete the puzzle with 3 disks? with 4 disks? with 5 disks?
/**
 * 
 * 3- 7 moves
 * 4- 15 moves
 * 5- 31 moves
 *  
*/

// What is the runtime of your algorithm?
//for 4 rings 9.385ms
//for 5 rings 9.850ms

