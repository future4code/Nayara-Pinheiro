~~~~ javascript
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
let salario = 2000
let salarioBruto = 2000 + (qtdeCarrosVendidos * 100) + (valorTotalVendas * 0.05) 
    if (qtdeCarrosVendidos > 0){
   return salarioBruto
   } else {
    return salario
   }
}
~~~~

