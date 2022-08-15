let idSaved = 1;

function menu(id) {
    const element = document.getElementById(id);
    if (id === idSaved) {
    }
    else {
        if (element.className === "desativado") {
            element.className = "ativado";
            document.getElementById(idSaved).className = "desativado"

            idSaved = id;

            if (id === 1) {
                document.getElementById("tituloArtigo").innerHTML = "À procura de emprego como programador Front-End :)";
                document.getElementById("dataArtigo").innerHTML = "";
                document.getElementById("categoriaArtigo").innerHTML = "Quem sabe, na sua empresa?";
                document.getElementById("textoArtigo").innerHTML = "Estarei disponivel para propostas de emprego relacionado com a minha paixão! Pode entrar em contato via email: <span>guilhermeatavares89@gmail.com</span> ✨";
            }
            if (id === 2) {
                document.getElementById("tituloArtigo").innerHTML = "Front & Back-End Developer, Menager";
                document.getElementById("dataArtigo").innerHTML = "Ago 2022";
                document.getElementById("categoriaArtigo").innerHTML = "Fitday Company";
                document.getElementById("textoArtigo").innerHTML = "1";
            }
            if (id === 3) {
                document.getElementById("tituloArtigo").innerHTML = "Estágio Front-End Developer";
                document.getElementById("dataArtigo").innerHTML = "Ago 2022";
                document.getElementById("categoriaArtigo").innerHTML = "ANM Connection";
                document.getElementById("textoArtigo").innerHTML = "2";
            }
        }
        else {
            element.className = "desativado"
        }
    }
}