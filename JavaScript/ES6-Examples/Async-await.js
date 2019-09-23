/**
 * Async and Await is the newer way to use or resolve the promises in JS, simply it is syntactical sugar for the javascript
 */

var numbers = ['Zero', 'One', 'Two', 'Three', 'Four'];

/**
 * With the keyword async in front of a method it expected to return a promise even if you return the value
 * @param {*} index of an array
 */
const getNumber = async (index) => {
    if(numbers[index]){
        return numbers[index]; // This is equivalent to Promise.resolve(number[index]);
    }
    throw 'Index Not Found'; 
}

/**
 * Consuming promise with await 
 */

const consumePromise = async () => {
    const number = await getNumber(0);
    console.log(number);
}

consumePromise();

/**
 * Consuming promises with multiple awaits
 * NOTE: If it is synchronous execution it makes sense to use await and assign to multiple variables when the 2nd promise input is dependent on the first one otherwise we can use Promise.all or Promise.race
 */

const consumePromise2 = async () => {
    const numberOne = getNumber(1);
    const numberZero = getNumber(0);

    const numbers = await Promise.all([numberZero, numberOne]); // It will wait until all the Promises were resolved 

    const firstExecutedNumber = await Promise.race([numberZero, numberOne]); // It will wait only for the first promise to resolve

    console.log({ numbers, firstExecutedNumber });
}

consumePromise2();

/**
 * Error handling with async and await
 */

const consumePromise3 = async () => {
    try{
        const numberOne = await getNumber(5);
        console.log(numberOne);
    }
    catch(e){
        console.log(`Error is : ${e}`);
    }
}

consumePromise3();