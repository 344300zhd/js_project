/**
 * a. js中一切皆对象，函数也属于对象；
 * b. 所有对象都含有__proto__属性，指向的是该对象的构造函数；
 * c. 只有函数才拥有prototype属性，指向该函数的构造函数，值为
 *    一个对象，是该构造函数想要共享的属性和方法；
 * d. 所有函数的默认原型都是Object的实例；
 */
console.log("Object =>",Object);
console.log("Function =>",Function);

console.log("Object.__proto__ =>",Object.__proto__);
console.log("Function.__proto__ =>",Function.__proto__);

console.log("Object.prototype =>",Object.prototype);
console.log("Function.prototype =>",Function.prototype);

console.log(Function.prototype === Object.__proto__);

// 函数对象都是由Function函数生成的
function fun(){}
console.log(fun.__proto__ === Function.prototype);
console.log(fun instanceof Object);
console.log(fun instanceof Function);

// 如果把函数当做对象的时候，那么此时函数也是拥有__proto__属性
console.log(Function.__proto__ === Function.prototype);

// Object函数也是一个函数对象
console.log(Object.__proto__ === Function.prototype);
console.log(Object.__proto__.prototype); // undedined
console.log(Object.prototype.__proto__);