// Normal notation of a function 

function Test(){

}

// Arrow function has wide range of notations depending on the number of arguments and the number of lines based on return statement

// Basic Syntax with no Args

const Test = () => {};

const Multiply = Arg1 => Arg1 * 2; // Here it takes one argument and returns the multiplication of an argument

// Multiple statements and void functions
const Test2 = (Arg1, Arg2) => {
    console.log(Arg1);
    console.log(Arg2);
    return; // Can return something with statement
}

// NOTE: The advantage of the Arrow function is by default this context is binded to the function