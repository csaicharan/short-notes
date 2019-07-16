// Destructuring extract array elements or object properties and store them in variables

// In arrays order defines the elements
let [a,b] = ['val1', 'val2'];
console.log(a,b); // Output val1 val2

// Ignores the third values assignment
[a,b] = ['val1-Updated', 'val2-Updated', 'val3'];
console.log(a,b); // Output val1-Updated val2-Updated


// Assigning 1st ans 3rd elements in an array, if element position is unavailable it assigns undefined
[a,,b,c] = ['val1-Updated', 'val2-Updated', 'val3'];
console.log(a,b,c); // Output val1-Updated val3 undefined


// In objects key defines the variable name
let {name} = { name:'Sai', age: '29' };
console.log(name); // Output Sai and rest are ignored

// Assigns undefined if property is not available in the object
let {age, profession} = { name:'Sai', age: '29' };
console.log(age, profession); // Output 29 undefined and rest are ignored