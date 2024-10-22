function IMC (){
    let peso = document.querySelector('.peso');
    let altura = document.querySelector('.altura');

    let idade = document.querySelector('.txtIdade');
    let valorIdade = idade.value;

    

    console.log(valorIdade);

    let valorPeso = peso.value;
    let valorAltura = altura.value;

    let imc =  valorPeso / (valorAltura * valorAltura);

    console.log(valorPeso);
    console.log(valorAltura);
    console.log(imc.toFixed(2))

    let resul = document.getElementById('resultado');

    if(imc <= 18.5 ){ 
        resul.textContent = "Menos do que 18,5 esta Abaixo do peso " + imc.toFixed(2);
        resul.style.background = "blue";
        resul.style.color = "white";
    }
    if(imc >= 18.5 && imc <= 24.9){
        resul.textContent = `Seu IMC é: ${imc.toFixed(2)} Esta com o peso normal.`;
        resul.style.background = "green"
        resul.style.color = "white";
    }
    if(imc >= 25 && imc <= 29.9){
        resul.textContent = `Seu IMC é: ${imc.toFixed(2)} Esta com Sobrepeso.`;
        resul.style.background = "grey"
        resul.style.color = "white";
    }
    if(imc >= 30 && imc <= 34.9){
        resul.textContent = `Seu IMC é: ${imc.toFixed(2)} Esta com Obesidade Grau 1.`;
        resul.style.background = "#4F4F4F"
        resul.style.color = "white";
    }
    if(imc >= 35 && imc <= 39.9){
        resul.textContent = `Seu IMC é: ${imc.toFixed(2)} Esta com Obesidade Grau 2.`;
        resul.style.background = "#363636"
        resul.style.color = "white";
    }
    if(imc >= 40){
        resul.textContent = `Seu IMC é: ${imc.toFixed(2)} Esta com Obesidade Grau 3.`;
        let bodi = document.querySelector('body')
        bodi.style.background = "black"
    }

    
}

   

        let botao = document.getElementById('btn');

        botao.addEventListener('click', IMC);

        let btnidade = document.getElementById('btnIdade');
        btnidade.addEventListener('click', IMC);