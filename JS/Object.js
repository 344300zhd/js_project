let obj_1 = {name:1}
let obj_2 = {age:10}
let obj = Object.assign(obj_1,obj_2)
delete obj.name
console.log(obj);