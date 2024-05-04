const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')

const lancamento = "11 nov 2024"

function countDown() {
    const dataLanc = new Date(lancamento)
    const hoje = new Date()

    const segTotal = (dataLanc - hoje) / 1000;

    const finalDias = Math.floor(segTotal / 60 / 60 / 24); // Divide o Total de Segundo por 60 Segundos (1 Minuto), por 60 Minutos (1 Hora) e por 24 Horas ( 1 Dia)
    const finalHoras = Math.floor(segTotal / 60 / 60) % 24; // Divide o Total de Segundo por 60 Segundos (1 Minuto), por 60 Minutos (1 Hora), pega os Segundos Restantes (o Resto da Divisão) e divide por 24 Horas ( 1 Dia)
    const finalMinutos = Math.floor(segTotal / 60) % 60; // Divide o Total de Segundo por 60 Segundos (1 Minuto), pega os Segundos Restantes (o Resto da Divisão) e divide por 60 Minutos (1 Hora)
    const finalSegundos = Math.floor(segTotal) % 60; // Pega os Segundos Restantes (o Resto da Divisão) e divide por 60 Minutos (1 Hora)

    dia.innerHTML = formatoTempo(finalDias)
    hora.innerHTML = formatoTempo(finalHoras)
    minuto.innerHTML = formatoTempo(finalMinutos)
    segundo.innerHTML = formatoTempo(finalSegundos)

}

function formatoTempo(tempo) {
    return tempo < 10 ? `0${tempo}` : tempo;
}

countDown();
setInterval(countDown, 1000)