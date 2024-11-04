"use strict"

const pirmadienis = +prompt("Kiek pamoku yra pirmadieni?");
const antradientis = +prompt("Kiek pamoku yra antradienti?");
const treciadientis = +prompt("Kiek pamoku yra treciadienti?");
const ketvirtadienis = +prompt("Kiek pamoku yra ketvirtadieni?");
const penktarienis = +prompt("Kiek pamoku yra penktarieni?");


let sum = ( pirmadienis + antradientis + treciadientis + ketvirtadienis + penktarienis)
let minut = (sum * 45)
console.log('Pamokų skaičius:', sum , 
'Tai sudaro minučių:', minut

 )

