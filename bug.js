function foo(a,b){return a+b;}let x = foo(2,3);console.log(x); // Output: 5
function foo(a,b){return a-b;}let x = foo(2,3);console.log(x); // Output: -1
The bug is that when calling the function foo multiple times, with different implementations each time, the last implementation takes effect.  This is because the function is being redefined.  In most cases, this behavior may not be intuitive or expected.