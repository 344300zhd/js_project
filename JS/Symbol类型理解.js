/**
 * 作为对象的属性名，可以避免属性名覆盖
 */
let name = Symbol()
let obj = {
    name:'zhd'
}
console.log(obj.name);