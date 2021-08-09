// function consultaCep(){
//     $.ajax({
//         url: "https://viacep.com.br/ws/05077130/json/", -> Maneira sem interação do usuário para consulta por API Ajax
//         type: "GET",
//         success: function(response){
//             console.log(response);
//         }
//     })
// }

// function consultaCep(){

//     let cep = document.getElementById("cep").value;
//     let url = "https://viacep.com.br/ws/" + cep + "/json/";

//     console.log(url);

//     $.ajax({
//         url: url, -> Maneira com interação do usuário para consulta por API Ajax
//         type: "GET",
//         success: function(response){
//             console.log(response);
//             $("#logradouro").html(response.logradouro); -> Maneira Ajax de executar a mesma função que a linha abaixo
//             document.getElementById("bairro").innerHTML = response.bairro;
//             document.getElementById("localidade").innerHTML = response.localidade;
//             document.getElementById("uf").innerHTML = response.uf;
//         }
//     })
// }

function consultaCep() {

    $(".barra-progresso").show(); // -> Mostra a barra de progresso assim que o botão da tela é clicado
    let cep = document.getElementById("cep").value; // -> Pegando o valor que foi digitado
    let url = "https://viacep.com.br/ws/" + cep + "/json/"; // -> Consultando a API do site viacep, concatenando com o valor recebido e passando para json

    console.log(url);

    $.ajax({
        url: url, // -> Maneira com interação do usuário para consulta por API Ajax
        type: "GET",
        success: function (response) {
            console.log(response);
            $("#logradouro").html(response.logradouro); // -> Maneira Ajax de executar a mesma função que o getElementById
            $("#bairro").html(response.bairro);
            $("#localidade").html(response.localidade);
            $("#uf").html(response.uf);
            $("#titulo_cep").html("CEP " + response.cep);
            $(".cep").show(); // -> Comando do Jquery para mostrar o que foi escondido
            $(".barra-progresso").hide(); // -> Esconde a barra de progresso assim que as informações são mostradas ao usuário
        }
    })
}

$(function () {
    $(".cep").hide(); // -> Comando do Jquery para esconder a tabela da tela, para não aparecer sempre.
    $(".barra-progresso").hide(); // -> Para esconder a barra de progresso da tela.
});