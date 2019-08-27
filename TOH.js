function TowerOfHanoi (n, source, destination, temp){
  if(n===1){
    print(source, destination);
  }
  TowerOfHanoi(n-1, source, temp, destination);  // 2->1 
  //next one...

}

function print(source, destination){
  console.log(`${source} -> ${destination}`);
}

//console.log(TowerOfHanoi(2, 'A', 'C', 'B'));



