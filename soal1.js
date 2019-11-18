function lelang(a){
  let nilaiAwal = 10000
  
  for(let i = 0; i < a; i++){
    if(i > 3 && i % 4 === 0){
      nilaiAwal += (0.1 * nilaiAwal)
    }
    else if(i % 1 === 0){
      nilaiAwal += ((0.2 * nilaiAwal)) 
    }
    
  }
  if(nilaiAwal > 30000000){
    return "barang sudah terjual"
  }
  else{
    return `pada menit ${a} harga baju ${nilaiAwal}`
  }
}
console.log(lelang(49));
console.log(lelang(50));
console.log(lelang(2));


