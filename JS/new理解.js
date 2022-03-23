/**
 * @description 手写new
 */
function $new(){
  // 创建新的对象
  let target = {}
  // 第一个参数是构造函数,第二个参数是参数 
  let [constructor,...args] = [...arguments]
  // 执行原型连接，target是constructor的实例
  target.__proto__ = constructor.prototype
  // 执行构造函数，将属性和方法添加到创建的空对象上。
  let result = constructor.apply(target,args)
  if(result && (typeof (result) == "object" || typeof (result) == "function")){
    // 如果构造函数执行的结构返回的是一个对象，那么就返回这个对象
    return result
  }
  return target
}

/****************************** TEST  *******************************************/
function People(name,age){
  this.name = name
  this.age = age
}
let people = new People("zhd",20)
console.log(people);
let _people = $new(People,"zhd",20)
console.log(_people);