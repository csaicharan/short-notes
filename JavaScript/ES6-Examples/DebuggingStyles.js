// Debugging in style in Javascript and logging optimization techniques


const Log1 = "Log 1 text";
const Log2 = "Log 2 Text";

console.log({Log1, Log2}); // Context based Debugging


// Pretty logs : NOTE - Only works in the browser 

console.log('%cPretty Logs', 'background-color:red;color:white;padding:5px;');

// consoling tabular data, pretty tables in console

const TableData = [ { id: 1, name: 'Row 1', col: 'Extra Col'}, { id: 2, name: 'Row 2', col: 'Extra Col'}, { id: 3, name: 'Row 3', col: 'Extra Col'} ];

console.table(TableData);

// Console groups, to group the bunch of console statements

console.group('Name Of The group');
console.log(Log1);
console.log(Log2);
console.groupEnd();


// Pretty useful in the newly assigned projects, outputs from where it is getting called


function f1(){
    console.trace();
}

function f2(){
    f1();
}

f2();


// DOM traversing and related DOM element info and trees with the configuration

console.dir(TableData, { colors : true, depth: null });


// Always know Debugger is the way to rescue


// Proxying prod with local static files to debug with 
// Resource Override, https://chrome.google.com/webstore/detail/resource-override/pkoacgokdfckfpndoffpifphamojphii?hl=en
// Charles Proxy, https://www.charlesproxy.com/
// Fiddler, https://www.telerik.com/fiddler


// Reference Link : https://www.youtube.com/watch?v=TtsvMRxmfGA By Rebecca Hill