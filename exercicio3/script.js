//código a ser reescrito

// if(nome === "José"){
// 	console.log("Oi, Zé!");
// } else {
// 	console.log("Olá, "+nome);
// }

const nome = prompt("Qual o seu nome?")
nome.toLowerCase()==="jose" ? console.log("Oi, Zé") : console.log("Olá,", nome);

// if(idade >= 18){
// 	console.log("pode tirar carteira de motorista!");
// } else {
// 	console.log("Ainda não pode tirar carteira de motorista");
// }

const idade = +prompt("Qual a sua idade?")
idade>=18 ? console.log("Você pode tirar a carteira de motorista!") : console.log("Você ainda não pode tirar a carteira de motorista!");