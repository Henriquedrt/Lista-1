let a = parseInt(prompt("Digite um número inteiro:"));
let b = 1;
let s = 0;

while(b <= a) {
	s = s + b;
	b = b + 1;
}
document.write(s);