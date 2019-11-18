function cekkoin(target, koin){
	koin = koin.sort( (a, b) => b - a ); // how does sorting in JS
	
	var coinCount = 0;
	
	koin.forEach(coin => {
		coinCount += Math.floor(target / coin);
        target = target % coin;

		});
	
	if (!target) return coinCount;
	else return -1;
}
console.log(cekkoin(2,[25, 10, 5,1]));

