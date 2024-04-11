const ingressos = [];

function addRedBorder(id) {
    element = document.querySelector(`#${id}`); // Substituindo ("#" + id) por (`#${id}`)
    element.style.border = "5px solid red";
}

function highLightCard(cardId) {
    var element = document.getElementById(cardId);
    element.classList.toggle("card-highLight");
}

function checkKeyBoardCode() {
    document.addEventListener('keydown', (event) => {
        var name = event.key;
        var code = event.code;
        // Alert the key name and key code om keydown
        alert(`Key pressed ${name} \r\n Key code value: ${code}`);
    }, false);
}

function addKeyBoardEventListeners() {
    document.addEventListener('keydown', (event) => {
        var ingresso1 = document.getElementById("quinta");
        var ingresso2 = document.getElementById("sexta");
        var ingresso3 = document.getElementById("sabado");
        var ingresso4 = document.getElementById("domingo");

        var code = event.code;
        if (code == 'Digit1') {
            ingresso1.classList.toggle("card-highLight");
            ingresso2.classList.remove("card-highLight");
            ingresso3.classList.remove("card-highLight");
            ingresso4.classList.remove("card-highLight");
        }

        if (code == 'Digit2') {
            ingresso1.classList.remove("card-highLight");
            ingresso2.classList.toggle("card-highLight");
            ingresso3.classList.remove("card-highLight");
            ingresso4.classList.remove("card-highLight");
        }

        if (code == 'Digit3') {
            ingresso1.classList.remove("card-highLight");
            ingresso2.classList.remove("card-highLight");
            ingresso3.classList.toggle("card-highLight");
            ingresso4.classList.remove("card-highLight");
        }

        if (code == 'Digit4') {
            ingresso1.classList.remove("card-highLight");
            ingresso2.classList.remove("card-highLight");
            ingresso3.classList.remove("card-highLight");
            ingresso4.classList.toggle("card-highLight");
        }
    }, false);
}

// Substituindo a palavra function por =>, ou seja, de: function seletCard(selector) para selectCard = (selector) =>
selectCard = (selector) => {
    var element = document.querySelector(selector);
    element.classList.toggle("card-selected");
    if (ingressos.includes(selector)) ingressos.pop(selector);
    else ingressos.push(selector)
}

// Substituindo a palavra function por =>, ou seja, de: function showSeletCard() para showSelectCard = () =>
showSelectedCards = () => {
    if (ingressos.length > 0) alert("Ingressos Selecionados:" + ingressos);
}

addKeyBoardEventListeners();