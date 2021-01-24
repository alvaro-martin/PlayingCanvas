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
        
        //Primer paso para crear el path.
        ctx.beginPath();
        //Dibujo del círculo mayor.
        //Sintáxis para dibujar arcos.
        //arc(x,y,radius,startAngle,endAngle,anticlockwise)
        ctx.arc(75,75,50,0, Math.PI*2, true);
        //Primer comando de construcción del path. Especificas el punto de inicio.
        //Es como levantar el lapiz y ponerlo en otro punto.
        //También se usa para dibujar paths no conectados.
        ctx.moveTo(110,75);
        ctx.arc(75,75,35,0, Math.PI, false); //Boca.
        ctx.moveTo(65,65);
        ctx.arc(60,65,5,0,Math.PI*2,true);//Ojo izquierdo.
        ctx.moveTo(95,65);
        ctx.arc(90,65,5,0, Math.PI*2, true); //Ojo derecho.
        ctx.stroke();
    }
}
draw();