
// Descobrir a quantidade de letras a na string

const palavra = "wqwqwqw";
let contador = 0;

for (letra of palavra) {
    if (letra === "a") {
        contador++;

    }
}

if (contador === 0) {
    console.log("Não existem letras a na palavra");
}

else if (contador === 1) {

    console.log(`Existe ${contador} letra a na palavra`);

} else {

    console.log(`A quantidade de letras a na palavra é de: ${contador}`);

}



