function chamarIdade(){
    let nome = prompt("Digite seu nome:");
console.log("Olá, " + nome + "!");
};

function chamarCalculo(){
    let num1 = parseInt( prompt("Digite um numero inteiro"));
    let num2 =parseInt( prompt("Digite um numero inteiro"));

    let resul = num1 + num2;
    
    prompt("O resultado é: ", resul);
}

function testeGpt(){
    let numero1 = 10;
let numero2 = 5;

let resultado = numero1 + numero2;
console.log("Resultado: " + resultado);

}

let meuElemento = document.getElementById("Saudacao");

let txt = meuElemento.textContent;

meuElemento.addEventListener("mouseover", function(){

    console.log("Ouve Açao");
    meuElemento.textContent = "Como vai voce";
});

meuElemento.addEventListener("mouseout", function(){

    console.log("Ouve Açao denovo");
    meuElemento.textContent = txt;
});




function verificacao(){
    let nomeDoFulano = document.getElementById("nome").value;

    if(nomeDoFulano.trim() != ""){
        alert("Ola" + nomeDoFulano);
    }
    else{
        alert("Se indentifique por favor");
    }
};



let elemento = document.getElementById("meuId")
        elemento.innerHTML = "<p>JavaScript mudando</p>";

        elemento.style.color = "red";

        let add = document.getElementById("idInner").innerHTML ="Teste Teste isso é um teste"

        console.log(window.innerWidth); // Largura da área de conteúdo
        console.log(window.innerHeight); // Altura da área de conteúdo
