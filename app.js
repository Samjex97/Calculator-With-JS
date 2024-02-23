const inputRisultato = document.getElementById("risultato");
let Scelta = '';


function cliccato(num) {
    Scelta += num;
    inputRisultato.value = Scelta;
};

function risult(risultato) {
    inputRisultato.value = eval(Scelta);
}