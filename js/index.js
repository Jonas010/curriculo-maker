let nome = document.querySelector("#nome");
let carreira = document.querySelector("#carreira");
let contato = document.querySelector("#contato");
//skill
let habilidade = document.querySelector("#titulo");
let sobreHabilidade = document.querySelector("#sobreHabilidade");
//habilities
let tempoArea = document.querySelector("#tempoArea");
let areaTrabalho = document.querySelector("#areaDeTrabalho");
let empresaExp = document.querySelector("#empresaExp");
//education
let tempoEdu = document.querySelector("#tempoEdu");
let curso = document.querySelector("#nomeCurso");
let instituicao = document.querySelector("#nomeInstituicao");

const popup = document.querySelector('.popup');
let popupInfo = document.querySelector('#warning');



function add() {
    let select = document.getElementById("cntt_opt");
    let value = select.options[select.selectedIndex];

    let dados = {"info1": value.value , "info2": contato.value };

    var ls = localStorage.getItem("contato");

    if(ls){
        
        var json = JSON.parse(ls);
        
        json.push(dados);
        
        json = JSON.stringify(json);

        localStorage.setItem("contato", json);
    }else{
        localStorage.setItem("contato", JSON.stringify([dados]));
    }

    popup.style.top = "60px";
    popupInfo.innerHTML= `adicionado ao banco: ${value.value} e ${contato.value}`;

}

function salvar() {

    let inputs = [
        nome,
        carreira,
        contato,
        habilidade,
        sobreHabilidade,
        tempoArea,
        areaTrabalho,
        empresaExp,
        tempoEdu,
        curso,
        instituicao
    ];

    document.querySelector('button').style.boxShadow = "1px 1px rgb(134, 133, 134)";

    function verifica_input(items) {

        if (items.value == "") {
            popup.style.top = "60px";
           popupInfo.innerHTML="Não deixe inputs vazios.";
        } else {
           //head
            localStorage.setItem("nome", nome.value );
            localStorage.setItem("trabalho", carreira.value );
            //localStorage.setItem("contato", contato.value );
            //skill
            localStorage.setItem("habilidade", habilidade.value );
            localStorage.setItem("sobreHabilidade", sobreHabilidade.value );
            //exp
            localStorage.setItem("tempoAreaExp", tempoArea.value );
            localStorage.setItem("areaTrabalhoExp", areaTrabalho.value );
            localStorage.setItem("empresaExp", empresaExp.value );
            //education
            localStorage.setItem("tempoEdu", tempoEdu.value );
            localStorage.setItem("curso", curso.value );
            localStorage.setItem("instituicao", instituicao.value );

            popup.style.top="60px";
            popupInfo.innerHTML="Salvo com sucesso! Já pode visualizar.";
        }
    };

    inputs.forEach(verifica_input);
};

function visualizar() {
    window.location.href = "./html/curriculo.html";
}

const close_btn = document.getElementById('close');
close_btn.addEventListener("click", () => {
    popup.style.top = "-120px";
});
