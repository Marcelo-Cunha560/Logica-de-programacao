//                              Entrega - Javascript: Praticando com Variáveis


//Questão 1
let valordaCompra = parseFloat(prompt("Qual o valor em reais você quer comrpar em gasolina?"));

let valorLitro = parseFloat(6.80);

let litros = valordaCompra / valorLitro;

alert(`o cliente abasteceu: ${litros.toFixed(2)}`);


//Questão 2
let Celsius = parseInt(prompt("Informe o valor da temperatura em graus: "));

let F =  (9 * Celsius + 160) / 5;

alert(`O valor ${Celsius} ºc em Fahrenheit é ${F.toFixed(2)}`);


//Questão 3
let Fahrenheit = parseFloat(prompt("Informe sua temperatura em fahrenheit: "));

let celsius = parseFloat(((Fahrenheit - 32) * 5) / 9);

alert(`O valor ${Fahrenheit}ºF em celsius é ${celsius}`);


//Questão 4
let comprimento = parseInt(prompt("Informe o valor do compirmento: "));
let largura = parseInt(prompt("Informe o valor da largura: "));
let altura = (parseFloat(prompt("Informe o valor da altura: ")));

let volume = comprimento*largura*altura;

alert(`O volume é de: ${volume}m3`);


//Questão 5
let n = parseInt(prompt("Informe um valor numérico: "));

let pot = n * n;

alert(`O valor ${n} ao quadrado é ${pot}`);


//Questão 6
let valor1 = parseInt(prompt("Informe um numero: "));
let valor2 = parseInt(prompt("Informe um numero: "));
let valor3 = parseInt(prompt("Informe um numero: "));
let valor4 = parseInt(prompt("Informe um numero: "));
let valor5 = parseInt(prompt("Informe um numero: "));

let soma = valor1 + valor2 + valor3 + valor4 + valor5;

let media = (valor1 + valor2 + valor3 + valor4 + valor5) / 5;

alert(`A soma dos valores informados é: ${soma} e a média das notas é: ${media}`);


//Questão 7
let Valor1 = parseInt(prompt("Informe um numero: "));
let Valor2 = parseInt(prompt("Informe outro numero: "));

let resto = Valor1 % Valor2;

alert(`O resto da divisão de ${Valor1} por ${Valor2} é: ${resto}`);

//Questão 8
let String = prompt("Digite um nome: ")

alert(`Este texto tem ${String.length} caracteres`);

//Questão 9
let tamanhoNome = prompt("Digite um nome: ");

let primeiraLetra = tamanhoNome[0];

let ultimaLetra = tamanhoNome[tamanhoNome.length - 1];

alert(`A primeira letra deste texto é ${primeiraLetra} e última é ${ultimaLetra}`);

//Questão 10
let nome = prompt("Informe seu nome: ");
let idade = parseInt(prompt("Informe sua idade: "));
let producao = prompt("Informe seu setor: ");

alert(`nome: ${nome.toUpperCase()} - idade: ${idade} - Setor: ${producao}`);


