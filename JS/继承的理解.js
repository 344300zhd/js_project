/**
 * 以下是几种继承的优缺点分析
 */

 /**
  * 原型链继承
  * 实现：将父类的实例作为子类的原型
  * 优点：a. 父类的方法可以复用
  * 缺点：a. 父类的所有引用类型属性会被所有子类共享，更改一个子类的属性，
  *          其他子类也会受到影响。
  *       b. 子类型实例不能给父类型的构造函数传参。
  */
{ 
function Parent(name){
    this.name = name
    this.isShow = true
    this.info = {
        name:this.name,
        age:18
    }
}
Parent.prototype.getInfo = function(){
    console.log(this.info);
}
function Child(){

}
Child.prototype = new Parent()

let child_1 = new Child('zhd')
child_1.info.sex = '男'
child_1.getInfo()

let child_2 = new Child()
child_2.getInfo()
}

/**
 * 构造函数继承
 * 实现：在子类的构造函数中调用父类构造函数，可以在子类构造函数中使用
 *       apply()和call()方法。通过使用call()或apply()方法，Parent
 *       构造函数为Child的实例创建了新的执行上下文。就相当于是在新的
 *       Child实例对象上运行了Parent()的方法，所以每个子类的实例都有
 *       自己的info属性。
 * 优点：a. 可以在子类构造函数中向父类传参数。
 *       b. 父类的引用属性不会被共享。
 * 缺点：a. 子类不能访问父类原型上定义的方法，即不能访问Parent.prototype
 *          上定义的方法，因此所有方法属性都写在构造函数中，每次创建实例
 *          都会被初始化。
 */
{
    function Parent(health){
        this.info = {
            name:"yhd",
            age:19
        }
        this.health = health
    }
    function Child(health){
        Parent.call(this,health)
    }
    let child_1 = new Child('健康')
    child_1.info.sex = '男'
    console.log(child_1.info,child_1.health);
    let child_2 = new Child()
    console.log(child_2.info);
}


/**
 * 组合继承
 * 实现：组合继承综合了原型链继承和构造函数继承，将两者的优点结合起来。
 *       基本的思路就是使用原型链继承原型上的属性和方法，而通过构造函数
 *       继承实例的属性，这样既可以把方法定义在原型上以实现复用，又可以
 *       让每个实例都拥有自己的属性。
 * 优点：a. 父类的方法可以复用；
 *       b. 可以在Child构造函数中向Parent构造函数中传参；
 *       c. 父类构造函数中的引用类型不会被共享；
 */
{
    function Parent(name){
        this.name = name
        this.colors = ['red','green','yellow']
    }
    Parent.prototype.sayName = function(){
        console.log(this.name);
    }
    function Child(name,age){
        Parent.call(this,name)
        this.age = age
    }
    Child.prototype = new Parent()
    Child.prototype.sayAge = function(){
        console.log(this.age);
    }
}

/**
 * 原型继承
 * 实现：其实就是对参数对象的一种浅复制。有点像ES5的Object.create()方法在只有第一个参数
 *       的时候，效果相同。
 * 缺点：a. 父类的引用会被所有所有子类所共享
 *       b. 子类实例不能向父类传参
 */
{
    function objCopy(obj){
        function fun(){} 
        fun.prototype = obj
        return new fun()
    }
}

/**
 * 寄生式继承
 * 实现：使用原型继承对一个目标对象进行浅复制，增强这个浅复制的能力。
 */
{
    function objCopy(obj){
        function Fun(){}
        Fun.prototype = obj
        return new Fun()
    }
    function createAnother(original){
        let clone = objCopy(original)
        clone.getName = function(){
            console.log(this.name);
        }
        return clone
    }
}

/**
 * 寄生式组合继承
 * 实现：寄生式组合继承可以算是引用类型继承的最佳模式
 * 优点：a. 只调用一次父类的构造函数
 *       b. Child可以向Parent传参
 *       c. 父类的方法可以复用
 *       d. 父类的引用属性不会被共享
 */
{
    function objCopy(obj){
        function Fun() {}
        Fun.prototype = obj
        return new Fun()
    }
    function inheritPrototype(child,parent){
        let prototype = objCopy(parent.prototype);// 创建对象
        prototype.custructor = child;// 增强对象
        Child.prototype = prototype;// 赋值对象
    }
    function Parent(name){
        this.name = name
        this.friends = ['rose','lily','tom']
    }
    Parent.prototype.sayName = function(){
        console.log(this.name);
    }
    function Child(name,age){
        Parent.call(this,name)
        this.age = age
    }
    inheritPrototype(Child,Parent)
}