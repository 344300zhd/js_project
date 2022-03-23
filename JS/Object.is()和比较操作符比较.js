console.log('123' == 123);
console.log(-0 == +0);
console.log(null == undefined);
console.log("");

console.log(-0 === +0);
console.log(null === undefined);
console.log(NaN === NaN);
console.log('123' === 123);
console.log("");

console.log(Object.is(-0,+0));
console.log(Object.is(NaN,NaN));