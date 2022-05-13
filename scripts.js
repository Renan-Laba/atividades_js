//Comentário
/* Comentário */
function teste(){

    //var idade = 19;
    var preco = 12.5;
    var x = 10 + 30;
    var y = x + 20;

    //var nome = "Renan", sobrenome = 'Laba', idade = 19;
    var nome = window.prompt("Informe seu nome: ");
    var sobrenome = window.prompt("Informe seu sobrenome: ");
    var idade = window.prompt("Informe sua idade: ");

    window.alert("Olá, "+ nome + " " + sobrenome + ". Você tem " + idade+ " anos!")

    document.getElementById("info").innerHTML = "Olá, "+ nome + " " + sobrenome + ". Você tem " + idade+ " anos!";
}