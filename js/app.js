function comprar(){
    let ingresso = document.getElementById('tipo-ingresso');
    let quantidade = document.getElementById('qtd').value;
    
    if(ingresso.value == "pista"){
        comprarPista(quantidade);
    }
    if(ingresso.value == "superior"){
        comprarSuperior(quantidade);
    }
    if(ingresso.value == "inferior"){
        comprarInferior(quantidade);
    }
  
}

function comprarPista(qtd){
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);

    if(qtd > qtdPista){
        alert('Valor indisponível para Pista');
    }else{
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        document.getElementById('qtd').value = "";
    }
}

function comprarSuperior(Superior){
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);

    if(Superior > qtdSuperior){
        alert('Valor indisponível para Cadeira Superior');
    }else{
        qtdSuperior = qtdSuperior - Superior;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        document.getElementById('qtd').value = "";
    }
}
    function comprarInferior(Inferior){
        let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    
        if(Inferior > qtdInferior){
            alert('Valor indisponível para Cadeira Inferior');
        }else{
            qtdInferior = qtdInferior - Inferior;
            document.getElementById('qtd-inferior').textContent = qtdInferior;
            document.getElementById('qtd').value = "";
        }
}
