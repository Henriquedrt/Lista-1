let a = parseInt(prompt("inteiro:"));
let n = parseInt(prompt("inteiro não negativo:"));
let pot = a;

if((n != 0) & (n > 0)){
	
	for(let i = 1; i < n; i++){
		
		pot = pot * a;
		
		
	}
}else if(n == 0){
	pot = 1;
}	


document.write(pot);