'use strict';
let cardNumber,
    cardMonth,
    cardYear,
    cardPassword;
const RegistroTarjeta = (update) => {
    $("body").removeClass("bg-yellow");
    const container = $('<div id="registroTarjeta" class="container mt text-center"></div>');
    const title = $('<div class="row"><img src="assets/icons/bcp-logo.png"><h1>Registra tu tarjeta débito BCP</h1><h2 class="text-gris">Por ahora solo aceptamos cuentas de ahorro y/o corriente en soles.</h2></div>');

    const tarjeta = $('<div class="row mt"></div>');
    const colTarjeta = $('<div class="col-xs-12"></div>');
    const icon = $('<div class="col-xs-1 bottom"><img class="icono" src="assets/icons/card.png"></div>');
    const nt = $('<div class="col-xs-11 bottom"></div>');
    const inputNt = $('<input type="text">');

    nt.append(inputNt);
    colTarjeta.append(icon);
    colTarjeta.append(nt);
    tarjeta.append(colTarjeta);

    const escaner = $('<div class="row"><h4 class="text-center text-turqueza"><img class="icono" src="assets/icons/scan.png"> Escanear tarjeta</h4></div>');

    const vencimiento = $('<div class="row mt"></div>');
    const label = $('<div class="col-xs-6"><h3 class="text-gris text-left">Fecha de vencimiento</h3></div>');
    const colFv = $('<div class="col-xs-6"></div>');
    const inputMes = $('<input class="col-xs-5 bottom text-center" type="text" placeholder="Mes">');
    const slash = $('<div class="col-xs-2"><h4> / </h4></div>');
    const inputYear = $('<input class="col-xs-5 bottom text-center" type="text" placeholder="Año">');

    colFv.append(inputMes);
    colFv.append(slash);
    colFv.append(inputYear);
    vencimiento.append(label);
    vencimiento.append(colFv);

    const divBtn = $('<div class="row mt"></div>');
    const colBtn = $('<div class="col-xs-6 col-xs-offset-3"></div>');
    const btn = $('<button class="btn btn-yellow" disabled="disabled">CONTINUAR</button>');

    colBtn.append(btn);
    divBtn.append(colBtn);

    container.append(title);
    container.append(tarjeta);
    container.append(escaner);
    container.append(vencimiento);
    container.append(divBtn);

    inputYear.on('keyup', () => {
        if (inputNt.val().length < 0 && inputMes.val().length < 0 && inputAnio.val().length < 0) {
            btn.attr("disabled", true);
        } else {
            btn.attr("disabled", false);
        }
    });

    $(btn).on('click', (e) => {
        e.preventDefault();
        cardNumber = inputNt.val();
        cardMonth = inputMes.val();
        cardYear = inputYear.val();
        state.screen = "7";
        update();
    });

    return container;
}
