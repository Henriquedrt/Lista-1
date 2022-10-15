let a1 = parseInt(prompt("Digite um numero inteiro:"));
let a2 = parseInt(prompt("Digite outro numero inteiro"));
let r;

do{

    r = a1%a2;
    if(r != 0){
        a1 = a2;
        a2 = r;
    }

}while(r != 0);

document.write(a2);