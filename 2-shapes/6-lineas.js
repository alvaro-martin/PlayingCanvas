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
        
        //Primer paso para crear el path de un triángulo relleno.
        ctx.beginPath();
        //Primer comando de construcción del path. Especificas el punto de inicio.
        //Es como levantar el lapiz y ponerlo en otro punto.
        //También se usa para dibujar paths no conectados.
        ctx.moveTo(25,25);
        //Dibuja línea de la posición actual a la especificada.
        ctx.lineTo(105,25);
        ctx.lineTo(25,105);
        //Cuando un path es rellenado las formas son automáticamente cerradas.
        //Por eso no se usa ctx.closePath();
        ctx.fill();

        //Primer paso para crear el path de un triángulo trazado.
        ctx.beginPath();
        //Primer comando de construcción del path. Especificas el punto de inicio.
        //Es como levantar el lapiz y ponerlo en otro punto.
        //También se usa para dibujar paths no conectados.
        ctx.moveTo(125,125);
        //Dibuja línea de la posición actual a la especificada.
        ctx.lineTo(125,45);
        ctx.lineTo(45,125);
        //Cierra la forma dibujando una línea recta desde posc. actual a la inicial.
        ctx.closePath();
        //Lo dibuja como un contorno.
        ctx.stroke();
    }
}
draw();