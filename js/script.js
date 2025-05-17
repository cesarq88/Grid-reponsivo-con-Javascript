let nombre="Juan"
let edad="40"
let trabaja= true
let info={
    marca:"Toyota",
    modelo : "Yaris",
    year: 2015
}
let  count=3; 
while(count >=0){
    console.log(count)
    count=count -1;
}


let parrafo= document.createElement("p");
parrafo.innerText="hola";
parrafo.style.color="red";
document.body.appendChild(parrafo);

let titulo= document.createElement("h1");
titulo.innerText="CLASE DE JAVASCRIPT";
titulo.style.color="BLUE";
document.body.appendChild(titulo);

function suma (a, b ){
    return a+b;
}
function resta(a,b){
    return a-b;
}
function multiplicacion(a,b){
    return a*b;
}
function division (a,b){
return a/b;
}

let a= 3 
let b= 2 
let opcion=2 
 switch (opcion ){
    case 1 :
        console.log(suma(a,b))
        break;

    case 2 :
        console.log(resta(a,b ))
        break;
    case 3 :
        console.log(multiplicacion(a,b))
        break;
    case 4 : 
    console.log(division(a,b))
    break; 

 }



