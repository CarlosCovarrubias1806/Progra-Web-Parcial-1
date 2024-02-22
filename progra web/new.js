//let nombreVariable = 'Valor Variable';
//var nombreVariable2 =10;


//let object ={
//propiedad1 =10,
//propiedad2: 'Valor Propiedad 2',
//propiedadObjeto:{
//propiedad4['valor','valor2','valor3']
//propiedad5: 'Valor Propiedad 5',

//}


//};


function nombreFuncion(){
    console.log ('Ejecutando función"Nombre Función')    

}

function nombreConParametros(nombre,apellido,edad){

    let text = "Nombre" "+ nombre +", apellido "+ apellido + "edad "+edad+";
    console.log(text);
}
/** retorna el cuadrado de el numero dado
 * 
 */
function square(number){
           return number * number;
}

function square (number){
    return number*number*number;
}


nombreFuncion();


//CICLO FOR
for(let index=0; index<11; index++){
    let number=number*index;
    console.log(number);
}
//CICLO WHILE
let indexWhile=0;
while(indexWhile<11){
    let number=indexWhile*10;
    console.log(number);
    indexWhile++;
}
//CICLO DO-WHILE
letDoWhile=0;
do{
    let number=indexDoWhile*10;
    console.log(number);
    indexDoWhile++;

} while (indexDoWhile <10);


let numero = 8;
let i = 1;

do {
    console.log(numero + " x " + i + " = " + (numero * i));
    i++;
} while (i <= 10);

function tablaMultiplicarFor(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(numero + " x " + i + " = " + (numero * i));
    }
}

function tablaMultiplicarDoWhile(numero, limite) {
    let i = 1;
    do {
        console.log(numero + " x " + i + " = " + (numero * i));
        i++;
    } while (i <= limite);
}





