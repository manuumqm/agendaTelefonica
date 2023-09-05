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
        // console.log("Os inputs estao vazios.");
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

    let msgDiv = document.getElementById("msg");
    msgDiv.innerHTML = '';

    let msgParaTela = `
        <p class='${tipo}'>${msg}</p>
    `

    msgDiv.innerHTML = msgParaTela;
}

class CadastroPessoas {
    constructor(nome, telefoneFixo, celular, foto, data, email, cep, cidade, insta, github, id) {
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
    }
}

function randomId() {
    return Math.floor(Math.random() * 9998) + 1;
}

class Agenda {
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
        this.age = this.getAge(data);
        this.signo = this.getZodiacSign();
        this.id = this.randomId();
    }

        randomId() {
            return Math.floor(Math.random() * 9998) + 1;
        }

    
    getAge() {
        let today = new Date();
        let data = new Date(this.dat);
        let age = today.getFullYear() - data.getFullYear();
        let month = today.getMonth() - data.getMonth();

        if (month < 0 || (month === 0 && today.getDate() < data.getDate())) {
            age--;
        }
        return age;

    }
    getZodiacSign() {
        let data = new Date(this.data);
        let day = data.getDate();
        let month = data.getMonth() + 1;

        if ((month == 1 && day <= 20) || (month == 12 && day >= 22)) {
            return "Capricórnio ♑";
        } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
            return "Aquário ♒";
        } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
            return "Peixes ♓";
        } else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
            return "Áries ♈";
        } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
            return "Touro ♉";
        } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
            return "Gêmeos ♊";
        } else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
            return "Câncer ♋";
        } else if ((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
            return "Leão ♌";
        } else if ((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
            return "Virgem ♍";
        } else if ((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
            return "Libra ♎";
        } else if ((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
            return "Escorpião ♏";
        } else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
            return "Sagitário ♐";
        }
    }
}

function registrarPessoas() {

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

    //console.log(cadastroPessoas);
    bibliotecaPessoas.add(cadastroPessoas);
    bibliotecaPessoas.renderizarConteudo();
    bibliotecaPessoas.renderizarConteudos();

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
    renderizarCard() {
        const listaHTML = document.getElementById('container');
        listaHTML.innerHTML = '';
        let array = bibliotecaPessoas.listaPessoas;
        console.log(array);
        let content = "";

        array.forEach(pessoa => {
            content += `
        <div class='container'>
                    <img id="imgPessoa" src="${pessoa.foto}" alt="${pessoa.nome}">
                    <h1>${pessoa.nome}</h2>
                    <p>Telefone Fixo: ${pessoa.telefoneFixo}</p>
                    <p>Celular: ${pessoa.celular}</p>
                    </div>
                    `
        });
        document.getElementById('container').innerHTML = content;
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