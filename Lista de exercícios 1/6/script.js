let a = parseInt(prompt("Digite o primeiro numero:"));
let b = parseInt(prompt("Digite o segundo numero:"));
let c = parseInt(prompt("Digite o terceiro numero:"));

if((a < b) && (a < b)){

    document.write(a);
    if(b < c){
        document.write(b);
        document.write(c);
    }else{
        document.write(c);
        document.write(b);
    }

}else if((b < a) && (b < c)){

    document.write(b);
    if(a < c){
        document.write(a);
        document.write(c);
    }else{
        document.write(c);
        document.write(a);
    }

}else{

    document.write(c);
    if(a < b){
        document.write(a);
        document.write(b);
    }else{
        document.write(b);
        document.write(a);
    }

}

