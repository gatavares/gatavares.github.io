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

function getPoint(id) {
    document.querySelector(id).scrollIntoView({ 
        behavior: 'smooth' 
      });
}