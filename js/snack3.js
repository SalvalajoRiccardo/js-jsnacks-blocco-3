var lettere = ['a','b','c'];

var numeri = [1,2,3];

var risultato = add(lettere,numeri);

console.log(risultato);

// funzione
function add(a,b) {
    var vuoto = [];
    for (var i = 0  ; i < a.length; i++) {
        var y = a[i];
        var z = b[i];
        vuoto.push(y,z);
        
    }
    return vuoto;
}


