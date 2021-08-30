do {
  var gasolina = parseFloat(prompt('Digite o valor da Gasolina'));
  var alcool = parseFloat(prompt('Digite o valor do Álcool'));
  var media = alcool/gasolina

  if (media == 0.7){
    alert ('Abasteça com Álcool ou Gasolina')
  }
  else if(media >= 0.7){
    alert ('Abasteça com Gasolina.')
  }
  else if (media <= 0.7){
    alert ('Abasteça com Álcool.')
  }

  var continuar = (prompt('Deseja repetir o cálculo?\n s ou n'));
} while (continuar == 's' )



