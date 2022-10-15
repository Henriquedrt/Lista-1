let n = parseInt(prompt("Digite um numero:"));
let f1 = 0;
let f2 = 1;
let fb = f1 + f2;

document.write(f1 + "<br>" + f2 + "<br>" + fb + "<br>");

for(let  c = 2; c < n; c++){

    f1 = f2;
    f2 = fb;
    fb = f1 + f2;

    document.write(fb + "<br>")

};