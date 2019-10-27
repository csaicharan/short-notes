/*
    The following are the ways to creating objects in JavaScript
    First of all what the Objects in Javascript
    Every non primitives are Objects in Javascript. So we can call everything might be an object in JavaScript
    Javascript is built with the flexibility, later on it becomes confusing to the most of the developers
    Javascript is Dynamic typed and scripting language which has lot flexibility of using an objects 
*/

/*
    Primitive Types
    ===================================================== 
    Every non primitives are Objects and even in primitives null is also an Object then we call everything in javascript might be an Object

    null
    undefined
    Boolean
    Stirng
    number
    symbol
    bigint

*/

/*
    Primitives are stored in Call stack and the every Objects references are stored in Heaps, so Primitives are faster compared to Objects
    Object values can be accessed with brackets notion or dot notation [] or .

    [] mostly will be used to define dynamic values key, so we can generate random key and sets the value
*/



const Obj1 = {}; // Adding to the properties and next it will creates new hidden classes when we add any keys dynamically
const Obj2 = Object.create({}); // It creates __proto__ properties to the new Object based on the old object
const Obj3 = new Object(); // It executes a constructor when we are creating an Object


function Class(){
    this.property = 'Property';
    this.method = function(){

    }

    constructor(){
        // I will be called when Object is created with this class
    }
} // The modern javascript's class syntax is basically a syntactical sugar of this function based class


Object.assign() // Is used to copy the values from one object to another Object and same concept is used when we use spread operator in Object
// And keep a not it only shallow copies enumerated values and it doesn't copy __proto__ and trees will be referenced.

//  Reference Links https://www.youtube.com/watch?v=napDjGFjHR0 by Fireship

