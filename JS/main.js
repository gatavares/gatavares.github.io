let idSaved = 1;

function menu(id) {
    const element = document.getElementById(id);
    if (id === idSaved) {
    }
    else {
        if (element.className === "desativado") {
            element.className = "ativado";
            document.getElementById("A" + id).className = "showned"

            document.getElementById(idSaved).className = "desativado"
            document.getElementById("A" + idSaved).className = "hiden"

            idSaved = id;
        }
        else {
            element.className = "desativado"
        }
    }
}

function novo() {
    const width = window.innerWidth
    console.log(width)

    if (width >= 1200) {
        document.getElementById('novo2').className = "showned"
        document.getElementById('novo').className = "hiden"
        document.getElementById('novo3').className = "hiden"
    }
    else {
        document.getElementById('novo').className = "showned"
        document.getElementById('novo3').className = "showned"
        document.getElementById('novo2').className = "hiden"
    }
}

novo()

function getPoint(id) {
    document.querySelector(id).scrollIntoView({
        behavior: 'smooth'
    });
}

const data = new Date();
let ano = data.getFullYear();
document.getElementById("copy").innerHTML = `&copy; ` + ano;


function warning() {
    alert("Não foi permitido publicar este projeto! Sugiro visualizar outro projeto.");
    getPoint("#PAP"); 
}