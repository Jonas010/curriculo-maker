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
        } else {
           //head
            localStorage.setItem("nome", nome.value );
            localStorage.setItem("trabalho", carreira.value );
            localStorage.setItem("contato", contato.value );
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
