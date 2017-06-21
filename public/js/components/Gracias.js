'use strict';
const Gracias = (update) => {
    const container = $('<div id="gracias" class="container-fluid text-center bg-yellow">');
    const row = $('<div class="row"><img src="assets/icons/check.png"><br><strong><h1>¡Bien!<br>Ahora puedes usar Yape</h1></strong></div>');
    const btn = $('<button class="btn btn-yellow">next</button>');

    container.append(row);
    container.append(btn);

    $(btn).on('click', (e) => {
        e.preventDefault();
        state.screen = "6";
        update();
    });

    return container;
}
