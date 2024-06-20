//#1 paso npm init -y 
//#2 paso npm install prompt-sync
//#6 paso ejecuta tu archivo con node ejercicio1.js

//#4 paso creamos una constante para requerir la dependencia en nuestro archivo y que así funcione el prompt
//const prompt = require("prompt-sync")({ sigint: true });
//#5 paso para utilizarlo debemos simplemente llamar a la función prompt() dentro de una variable LET 
//#6 paso imprime en consola para ver la informacion console.log(`Hola! ${variable}`)

/*Atajo para comentar en multiples lineas SHIFT+ATL+A
Si quisiera ir a comprar 150 gramos de queso a mi fiambrería de confianza, tendría que tener en cuenta las siguientes variables (no pensemos en ellas solo como factores externos, sino como valores de lo cotidiano a tener en cuenta)
Primero tenemos que ver la temperatura en el exterior, eso nos va a determinar la ropa.
1. Temperatura (número)
También deberíamos prestar atención a si llueve o no llueve.
2. ¿Está lloviendo? (booleano)
Cuando salga de mi casa, si vivo en un edificio en algún piso, tendré que ver en qué piso se encuentra el ascensor. Si vivo en una casa, esta variable no es necesaria.
3. Piso del ascensor (número)
Pensándolo bien, antes de salir a la calle, deberíamos saber si la fiambrería va a estar abierta.
4. Hora actual (número)
5. Hora de apertura de la fiambrería (número)
6. Hora de cierre de la fiambrería (número)
Ahora sí, teniendo todo esto en cuenta, voy hasta la fiambrería. Mónica (mi
fiambrera de confianza) sabe que siempre llevo 100 gr. de Queso Dambo
(aunque, entre nosotros, sabemos que nunca es mucho queso)
7. Cantidad de queso (número)
Deberemos pagarle. Sin embargo, ¡nos olvidamos la plata antes de salir! Por suerte, tenemos confianza y nos fía.
8. Deuda con Mónica (número)
Ya podemos volver a casa a disfrutar de nuestro tentempié. 
  */

//#1 Temperatura
let temperatura = parseFloat(prompt("Ingrese temperatura: "));
if (isNaN(temperatura)) {
    console.log("Por favor, introduce una temperatura válida.");
} else if (temperatura < 20) {
    console.log(`Brr! qué frío, abrígate! Temperatura: ${temperatura}°C`);
} else if (temperatura >= 25) {
    console.log(`Qué fresquito, usa ropa ligera. Temperatura: ${temperatura}°C`);
} else {
    console.log(`Temperatura ideal. Temperatura: ${temperatura}°C`);
}

//#2 ¿Esta lloviendo?
let lluvia = prompt("Está lloviendo? escribe S o N: ").toUpperCase();
if (lluvia === "S") {
    console.log("Lleva paraguas");
} else if (lluvia === "N") {
    console.log("No lleves paraguas");
} else {
    console.log("Entrada no válida para la lluvia.");
}
//#3 Piso del ascensor, si es que hay. 
let ascensor = prompt("Hay ascensor? Escribe S o N: ").toUpperCase();

if (ascensor === "S") {
    let llamarAscensor = parseInt(prompt("Ingresa el número de piso para llamar al ascensor: "));
    if (isNaN(llamarAscensor)) {
        console.log("Por favor, introduce un número válido para el piso.");
    } else {
        console.log(`El ascensor se dirige a tu piso ;) Piso: ${llamarAscensor}`);
    }
} else if (ascensor === "N") {
    console.log("Tomo directamente el ascensor, ya está en mi piso");
} else {
    console.log("Entrada no válida para el ascensor.");
}
//#3.1 No hay ascensor entonces tomo directamente el paso 4, horario de trabajo de la fiambreria
// #4 Horario de trabajo de la fiambrería
let horarioApertura = parseFloat(prompt("Escribe el horario de apertura (en formato 24h, ejemplo 9.00): "));
let horarioCierre = parseFloat(prompt("Escribe el horario de cierre (en formato 24h, ejemplo 18.00): "));
let horarioDeFiambreria = parseFloat(prompt("Escribe la hora actual (en formato 24h, ejemplo 14.30): "));

// Validar que las entradas son números válidos
if (isNaN(horarioApertura) || isNaN(horarioCierre) || isNaN(horarioDeFiambreria)) {
    console.log("Por favor, introduce horas válidas.");
} else if (horarioApertura <= horarioDeFiambreria && horarioDeFiambreria <= horarioCierre) {
    console.log("Puedes ir a comprar 150 gramos de queso Dambo.");
} else {
    console.log("Está cerrado, no podemos ir >:(");
}
//#7 Pedir queso a monica
let cantidadQueso = parseFloat(prompt("¿Cuánto queso quieres?: "));
if ( cantidadQueso <= 0){
    console.log(parseFloat(prompt("Che! querida, necesitas pedirme un poco más: ")))
}else if (isNaN(cantidadQueso)){
    console.log(parseFloat(prompt("Pero bueno, si las letras son buenas pero para gramos necesito numeros!, a ver, dame un número: ")));
}else{
    console.log(`Toma cariño, aquí tienes ${cantidadQueso} gramos de queso Dambo.`);
}

// #8 Pagando c:
let deuda = parseFloat(prompt("Tranquila cariño, ya te anoto para que me pagues después - insertar monto de deuda: "));
if (isNaN(deuda) || deuda < 0) {
    console.log("Por favor, introduce un monto de deuda válido.");
} else {
    console.log(`Listo! Me debes ${deuda} luego me lo pagas.`);
}