// Spread or rest operators are notated by Three dots (...)

// Spread operator is used to split up the elements in array or object properties

// Spread operator for An Array
let TestArray = [ 1,2,3 ];

console.log(...TestArray, TestArray); // Output is 1 2 3 [1, 2, 3]

// Concatenation of two arrays using spread operator
let Arr1 = [1,2], Arr2 = [2,4];
let Arr3 = [...Arr1, ...Arr2];

// Its spread all elements in two arrays and created a new array 
console.log(Arr3); // Output [ 1, 2, 2, 4 ]
console.log([Arr1, ...Arr2]); // Output [ [ 1, 2 ], 2, 4 ]

let Arr4 = [...Arr3, 1,2,3 ];

// Spreading and adding elements in an array
console.log(Arr4) // Output [ 1, 2, 2, 4, 1, 2, 3 ]

// Spread Operator for an Object it works as Object.assign with the shorter notation
let TestObj = { a:1, b: 2, c:3 };

console.log({ ...TestObj }); // { a:1, b:2, c:3 }

// Overriding and adding an object's property and it doesn't change the existing object
console.log({ ...TestObj, c:4, d:5 }, TestObj); // { a:1, b:2, c:4, d:5 } { a:1, b:2, c:3 }


// Rest operator is used to merge a list of function arguments into an Array

// The following method takes all of the arguments and returns an array of sorted arguments
function SortArgs(...Args){
    return Args.sort();
}

console.log(SortArgs(1,4,2,3,5,7,3,2,1)); // Output [ 1, 1, 2, 2, 3, 3, 4, 5, 7 ]