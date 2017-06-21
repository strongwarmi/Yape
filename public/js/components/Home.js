'use strict';

const Home = (update) => {
    $("#Registrarme").on('click', (e) => {
        e.preventDefault();
        state.screen = "2";
        update();
    });
}
