/* Criar uma variavel para receber o form */
const form = document.getElementById("form-contato");

/* Array para adicionar todas as atividades e todas as notas informadas pelo usuario */
const contatos = [];

/* Manter o conteúdo e que seja acrescentado uma nova linha */
let linhas = "";

form.addEventListener("submit", function (e) { /* Criar o evento de submit (chamar)*/
    e.preventDefault();

    adicionaLinha(); /* Chamar a function adicionaLinha */
    atualizaTabela();

});

function adicionaLinha() {
    /* Capturar os campos (nome da atividade e a nota) */
    const inputNome = document.getElementById("nome");
    const inputTelefone = document.getElementById("telefone");
    

    /* Não permitir entradas repetidas em atividades */
    if (contatos.includes(contato => contato.nome === inputNome.value)) {
        alert(`O contato: ${inputNome.value} já foi inserido`);
        return;
    }

    contatos.push({ nome: inputNome.value, telefone: inputTelefone.value });

    let linha = "<tr>";
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputTelefone.value}</td>`;
    linha += "</tr>";

    /* Concatenar com a variavel linhas */
    linhas += linha;

    // Limpar o formulário
    inputNome.value = '';
    inputTelefone.value = '';
    }

    function atualizaTabela() {
        /* Recuperar o corpo da tabela (Colocar o conteúdo dentro do corpo da tebela) */
        const corpoTabela = document.querySelector("#tabelaContatos tbody");
    
        /* Inserir o conteúdo dentro de uma tag */
        corpoTabela.innerHTML = linhas;
    }