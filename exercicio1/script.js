const num = +prompt("Digite um numero aqui") //9

// 1-
if(num%2 == 0) {
    if(num%3 == 0) {
        console.log("Esse numero é divisível por 2 e por 3");
    } else {
        console.log("Esse numero é divisível apenas por 2");
    }
} else if(num%3 == 0) {
    console.log("Esse numero é divisível apenas por 3");
} else {
    console.log("Esse numero nem é divisível por 2 e nem por 3");
}

// 2-

if(num%2 == 0 && num%3 == 0) {
    console.log("Esse numero é divisível por 2 e por 3");
} else if(num%2 == 0) {
    console.log("Esse numero é divisível apenas por 2");
} else if(num%3 == 0) {
    console.log("Esse numero é divisível apenas por 3");
} else {
    console.log("Esse numero nem é divisível por 2 e nem por 3")
}
