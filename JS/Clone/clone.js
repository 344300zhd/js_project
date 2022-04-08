// 浅拷贝：Object.assign({},obj)，将一个或多个对象的可枚举属性复制到目标对象
{
    let target = {name:"zhd",age:23,grade:{name:"chinese",value:93}};
    let obj = Object.assign({},target)
    target.grade.value = 100
    console.log("obj =>",obj);
}
// 浅拷贝：Object.create(obj)，创建一个以 obj 为原型对象的新对象
{
    let target = {name:"zhd",age:23,grade:{name:"chinese",value:93}}
    let obj = Object.create(target);
    console.log(obj.name,obj.age);
}
// 浅拷贝：Array.prototype.cancat()
{
    let target = [1,2,{name:"123"}];
    let array = target.concat();
    target[2].name = "abc";
    console.log("array =>",array);
}
// 浅拷贝：Array.prototype.slice()
{
    let target = [1,2,{name:"123"}];
    let array = target.slice();
    target[2].name = "abc";
    console.log("array =>",array);
}
// 深拷贝：序列化和反序列化
{
    let target = {name:"zhd",grade:{name:"chinese",value:90}}
    let obj = JSON.parse(JSON.stringify(target));
    target.grade.value = 100;
    console.log("obj =>",obj);
}
// 深拷贝：最佳方案 lodash cloneDeep
{
    let _ = require('../plugins/loadsh/lodash');
    let target = {name:"zhd",grade:{name:"chinese",value:90}}
    let obj = _.cloneDeep(target)
    target.grade.value = 100
    console.log("obj =>",obj);
}