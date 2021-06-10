var pool = ['mario', 'tulio', 'vercingetorige', 'barabba']

var a = prompt('inserisci un numero tra 1 e inferiore a ' + pool.length); 

var b = prompt('inserisci un numero superiore al primo e massimo ' + pool.length) 

while (a > b || b > pool.length) {
    alert  ('hai sbagliato riprova')

    var a = prompt('inserisci un numero tra 1 e inferiore a ' + pool.length); 

    var b = prompt('inserisci un numero superiore al primo e massimo ' + pool.length) 
}

var risultato = trovaPool(pool,a,b)
console.log(risultato);


// funzione

function trovaPool(array,x,y) {
    var ris = [];
    for(i = x-1; i < y; i++) {
        ris.push(' ' + array[i])  
    }
    return ris;
}