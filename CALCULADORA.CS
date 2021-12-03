int x= [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
int y= promt("INGRESE EL PRIMER NUMERO");
int z= promt("INGRESE EL SEGUNDO NUMERO");
int w= promt("INGRESE LA OPERACION A REALIZAR");
function operacion(x, y, z, w){
    if(w=="suma" || "SUMA" || "Suma"){
        console.log(y+z);
    }
    if(w=="resta" || "RESTA" || "Resta"){
        console.log(y-z);
    }
    if(w=="multiplicacion" || "MULTIPLICACION" || "Multiplicacion"){
        console.log(y*z);
    }
    if(w=="division" || "DIVISION" || "Division"){
        console.log(y/z);
    }
    if(w=="porcentaje" || "PORCENTAJE" || "Porcentaje"){
        console.log(y%z);
    }
    if(w=="potencia" || "POTENCIA" || "Potencia"){
        console.log(Math.pow(y*y));
    }
    else{
        console.log("ERROR");
    }