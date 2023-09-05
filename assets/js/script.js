function verificarInputs() {
    // Vamos verificar se os inputs estao colecionando os dados corretamente.
    let nome = document.getElementById("input-nome").value;
    let telefoneFixo = document.getElementById("input-telefoneFixo").value;
    let celular = document.getElementById("input-celular").value;
    let Foto = document.getElementById("input-URL").value;
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
    console.log(Foto);
    console.log(data);
    console.log(email);
    console.log(cep);
    console.log(cidade);
    console.log(insta);
    console.log(github);
 

 // verificacao se os inputs estao vazios.
 if (nome == "" || telefoneFixo == "" || celular == "" || Foto == "" || data == "" || email == "" || cep == "" || cidade == "" || insta == "" || github == "") {
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

class CadastroPessoa {
    constructor(nome, telefoneFixo, celular, Foto, data, email, cep, cidade, insta, github) {
        this.nome = nome;
        this.telefoneFixo = telefoneFixo;
        this.celular = celular;
        this.Foto = Foto;
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
