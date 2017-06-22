'use strict';
const RegistroUsuario = (update) => {
    const container = $('<div id="registroUsuario" class="container mt text-center"></div>');
    const title = $('<div class="row"><img src="assets/icons/lockone.png"><h1>Crea tu usuario Yape</h1><h2 class="text-gris">Ingresa un nombre, email y clave de usuario</h2></div>');
    const divForm = $('<div class="row mt"></div>');

    const user = $('<div class="col-xs-12"></div>');
    const iconUser = $('<div class="col-xs-1 bottom"><img class="icono" src="assets/icons/user.png"></div>');
    const colUser = $('<div class="col-xs-11 bottom"></div>');
    const inputUser = $('<input type="text" placeholder="Nombre">');

    colUser.append(inputUser);
    user.append(iconUser);
    user.append(colUser);

    const mail = $('<div class="col-xs-12 mt"></div>');
    const iconMail = $('<div class="col-xs-1 bottom"><img class="icono" src="assets/icons/message-gray.png"></div>');
    const colMail = $('<div class="col-xs-11 bottom"></div>');
    const inputMail = $('<input type="text" placeholder="correo@ejemplo.com">');

    colMail.append(inputMail);
    mail.append(iconMail);
    mail.append(colMail);

    const pass = $('<div class="col-xs-12 mt"></div>');
    const iconPass = $('<div class="col-xs-1 bottom"><img class="icono" src="assets/icons/lock.png"></div>');
    const colPass = $('<div class="col-xs-11 bottom"></div>');
    const inputPass = $('<input type="password" placeholder="Ingresa clave de 6 dígitos">');

    colPass.append(inputPass);
    pass.append(iconPass);
    pass.append(colPass);

    const text = $('<div class="row"><h4 class="text-gris">Cuida esta clave como oro, es tu acceso a Yape.</h4></div>');

    const divBtn = $('<div class="row mt"></div>');
    const colBtn = $('<div class="col-xs-6 col-xs-offset-3"></div>');
    const btn = $('<button class="btn btn-yellow" disabled="disabled">CREAR CUENTA</button>');

    colBtn.append(btn);
    divBtn.append(colBtn);

    divForm.append(user);
    divForm.append(mail);
    divForm.append(pass);

    container.append(title);
    container.append(divForm);
    container.append(text);
    container.append(divBtn);

    inputPass.on('keyup', () => {
        if (inputUser.val().length <= 0 && inputMail.val().length <= 0 && inputPass.val().length <= 0) {
            btn.attr("disabled", true);
        }else{
             btn.attr("disabled", false);
        }
    });

    btn.on('click', (e) => {
        e.preventDefault();
        $.post("http://localhost:3000/api/createUser", {
            phone: getTelefono,
            name: inputUser.val(),
            email: inputMail.val(),
            password: inputPass.val()

        }, (response) => {
            console.log(response);
        });
        state.screen = "5";
        update();
    });

    return container;
}
