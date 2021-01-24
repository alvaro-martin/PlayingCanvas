//Renombramos el document.
const DOM = document;
//referenciamos el elemento de video por su Id para luego poder manipularlo.
var video = DOM.getElementById("videoElement");

//Referenciamos el elemento de stop por su Id para poder manipularlo.
var stopVideo = DOM.querySelector("#stop");

//El if nos asegura que nuestro código a ejecutarse solo funcione si el
//getUserMedia es soportado por el navegador.
if (navigator.mediaDevices.getUserMedia){
    //getUserMedia toma una argumento llamado constraints, aquí se pueden representar
    //múltiples restricciones como objetos y propiedades.
    //Para más detalle ir a: https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
    /*{
     audio: true,
     video: {
     width: { ideal: 1280 },
     height: { ideal: 720 }
            }
        }*/
    //En este caso se usarán la configuración por defecto para capturar el video.
    navigator.mediaDevices.getUserMedia({video:true})
    //getUserMedia retorna una promesa que se resuelve en un objeto de tipo MediaStream.
    //Cuando la promesa se resuelve, se puede acceder al objeto MediaStream y ejecutar acciones.
    .then(function(stream){
        //HTMLMediaElement.srcObject es un MediaStream que representa el contenido multimedia 
        //a reproducir en el HTMLMediaElement actual.
        //https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/srcObject
        video.srcObject = stream;
    })
    //Si hay algún error el bloque catch lo maneja.
    .catch(function(err0r){
        console.log("Something went wrong!");
    })
}

stopVideo.addEventListener('click', stop, false);

function stop(e) {
    var stream = video.srcObject;
    var tracks = stream.getTracks();

    for (var i = 0; i < tracks.length; i++){
        var track = tracks[i];
        track.stop();
    }

    video.srcObject = null;
}