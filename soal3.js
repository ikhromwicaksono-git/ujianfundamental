function cekkoin(koin){
  let sen = [25,10,5,1];
  let jumlahkoin = 0;
  let uang = koin
  while(uang > 0){
    if(uang >= sen[0]){ 
      uang -= sen[0]
      jumlahkoin ++
   }
    else if(uang >= sen[1]){
      uang -= sen[1]
      jumlahkoin ++      
    } 
    else if(uang >= sen[2]){
      uang -= sen[2]
      jumlahkoin++   
    }
    else if(uang >= sen[3]){
      sen -= sen[3]
      jumlahkoin++
    }
  }
  return jumlahkoin 
}
console.log(cekkoin(49));
