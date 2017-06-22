'use strict';
let getTelefono = "";
const ValidaNumero = (update) => {
    const container = $('<div id="validaNumero" class="container mt text-center"></div>');
    const title = $('<div class="row"><img src="assets/icons/phone.png"><h1>Para comenzar validaremos tu número</h1><h2 class="text-gris">Recibirás un SMS con un código de validación</h2></div>');
    const divPhone = $('<div class="row mt"></div>');
    const Phone = $('<div class="col-xs-12"></div>');
    const icon = $('<div class="col-xs-3 bottom"><img class="icono" src="assets/icons/phoneandnumber.png"></div>');
    const divInput = $('<div class="col-xs-9 bottom"></div>');
    const input = $('<input id="numTelefono" type="text">');
    const divCheck = $('<div class="row"></div>');
    const check = $('<input type="checkbox" id="terminos">');
    const label = $('<label for="terminos"><h3 class="text-gris"> Acepto los <span class="text-turqueza">términos y condiciones </span></h3></label>');
    const divBtn = $('<div class="row mt"></div>');
    const colBtn = $('<div class="col-xs-6 col-xs-offset-3"></div>');
    const btn = $('<button class="btn btn-yellow" disabled="disabled">CONTINUAR</button>');

    divInput.append(input);

    Phone.append(icon);
    Phone.append(divInput);

    divPhone.append(Phone);

    divCheck.append(check);
    divCheck.append(label);

    colBtn.append(btn);
    divBtn.append(colBtn);


    container.append(title);
    container.append(divPhone);
    container.append(divCheck);
    container.append(divBtn);

    input.on('keyup', () => {
        if (input.val().length <= 0) {
            btn.attr("disabled", true);
        } 
    });

    check.on('change', () => {
        if (check.is(":checked") && (input.val().length > 0)) {
            btn.attr("disabled", false);
        } else {
            btn.attr("disabled", true);
        }
    });

    btn.on('click', (e) => {
        e.preventDefault();
        state.screen = "3";
        getTelefono = input.val();
        update();
    });

    return container;
}
