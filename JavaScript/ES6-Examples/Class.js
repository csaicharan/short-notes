// ES 6 Class Syntax
class ClassA{

    constructor(){
        this.prop1 = 'Class A Prop 1'; // Sending Args while creating and object and assigning the prop2 value
    }

    method1 = () => { // Method declaration
        console.log(this.prop1);
    }
}

// ES 6 Creating an object
const ObjOfClassA = new ClassA('Ar1Value');

class ClassB extends ClassA{
    constructor(){
        super(); // Should call the super because to execute the super class's construction. 
        this.prop2 = 'Class B Prop 2';
    }
    method2(){
        console.log(this.prop2);
    }
}

const ObjOfClassB = new ClassB('Ar2Value');
ObjOfClassB.method2() // Class B Prop 2
ObjOfClassB.method1() // Class A Prop 1


// Equivalent ES Next syntax

class ClassA{
    prop1 = "Class A Prop 1";
    method1 = () => {};
}

class ClassB extends ClassA{
    prop2 = "Class B Prop 1";
    method2 = () => {};
}

// No need of constructor