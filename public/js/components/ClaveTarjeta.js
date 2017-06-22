'use strict';
const ClaveTarjeta = (update) => {
    const container = $('<div id="claveTarjeta" class="container mt text-center"></div>');
    const title = $('<div class="row"><img src="assets/icons/bcp-logo.png"><h1>Ingresa la clave de tu tarjeta</h1><h2 class="text-gris">Tarjeta ****1234</h2></div>');

    const clave = $('<div class="row mt"></div>');
    const colClave = $('<div class="col-xs-12"></div>');
    const icon = $('<div class="col-xs-1 bottom"><img class="icono" src="assets/icons/lock.png"></div>');
    const divInput = $('<div class="col-xs-11 bottom"></div>');
    const input = $('<input type="password">');

    divInput.append(input);

    colClave.append(icon);
    colClave.append(divInput);

    clave.append(colClave);

    const divBtn = $('<div class="row mt"></div>');
    const colBtn = $('<div class="col-xs-6 col-xs-offset-3"></div>');
    const btn = $('<button class="btn btn-yellow" disabled="disabled">REGISTRAR</button>');

    colBtn.append(btn);
    divBtn.append(colBtn);


    container.append(title);
    container.append(clave);
    container.append(divBtn);

    input.on('keyup', () => {
        if (input.val().length < 0) {
            btn.attr("disabled", true);
        } else {
            btn.attr("disabled", false);
        }
    });

    $(btn).on('click', (e) => {
        e.preventDefault();
        $.post("http://localhost:3000/api/registerCard", {
            phone: getTelefono,
            cardNumber: cardNumber,
            cardMonth: cardMonth,
            cardYear: cardYear,
            cardPassword: input.val()

        }, (response) => {
            console.log(response);
        });
        state.screen = "8";
        update();
    });

    return container;
}
