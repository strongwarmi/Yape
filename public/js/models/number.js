'use strict';
const getNumber = (callback) =>{
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load',()=>{
        if(err) callback(new Error("Error al obtener datos"));
        callback(null,response);
    });
    xhr.open('GET','api/registerNumber');
    xhr.responseType = 'json';
    xhr.send();
}