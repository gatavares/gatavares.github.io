let idSaved = 1;

const data = new Date();
let ano = data.getFullYear();
console.log(`&copy; ` + ano);
document.getElementById("copy").innerHTML = `&copy; ` + ano;

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

// function novo() {
//     const width = window.innerWidth
//     console.log(width)

//     if (width >= 1200) {
//         document.getElementById('novo').className = "showned"
//         document.getElementById('novo2').className = "hiden"
//     }
//     else {
//         document.getElementById('novo2').className = "showned"
//         document.getElementById('novo').className = "hiden"
//     }
// }

// novo();

function getPoint(id) {
    document.querySelector(id).scrollIntoView({
        behavior: 'smooth'
    });
}


function warning() {
    alert("Não foi permitido publicar este projeto! Sugiro visualizar outro projeto.");
    getPoint("#PAP");
}