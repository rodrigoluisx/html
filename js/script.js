window.location.href
window.alert
window.confirm("confirma?")
function mudar_text(){
    window.document.getElementById("titulo-form").innerText="alterei o titulo"
}
function mudar_cor(){
    window.document.getElementById("titulo-form").style.color="red";
}
function voltar(){
    window.document.getElementById("titulo-form").style.color="black"
}
function getInput(){
    return{
        nome_usuario: window.document.getElementById ("name"),
        email_usuario: window.document.getElementById ("email"),
        senha_usuario: window.document.getElementById ("senha")
    }
}
function getValores({nome_usuario,email_usuario,senha_usuario}){
    return{
        nome_usuario: nome_usuario.value.trim(),
        email_usuario: email_usuario.value.trim(),
        senha_usuario: senha_usuario.value.trim()
    }
}
document.addEventListener("DOMContentLoaded", function(){
    const botaoenviar = document.getElementById("cadastrar");
    if(!botaoenviar){
        return;
    }

    botaoenviar.addEventListener("click", function(event){
        event.preventDefault();
        const inputs = getInput();
        const dados = getValores(inputs);
        console.log("inputs:", inputs);
        console.log("dados:", dados);
        window.location.href = `pages/resultado.html?nome=${encodeURIComponent(dados.nome_usuario)}&email=${encodeURIComponent(dados.email_usuario)}&senha=${encodeURIComponent(dados.senha_usuario)}`;
    });
});   
function mostrarResultado(){
    const params = new URLSearchParams(window.location.search);
    const nome = params.get("nome");
    const email = params.get("email");
    const senha = params.get("senha");  

    const resultadoDiv = document.getElementById("exibir_resultado");
    resultadoDiv.innerHTML = `
    <p>Nome: ${nome}</p>
    <p>Email: ${email}</p>
    <p>Senha: ${senha}</p>
    `;
}