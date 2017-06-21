'use strict';
const ValidaCodigo = (update) => {
    const container = $('<div id="validaCodigo" class="container mt text-center"></div>');
    const title = $('<div class="row"><img src="assets/icons/message.png"><h1>Ahora ingresa tu código</h1><h2 class="text-gris">Enviamos un SMS con el código de validación al número xxx</h2></div>');
    const divCode = $('<div class="row mt"></div>');
    const Code = $('<div class="col-xs-12"></div>');
    const icon = $('<div class="col-xs-1 bottom"><img class="icono" src="assets/icons/lock.png"></div>');
    const divInput = $('<div class="col-xs-11 bottom"></div>');
    const input = $('<input type="text" placeholder="-   -   -   -   -">');
    const divTimer = $('<div class="row"></div>');
    const timer = $('<h2 class="text-gris">Reintentar en <i class="glyphicon glyphicon-time"></i> xx</h2>');
    /*      const label = $('<label for="terminos"><h3 class="text-gris"> Acepto los <span class="text-turqueza">términos y condiciones </span></h3></label>');
           const divBtn = $('<div class="row mt"></div>');
            const colBtn = $('<div class="col-xs-6 col-xs-offset-3"></div>');
            */
    const btn = $('<button class="btn btn-yellow">CONTINUAR</button>');

    divInput.append(input);

    Code.append(icon);
    Code.append(divInput);

    divCode.append(Code);

    divTimer.append(timer);
    //divCheck.append(label);

    /*colBtn.append(btn);
    divBtn.append(colBtn);*/


    container.append(title);
    container.append(divCode);
    container.append(divTimer);
    container.append(btn);

    $(btn).on('click', (e) => {
        e.preventDefault();
        state.screen = "4";
        update();
    });

    return container;
}
