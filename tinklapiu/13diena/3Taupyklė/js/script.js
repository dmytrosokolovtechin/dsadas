"use strict"

const a = +prompt("Kiek yra monetų po 5 ct?");
const b = +prompt("Kiek yra monetų po 20 ct?");
const c = +prompt("Kiek yra monetų po 2 Lt?");
 
let sum = ((5 * 5) + (20 * b) + (200 * c))
console.log('Taupyklėje yra', sum / 100, 'Lt' )
