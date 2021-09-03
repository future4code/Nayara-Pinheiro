~~~~ javascript
function calculaPrecoTotal(quantidade) {
 let valorDasmacas = 1.30
 if (quantidade < 12){
   return quantidade*valorDasmacas
 }else{
   return quantidade*1
 }
}
~~~~