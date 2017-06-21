'use strict';
const PerfilUsuario = () => {
    const container = $('<div id="gracias" class="container-fluid text-center bg-lila text-white">');
    const title = $('<div class="row"><img class="mt" src="assets/icons/happy-face.png"><h1>Hola</h1></div>');
    const subtitle = $('<div class="row"><h4 class="text-turqueza"><img class="icono" src="assets/icons/eye.png"> Mostrar saldo</h4></div>');  
    const movimientos = $('<div class="row bg-morado"></div>');
    const label = $('<div class="col-xs-12 bottom"><div class="col-xs-6"><h1 class="text-left">ÚLTIMOS MOVIMIENTOS</h1></div><div class="col-xs-6 text-right"><h1><img src="assets/icons/right-arrow-circular-button.png"></h1></div></div>');
    const fiu = $('<div class="col-xs-12 mt"><div class="col-xs-4"><img src="assets/icons/icon.png"></div><div class="col-xs-8"><h1>¿Aún no realizar tu primer pago?<br>Es rápido y sencillo</h1></div></div>');
    const btn = $('<div class="col-xs-12 mt"><div class="col-xs-6"><img src="assets/icons/send.png"><h1>ENVIAR PAGO</h1></div><div class="col-xs-6"><img src="assets/icons/code-qr.png"><h1>RECIBIR PAGO</h1></div></div>');    
    
    movimientos.append(label);
    movimientos.append(fiu);
    movimientos.append(btn);
    
    container.append(title);
    container.append(subtitle);    
    container.append(movimientos);
    
    return container;
}
