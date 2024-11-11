const friends = ["Rika", "Jacob", "Alex", "Oliver", "Marika"];

function filterItems(arr, query) {
  return arr
    .filter(name => name.toLowerCase().includes(query.toLowerCase()))
    .map(name => `*${name}`)
    .sort();
}

console.log(filterItems(friends, 'ка')); 
console.log(filterItems(friends, 'е'));  
