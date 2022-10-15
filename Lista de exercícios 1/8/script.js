const MEDIA = 70;
let a1 = parseInt(prompt("Prova 1:"));
let a2 = parseInt(prompt("Prova 2:"));
let a3 = parseInt(prompt("Prova 3:"));
let a4 = parseInt(prompt("Prova 4:"));
let a5 = parseInt(prompt("Prova 5:"));

if((a1 >= 70) && (a2 >= 70) && (a3 >= 70) && (a4 >= 70) && (a5 >= 70)){

    document.write("Nota: A");

}else if((a1 >= 70) && (a2 >= 70) && (a4 >= 70) && ~((a3 >= 70) || (a5 >= 70))){

    document.write("Nota: B");

}else if(((a1 >= 70) && (a2 >= 70)) && ((a3 >= 70) || (a4 >= 70)) && ~(a5 >= 70)){

    document.write("Nota: C");

}else{

    document.write("Reprovado");

}



