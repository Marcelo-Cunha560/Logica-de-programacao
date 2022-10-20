//Questão 1
function maiorDiferente(){
    let num1 = parseInt(prompt('Digite um número: '));
    let num2 = parseInt(prompt('Digite outro numero'));


    if (num1 > num2) {
        alert(`O maior número é ${num1} e a diferença é ${String(num1 - num2)}`)
    } else {
        alert(`O maior número é ${num2} e a diferença é ${String(num2 - num1)}`)
    }
}
maiorDiferente()

//Questao 2
function maiorIgual(){
    let num1 = parseInt(prompt('Digite um número: '));
    let num2 = parseInt(prompt('Digite outro numero'));


    if (num1 > num2) {
        alert(`O número ${num1} é maior que número ${num2}`);
    }else if(num1 == num2) {
        alert('Números iguais');
    }else{
        alert(`O número ${num2} é maior que número ${num1}`)
    }
}
maiorIgual()

//Questão 3
function emprestimoSalario(){
    let salario = parseFloat(prompt('Infomre seu salário: '));
    let emprestimo = parseFloat(prompt('Infomre o emprestimo requerido: '));

    let prestacao = salario * 0.3

    if(emprestimo > prestacao){
        alert(`Emprestimo não concedido`);
    }else{
        alert(`Emprestimo concedido`)
    }
}
emprestimoSalario()

// Questão 4
function divisivelTresouCinco(){
    let num = parseInt(prompt('Digite um número: '));

    if((num % 3 == 0) && (num % 5 == 0)){
        alert('Valor inválido');
    }else if(num % 3 == 0){
        alert(`Valor divisível por 3`);
    }else if(num % 5 == 0){
        alert('Valor divisivel por 5');
    }else if(num % 2 == 0){
        alert('É par.')
    }else if(num % 2 == 1){
        alert('É impar.');
    }
}
divisivelTresouCinco()

//Questão 5
function diasSemana(){
    let numero = parseInt(prompt('Digite um número de 1 à 7: '));

    if(numero == 1){
        alert('Domingo');
    }else if(numero == 2){
        alert('segunda-Feira');
    }else if(numero == 3){
        alert('Terça-Feira');
    }else if(numero == 4){
        alert('Quarta-Feira');
    }else if(numero == 5){
        alert('Quinta-Feira');
    }else if(numero == 6){    
        alert('Sexta-Feira');
    }else if(numero == 7){
        alert('Sábado');
    }else if(numero >= 8 || numero <= 0){
        alert('Número invalido');
    }
}
diasSemana()

 //Questão 6
 function valorReajuste(){
    let salario = parseFloat(prompt('Digite seu salário: '));
    let valor_reajuste = parseFloat(prompt('Informe o percentual de reajuste: '));

    if(valor_reajuste > 5){
        alert('O reajuste é ate 5%')
    }else{
        reajuste = (salario + (salario * (valor_reajuste/100)))
        alert(`O salário do funcionário corrigido é de: ${reajuste.toFixed(2)}`)
    }
 }
 valorReajuste()

//Questão 7
function moedaCotacao(){
    let moeda = parseFloat(prompt("Informe um valor em dólar: "));

    let cotação = 5.40;

    alert(`US$${moeda.toFixed(2)} é equivalente a R$${(moeda * cotação).toFixed(2)}, tendo ${cotação.toFixed(2)} como cotação`);
}
moedaCotacao()

//Questão 8
function pulverizacaoPraga(){
    let area = parseInt(prompt("informe a área para descontaminação: "))
    let peste = prompt("Digite o tipo de praga entre 1 - 4")

    let totalValor = 0;
    let totalDesconto = 0;

    if(peste == 1){
        totalValor = area * 50;
    }else if(peste == 2){
        totalValor = area * 100;
    }else if(peste == 3){
        totalValor = area *150;
    }else if(peste == 4){
        totalValor = area * 250;
    }else{
        alert('código invalido')
    }

    if(area >= 1000 && totalValor >= 750){
        totalDesconto = ( totalValor * 0.05) + ((totalValor - 750) * 0.1);
    }else if(area >= 1000){
        totalDesconto = ( totalValor * 0.05);
    }else if(totalValor >= 750){
        totalDesconto = (totalValor - 750) * 0.1;
    }else{
        alert('erro')
    }

    console.log(totalValor - totalDesconto);
}
pulverizacaoPraga()

//Questao 9
function tempoViagem(){
    let tempo = parseFloat(prompt("Informe o tempo de viagem em horas"));
    let velocidade = parseInt(prompt("Informe a velocidade do carro durante a viagem: "))

    let distancia = tempo * velocidade;

    litros_usados= distancia / 12;

    alert(`Seu veículo percorreu ${distancia} km a  ${velocidade} km/h em ${tempo}h de viagem e consumiu ${litros_usados.toFixed(2)}l de gasolina`)
}
tempoViagem()

//Questao 10
function prestacaoAtrasada(){
    let valor = parseFloat(prompt("Informe o valor da prestação atrasada: "))
    let taxa = parseFloat(prompt("Informe a taxa da prestação atrasada: "))
    let tempo = parseFloat(prompt("Informe o tempo do atraso do pagamento da prestação em dias: "))

    if(tempo >= 1){
        prestacao = valor + (valor* (taxa/100) * tempo);
        alert(`R$${prestacao}`)
    }else{
        alert(`Valor inválido, o tempo de atraso deve ser em dias`)
    }
}
prestacaoAtrasada()