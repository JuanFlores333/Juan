var x, y, suma, z;
x = prompt("Ingrese numero: ");
y = x;
while(y = x){
    z = prompt("Ingrese un nuvo numero: ");
    x-1;
    suma = suma + z;
    if(y = 0){
        console.log(suma);
        break;
    
    }
}