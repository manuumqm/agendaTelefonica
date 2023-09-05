function verificarInputs() {
    // Vamos verificar se os inputs estao colecionando os dados corretamente.
    let nome = document.getElementById("input-nome").value;
    let telefoneFixo = document.getElementById("input-telefoneFixo").value;
    let celular = document.getElementById("input-celular").value;
    let foto = document.getElementById("input-foto").value;
    let data = document.getElementById("input-data").value;
    let email = document.getElementById("input-email").value;
    let cep = document.getElementById("input-cep").value;
    let cidade = document.getElementById("input-cidade").value;
    let insta = document.getElementById("input-insta").value;
    let github = document.getElementById("input-github").value;

    //console para ver se está funcionando
    console.log(nome);
    console.log(telefoneFixo);
    console.log(celular);
    console.log(foto);
    console.log(data);
    console.log(email);
    console.log(cep);
    console.log(cidade);
    console.log(insta);
    console.log(github);


    // verificacao se os inputs estao vazios.
    if (nome == "" || telefoneFixo == "" || celular == "" || foto == "" || data == "" || email == "" || cep == "" || cidade == "" || insta == "" || github == "") {
        console.log("Os inputs estao vazios.");
        envieMsg('Preencha todos os campos', 'erro');

        return true;
    } else {
        // console.log("Os inputs estao preenchidos.");
        envieMsg('Cadastrado com sucesso', 'sucesso');
        return false;
    }
}

function envieMsg(msg, tipo) {
    //Essa funcao vai colocar uma msg que vem pelo parametro na tela do computador

    let msgDiv = document.getElementById("container");
    msgDiv.innerHTML = '';

    let msgParaTela = `
        <p class='${tipo}'>${msg}</p>
    `

    msgDiv.innerHTML = msgParaTela;
}

class CadastroPessoas {
    constructor(nome, telefoneFixo, celular, foto, data, email, cep, cidade, insta, github) {
        this.nome = nome;
        this.telefoneFixo = telefoneFixo;
        this.celular = celular;
        this.foto = foto;
        this.data = data;
        this.email = email;
        this.cep = cep;
        this.cidade = cidade;
        this.insta = insta;
        this.github = github;
        this.idade = this.getAge(data);
    }
    getAge(data) {
        const newDate = new Date(data);
        const yearDate = newDate.getFullYear();

        const todayDate = new Date();
        const nowDate = todayDate.getFullYear();

        const age = nowDate - yearDate;
        return age
    }
}

function registroPessoas() {

    let nome = document.getElementById("input-nome").value;
    let telefoneFixo = document.getElementById("input-telefoneFixo").value;
    let celular = document.getElementById("input-celular").value;
    let foto = document.getElementById("input-foto").value;
    let data = document.getElementById("input-data").value;
    let email = document.getElementById("input-email").value;
    let cep = document.getElementById("input-cep").value;
    let cidade = document.getElementById("input-cidade").value;
    let insta = document.getElementById("input-insta").value;
    let github = document.getElementById("input-github").value;

    const cadastroPessoas = new CadastroPessoas(nome, telefoneFixo, celular, foto, data, email, cep, cidade, insta, github);

    console.log(cadastroPessoas);
    bibliotecaPessoas.add(cadastroPessoas);
}

class ListaPessoas {
    constructor() {
        this.listaPessoas = [];
    }
    add(parametro) {
        if (verificarInputs()) {
            envieMsg("Preencha todos os campos", 'erro');
        } else if (!isURLValida(parametro.foto)) {
            envieMsg("URL inválido", 'erro')
        }
        else {
            this.listaPessoas.push(parametro);
            limparInputs();
            envieMsg("Cadastrado com sucesso", "sucesso")
            // console.log(this.listaPessoas);
        }
    }
}

const bibliotecaPessoas = new ListaPessoas();


function isURLValida(url) {
    if (url.match(/\.(jpeg|jpg|gif|png)$/) != null) {
        return true;
    } else {
        return false;
    }
}

function limparInputs() {
    //console.log("Usei limparInputs");

    //Pego o valor dela, e defino como vazio.
    document.getElementById("input-nome").value = '';
    document.getElementById("input-telefoneFixo").value = '';
    document.getElementById("input-celular").value = '';
    document.getElementById("input-foto").value = '';
    document.getElementById("input-data").value = '';
    document.getElementById("input-email").value = '';
    document.getElementById("input-cep").value = '';
    document.getElementById("input-cidade").value = '';
    document.getElementById("input-insta").value = '';
    document.getElementById("input-github").value = '';

}

function renderizarConteudo() {
    let content = '';
    let array = bibliotecaPessoas.listaPessoas;

    array.forEach(pessoa => {
        content += `
        <div class='container'>
            <h2>Nome Completo: ${pessoa.nome}</h2>
            <p>Telefone Fixo: ${pessoa.telefoneFixo}</p>
            <p>Telefone Celular: ${pessoa.celular}</p>
            <p>Data: ${dateinPTBR(pessoa.data)}</p>
            <p>E-mail: ${pessoa.email}</p>
            <img src="${pessoa.foto}" alt="${pessoa.nome}">
            <p>CEP: ${pessoa.cep}</p>
            <p>Cidade: ${pessoa.cidade}</p>
            <p>Instagram: ${pessoa.insta}</p>
            <p>Github: ${pessoa.github}</p>
        </div>
        `
    });
    document.getElementById('container').innerHTML = content;
}