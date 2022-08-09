let nacionalidade = prompt("digite aqui a nacionalidade").toLowerCase();

switch(nacionalidade){
    case "brasileira":
    console.log("Sua nacionalidade é Brasileira!");
        break;
    case "argentina":
    console.log("Sua nacionalidade é Argentina!");
        break;
    case "uruguaia":
    console.log("Sua nacionalidade é Uruguaia!");
        break;
    case "chilena":
    console.log("Sua nacionalidade é Chilena!");
        break;
    case "colombiana":
    console.log("Sua nacionalidade é Colombiana!");
        break;
    default:
    console.log("Nacionalidade não encontrada!");
}