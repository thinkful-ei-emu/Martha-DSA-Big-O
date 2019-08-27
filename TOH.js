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
TowerOfHanoi(7, 'A', 'C', 'B');

//console.log(TowerOfHanoi(2, 'A', 'C', 'B'));



