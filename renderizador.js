var getCode = document.getElementById('input');
var modificarHTML = document.getElementById('overview');

function renderizar() {
    codigo = getCode.value;

    modificarHTML.innerHTML = codigo;
}
