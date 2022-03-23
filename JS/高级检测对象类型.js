/**
 * 检测对象类型
 */

// 检测对象类型一般姿势
function getTypeLower(obj){
    return Object.prototype.toString.call(obj)
}
// 检测对象类型高级姿势
let getType = Function.prototype.call.bind(Object.prototype.toString)

console.log(getType({}),getTypeLower({}));
console.log(getType([]),getTypeLower([]));
console.log(getType(1),getTypeLower(1));
console.log(getType('zhd'),getTypeLower('zhd'));
console.log(getType(Symbol('1')),getTypeLower(Symbol()));
console.log(getType(new Date()),getTypeLower(new Date()));