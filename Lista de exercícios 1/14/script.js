let anos = parseInt(prompt("Anos fumando:"));
let cig_por_dia = parseInt(prompt("Cigarros:"));
let carteira = parseFloat(prompt("Valor da carteira:"))


document.write("Dinheiro gasto: R$" + ((carteira /20) * (cig_por_dia * (anos * 365))));
