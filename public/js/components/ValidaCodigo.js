'use strict';
const ValidaCodigo = (update) => {
    const container = $('<div id="validaCodigo" class="container mt text-center"></div>');
    const title = $('<div class="row"><img src="assets/icons/message.png"><h1>Ahora ingresa tu código</h1><h2 class="text-gris">Enviamos un SMS con el código de validación al número</h2><h2> ' +getTelefono+'</h2></div>');

    const divCode = $('<div class="row mt"></div>');
    const Code = $('<div class="col-xs-12"></div>');
    const icon = $('<div class="col-xs-1 bottom"><img class="icono" src="assets/icons/lock.png"></div>');
    const divInput = $('<div class="col-xs-11 bottom"></div>');
    const input = $('<input type="text" placeholder=" -   -   -   -   -  - ">');
    const divTimer = $('<div class="row"></div>');
    const label = $('<h2 class="text-gris col-xs-6 text-right">Reintentar en <i class="glyphicon glyphicon-time"></i></h2>');
    const timer = $('<h2 id="timer" class="text-gris col-xs-6 text-left">21</h2>');

    divInput.append(input);
    Code.append(icon);
    Code.append(divInput);
    divCode.append(Code);
    divTimer.append(label);
    divTimer.append(timer);
    container.append(title);
    container.append(divCode);
    container.append(divTimer);

  /*var repite =  setInterval(function(){*/
        var contador = parseInt(timer.text()),
            tiempo = setInterval(function(){
                    contador = contador-1;
                    timer.text(contador);
                        if(contador == -1){
                            //clearInterval(tiempo);
                            timer.text(21);
                            $.post("http://localhost:3000/api/resendCode",
                                {
                                  phone: getTelefono
                                },(response)=>{
                                  getCode=response.data;
                                  console.log(getCode);
                                  /*clearInterval(repite);*/
                                });
                        }
            },1000);
    /*},1000);*/

    input.on('keyup',()=>{
      if (parseInt(input.val()) == getCode) {
            /*repite= "";*/
          clearInterval(tiempo);
            state.screen = "4";
            update();
      }
    });

    return container;
}
