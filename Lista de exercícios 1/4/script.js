let f = parseInt(prompt("Informe um inteiro não negativo:"));
let fat;
let j;

if(f == 0) {
	
		fat = 1;
	
}else{
	
	fat = f;
	j = f - 1;
	while(j > 0){

		fat = fat * j
		j-= 1;

	};
	
}

document.write(fat);