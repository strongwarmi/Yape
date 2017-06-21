'use strict';
const render = (root) => {

    if (state.screen == null) {
        root.append(Home(_ => {
            render(root);
        }));
    } else if (state.screen == "2") {
        root.empty();
        root.append(ValidaNumero(_ => {
            render(root);
        }));
    } else if (state.screen == "3") {
        root.empty();
        root.append(ValidaCodigo(_ => {
            render(root);
        }));
    } else if (state.screen == "4") {
        root.empty();
        root.append(RegistroUsuario(_ => {
            render(root);
        }));
    } else if (state.screen == "5") {
        root.empty();
        root.append(Gracias(_ => {
            render(root);
        }));
    } else if (state.screen == "6") {
        root.empty();
        root.append(RegistroTarjeta(_ => {
            render(root);
        }));
    } else if (state.screen == "7") {
        root.empty();
        root.append(ClaveTarjeta(_ => {
            render(root);
        }));
    } else if (state.screen == "8") {
        root.empty();
        root.append(PerfilUsuario(_ => {
            render(root);
        }));
    }
}

const state = {
    screen: null
}

$(_ => {
    $(".owl-carousel").owlCarousel({
        loop: true,
        items: 1
    });
    const root = $("#root");
    render(root);

});
