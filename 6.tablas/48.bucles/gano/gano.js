//Definí una función gano que reciba como argumento un array tragamonedas  con 5 símbolos y nos indique si son iguales. Si el array tiene más de 5 símbolos, sólo debe comparar los 5 primeros.
/*
gano(['⭐ '⭐️', '⭐️', '💫', '✨']) // 
false
gano(['💫', '💫', '💫', '💫', '💫']) 
true
gano(['💫', '💫', '💫', '💫', '💫', '⭐️']) 
true*/

/* 1. el primer elemento va a definir el resto. Una vez que encuentro alguno diferente retorna falso.
2. tiene que parar a la vuelta 5
- contador que vaya incrementando en 1 por vuelta
- usar indice
*/

const gano = (tragamonedas) =>{
    const simboloPrimero = tragamonedas [0];
    let contador = 0;
    for (const simbolo of tragamonedas){
        if (simbolo !== simboloPrimero){
            return false;
        }

        contador++
        if(contador === 5){
            return true;
        }
    }
}


