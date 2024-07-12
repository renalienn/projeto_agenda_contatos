const form = document.getElementById('form-agenda');
const tabela = document.getElementById('tabela-agenda');

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const nomecontato = document.getElementById('nomecontato').value;    
    const numerocontato = document.getElementById('numerotel').value;

    adicionarcontato(nomecontato, numerocontato);
    limparFormulario();
})

function adicionarcontato(nome, telefone) {
    const novalinha = tabela.insertRow();
    const cell1 = novalinha.insertCell(0);
    const cell2 = novalinha.insertCell(1);

    cell1.innerHTML = nome;
    cell2.innerHTML = telefone;
}   

function limparFormulario() {
    document.getElementById('nomecontato').value = '';
    document.getElementById('numerotel').value = '';
}