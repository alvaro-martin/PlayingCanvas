//Renombro el document para hacerlo más corto.
const DOM = document;
function draw(){
    //Referenciamos el tag de canvas para poder manipularlo.
    const canvas = DOM.getElementById('tutorial');
    //Se utiliza el if para verificar que si el navegador soporta canvas
    //que obtenga el contexto para poder dibujar, sino podemos poner un
    //mensaje en medio de los tags.
    if (canvas.getContext){
        //Método que se usa para obtener el contexto de renderizado y sus funciones de dibujo.
        //Solo toma un parámetro, el tipo de contexto 2d. 
        //2d rendering context, WebGL usa un contexto 3d.
        const ctx = canvas.getContext('2d');
    }
}
draw();