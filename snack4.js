var parola = prompt('parola da trasformare')

function cap(a) {
    return a.charAt(0).toUpperCase() + a.slice(1).toLowerCase();
}
  
var ris = cap(parola)

console.log(ris);