let n = parseInt(prompt("DIGITE UM NUMERO:"));
let t = false;
let c = 1;
let soma = 0;


while((c < n) && (t != true) && soma <= n){

    soma = c * (c+1) * (c+2) ;

    if((soma == n)){
        t = true;
    };

    document.write(soma + "<br>")
    c+= 1;

};

document.write(n + " é um número triângulo? ->" + t);
