alert("Bienvenido a tu simulador de conteo de Reps, te ayudaré a contar las repeteciones por wod de todos los equipos")

// WOD N° 1 

let vueltas, multiplo, equipos, reps, totalReps, i, repsVuelta, nombre, wod, n=0

// funciones

const multiplicar = (num1=0, num2=0) => num1 * num2

const sumar =(num1=0, num2=0) => num1 + num2

wod= parseFloat(prompt("ingrese la cantida de WODS para esta competencia"))

do{

do {

multiplo = prompt("por favor ingrese el numero de repeticiones que contiene este WOD con un número entero siguiendo el proximo ejemplo: 10 pull ups - 20 clean -15 HSPU, esto corresponderia a un total de reps por vuelta de 45")

console.log ("repeticiones del WOD" , multiplo)

equipos = prompt("ingrese el numero de equipos que participa en la competencia")

console.log("La cantidad de equipos es" , equipos)

}while (isNaN(multiplo) || isNaN(equipos))

i =0
do {
do {
    nombre=prompt("ingrese el nombre del equipo").toLocaleUpperCase()

    vueltas= parseFloat(prompt("ingrese el numero de vueltas del equipo "+ nombre))

    console.log("la cantidad de vueltas para el equipo"+ nombre+  "es" ,vueltas)

    reps = parseFloat(prompt("ingrese el numero de repeticiones del ejericio que no termino"))

    console.log("N° de reps en la vuelta sin terminar es " , reps)

    } while(isNaN(vueltas)|| isNaN(reps))

repsVuelta= multiplicar (vueltas, multiplo)

totalReps= sumar(repsVuelta, reps)

alert("El numero de reps para el equipo" + nombre + "es de"+ totalReps)
i++

}while(i !=equipos )
n++

}while(n != wod)

