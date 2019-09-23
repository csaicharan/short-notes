/**
 * Consider this render blocking JS
 */


function renderBlockingJs() {
    console.log('Start');
    console.time('Looping');
    let i = 0;
    while (i < 4000000000) {
        i++;
    }
    console.timeEnd('Looping');
    console.log('End');
}

//Blocks the code until while is executed

// TODO: Uncomment me to check the blocked output
// renderBlockingJs();

// Converting the above example in Promise

function renderPromise1() {
    return new Promise((resolve, reject) => {
        console.time('Looping');
        let i = 0;
        while (i < 4000000000) {
            i++;
        }
        console.timeEnd('Looping');
        resolve('Loop is executed');
    })
}

function PromiseRenderBlockingJs() {
    console.log('Start');
    console.time('promiseRenderBlock');
    renderPromise1().then((res)=>{
        console.log(res);
    })
    console.timeEnd('promiseRenderBlock');
    console.log('End');
}

/**
 * We should be careful while using this type of promises, because instead it is going to execute in micro tasks it will execute in main thread related to ES6
 */

// TODO: Uncomment me to check the blocked output in promise way
// PromiseRenderBlockingJs();

function renderPromise2(){
    return Promise.resolve().then(()=>{
        console.time('Looping');
        let i = 0;
        while (i < 4000000000) {
            i++;
        }
        console.timeEnd('Looping');
        return('Promise Done');
    });
}

function PromiseRenderWithOutBlock() {
    console.log('Start');
    console.time('promiseRenderBlock');
    renderPromise2().then((res)=>{
        console.log(res);
    })
    console.timeEnd('promiseRenderBlock');
    console.log('End');
}

/**
 * Here it will return without blocking the main thread
 */

PromiseRenderWithOutBlock();