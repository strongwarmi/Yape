'use strict';
const Gracias = (update) => {
    $("body").addClass("bg-yellow");
    const container = $('<div id="gracias" class="container-fluid text-center bg-yellow mt">');
    const row = $('<div class="row"><img class="mt" src="assets/icons/check.png"><br><strong><h1>¡Bien!<br>Ahora puedes usar Yape</h1></strong></div>');

    container.append(row);
    setTimeout(function () {
        state.screen = "6";
        update();
    }, 3000);     

    return container;
}
