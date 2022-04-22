let nome = document.getElementById('nome');
let area_trabalho = document.getElementById('area_trabalho');
let contato = document.getElementById('contato');

let habilidade = document.getElementById('habilidade');
let aboutSkill = document.getElementById('about_skill');

let timeExp = document.getElementById('tempo_exp');
let expArea = document.getElementById('exp_area');
let expEmpresa = document.getElementById('empresa_exp');
let sobreExp = document.getElementById('sobre_exp');

let tempoEdu = document.getElementById('tempo_edu');
let sobreEdu = document.getElementById('sobre_edu');
let ondeEdu = document.getElementById('onde_edu');

function print(){
    var element = document.getElementById('content');
    html2pdf(element);
};

window.addEventListener("load",function(){ 
    nome.innerHTML = localStorage.getItem("nome");
    area_trabalho.innerHTML = localStorage.getItem("trabalho");
    //contato.innerHTML = localStorage.getItem("contato");

    var ls_array = JSON.parse(localStorage.getItem("contato"));
    var texto = '';
    for(var item of ls_array){
        texto += item.info1 + " " + item.info2 + ";  ";
    }
    contato.innerHTML = texto;

    //habilidades
    habilidade.innerHTML = localStorage.getItem("habilidade");
    aboutSkill.innerHTML = localStorage.getItem("sobreHabilidade");
    //experiencia
    timeExp.innerHTML = localStorage.getItem("tempoAreaExp");
    expArea.innerHTML = localStorage.getItem("areaTrabalhoExp");
    expEmpresa.innerHTML = localStorage.getItem("empresaExp");
    //educaçao
    tempoEdu.innerHTML = localStorage.getItem("tempoEdu");
    sobreEdu.innerHTML = localStorage.getItem("curso");
    ondeEdu.innerHTML = localStorage.getItem("instituicao");
});