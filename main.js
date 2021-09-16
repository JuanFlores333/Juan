var x = 50;
var y = 80;
var h = 30;
var j = 70;
var l = 25;
var m = 22;
var r = 8;
var o = 4;
var p = 15;
var q = 20;
var alumno = "Fernando";
var vendedor = "Marcelo";
var corredor = "Dilan";
var coach = "Natha";
var nadador = "Brayan";
var h1 = 20;
var h2 = 30;
if(x < y){
    console.log("x es menor a y");
}else{
    console.log("x es mayor a y");
}
if(h < j){
    console.log("h es menor a j");
}else{
    console.log("h es mayor a j");
}
if(l > m){
    console.log("l es mayor a m");
}else{
    console.log("l es menor a m");
}
if(r > o){
    console.log("r es mayor a o");
}else{
    console.log("r es menor a o");
}
if(p < q){
    console.log("p es menor a q");
}else{
    console.log("p es mayor a q");
}


switch(alumno){
    case "alumno":
        console.log("Es un alumno de clases");
    break;
    case "vendedor":
        console.log("es un alumno de clases");
    break;
    case "Fernando":
        console.log("es un alumno de clases");
    break;
    default:
        console.log("No es un alumno");
    break;
}
switch(vendedor){
    case "alumno":
        console.log("Es un vendedor");
    break;
    case "Marcelo":
        console.log("es un vendedor");
    break;
    case "Fernando":
        console.log("es un vendedor");
    break;
    default:
        console.log("No es un vendedor");
    break;
}
switch(corredor){
    case "alumno":
        console.log("Es un corredor");
    break;
    case "vendedor":
        console.log("es un corredor");
    break;
    case "Dilan":
        console.log("es un corredor");
    break;
    default:
        console.log("No es un corredor");
    break;
}
switch(coach){
    case "Natha":
        console.log("Es un coach");
    break;
    case "vendedor":
        console.log("es un coach");
    break;
    case "Fernando":
        console.log("es un coach");
    break;
    default:
        console.log("No es un coach");
    break;
}
switch(nadador){
    case "alumno":
        console.log("Es un nadador");
    break;
    case "vendedor":
        console.log("es un nadador");
    break;
    case "Brayan":
        console.log("es un nadador");
    break;
    default:
        console.log("No es un nadador");
    break;
} 
if(h1 < h2){
    switch(h1)
    {
        case h1:
            console.log("h1 es menor a 30");
      }
        switch(h2){
            case h2:
                console.log("h2 es 30");
                break;     
        }
    }