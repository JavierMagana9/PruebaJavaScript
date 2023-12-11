//Necesitamos una funcion que admita como argumentos una letra y un string
//crear un bucle que itere de arriba a abajo el string en busca de la letra dada, podria ser un metodo
//Un lugar donde almacenar las letras
//Crear un condicional para que decida si se suma en el contador o no

//crear un condicional que nos diga si esta esa letra o no



const cuentaLetras = (letra, unString) => {
   let resultado = 0;
   for(let i = 0; i < unString.length; i++){
        if(letra[i] === unString[i]) {
            resultado += 1;
        }
         
   }
   return resultado;
}
cuentaLetras("s", "Sus majestades");

/*/////////////////////////////////////////////////////////
                    EJERCICIO 2
////////////////////////////////////////////////////////*/ 


//crear un prompt para el usuario, que sea type num
//añadir 50 numeros consecutivos con un bucle
//averiguar si son impares con condicional 



const pedirNumero = numero => {
     numero = parseInt(prompt("Escribe tu numero aquí debajo: "))
    sonImpares(numero)
}


const sonImpares = numero => {

     for(let i = numero; i <= 50; i++) {
        if(i % 2 != 0) {
            console.log(i)
        }

     }  
     
}

pedirNumero()
