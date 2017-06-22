'use strict';
const Gracias = (update) => {
    $("body").addClass("bg-yellow");
    const container = $('<div id="gracias" class="container-fluid text-center bg-yellow mt">');
    const row = $('<div class="row"><img class="mt" src="assets/icons/check.png"><br><strong><h1>¡Bien!<br>Ahora puedes usar Yape</h1></strong></div>');

    container.append(row);
    var pasaScreen = setInterval(function () {
        state.screen = "6";
        update();
        clearInterval(pasaScreen);
    }, 3000);
    
    return container;
}
