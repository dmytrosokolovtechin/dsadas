"use strict"

const fish = +prompt("Kiek žuvų gyvena akvariume?");
const fish_days = +prompt("Kiek žuvų į akvariumą įdedama kiekvieną dieną?");
const days = +prompt("Kiek dienų praėjo?");
 
let sum = (fish + fish_days * days)
console.log('Po', days, 'dienų akvariume gyvens', sum, 'žuvų' )
