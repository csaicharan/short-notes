{
    var a = 1; // var is the function scope

    let b = 0; // let is blocked scope

    const c = 2; // const is blocked scope
    c = 3; // Syntax error: Not allowed because it is once declared cannot be changed and it is a preemptive typed data , its a immutable data
   
    const d = { a : 1 };
    d.a = 2; // It doesn't throw any error because it is a reference data and its mutable data

}

console.log(a); // 1
console.log(b); // Syntax error: hence let is blocked scope
console.log(c); // Syntax error: hence const is blocked scope

