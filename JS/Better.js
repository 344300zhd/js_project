// 关于取值的优化--解构赋值
function qunZhi(){
    let obj = {a:1,b:2,c:3}
    // 常见写法
    let a1 = obj.a
    let b1 = obj.b
    let c1 = obj.c
    let f1 = a1 + b1 + c1
    // 优化写法
    let {a,b,c} = obj
    let f = a + b + c
    console.log("取值常见写法 =>",a1,b1,c1,f1);
    console.log("取值优化写法 =>",a,b,c,f)
}

// 关于合并数组和对象优化--扩展运算符
function concat(){
    let a1 = [1,2,3]
    let a2 = [1,4,5]
    let obj1 = {a:1}
    let obj2 = {b:1}
    // 常见写法
    let a3 = a1.concat(a2) // 合并数组，未去重 
    let obj3 =  Object.assign({},obj1,obj2)
    console.log("合并常见写法 =>",a3,obj3);
    // 优化写法
    let _a3 = [...new Set([...a1,...a2])]
    let _obj3 = {...obj1,...obj2}
    console.log("合并优化写法 =>",_a3,_obj3);
}

// 关于拼接字符串优化
function stringFun(){
    let name = '小明'
    let score = 90
    let result = ''
    let _result = ''
    // 常见写法
    if(score >= 90){
        result = `${name}-${score}：成绩优良`
    }else{
        result = `${name}-${score}：成绩合格`
    }
    // 优化写法
    _result = `${name}-${score}：成绩${score >= 90 ? '优良' : '合格'}`
    console.log("拼接字符串常见写法 =>",result);
    console.log("拼接字符串优化写法 =>",_result);
}

// 关于if中判断条件的优化
function ifBetter(){
    let condition = 1
    // 常见写法
    if(condition == 1 || condition == 2 || condition == 3){
        console.log("if判断常见写法 => 符合条件");
    }
    // 优化写法
    let conditionArray = [1,2,3]
    if(conditionArray.includes(condition)){
        console.log("if判断优化写法 => 符合条件");
    }
}

/**
 *   在项目中，一些没有分页的列表的搜索功能由前端来实现，
 * 搜索一般分为精确搜索和模糊搜索。搜索也叫过滤，一般使
 * 用filter来实现。但是使用filter就算找到了关键字也会继
 * 续搜索，这样的话会影响性能。而find方法中找到符合条件
 * 的项，就不会再继续遍历数组。
 */
function searchBetter(){
    let a = [1,2,3,4,5]
    let result = a.filter((item) => {
        console.log("常见搜索 =>",item);
        return item == 2
    })
    console.log("常见搜索获取的结果 =>",result);
    let _result = a.find((item) => {
        console.log("优化搜索 =>",item);
        return item == 2
    })
    console.log("优化搜索获取的结果 =>",_result);
}

/**
 *   扁平化数组优化
 */
function arrayBetter(){
    const a = [1,[2,3],[4,5,6],[7,8,9]]
    let result = []
    // 常见扁平化数组
    for(let key in a){
        const value = a[key]
        if(Array.isArray(value)){
            result = [...result,...value]
        }else{
            result.push(value)
        }
    }
    result = new Set([...result])
    console.log("原先数组扁平化 =>",result)
    // 数组扁平化优化
    let _result = a.flat()
    console.log("优化数组扁平化 =>",_result)
}

// 优化获取对象属性值
function objBetter(){
    let obj = {name:"zhd"}
    // 原先对象取值
    let name = obj && obj.name
    console.log("原先对象取值 =>",name)
}

/**
 * 优化对象添加属性
 */
function objAddBetter(){
    let obj = {}
    let _obj = {}
    let index = 1
    let key = `topic${index}`
    obj[key] = '话题内容'
    console.log("原先添加对象属性 =>",obj)
    _obj[`topic${index}`] = '话题内容'
    console.log("优化添加对象属性 =>",_obj)
}

/**
 * 优化输入框非空判断
 */
function isNullBetter(){
    let value = null
    if(value != null || value != undefined || value != ''){
        console.log("原先判断非空 => 非空")
    }
    // if((value ?? '') !== ''){
    //     console.log("优化判断空值 => 非空")
    // }
}

/**
 *   优化异步函数
 */
function promiseBetter(){
    // 回调地狱
    const fn1 = () => {
        return new Promise((resolve,reject) =>{
            setTimeout(()=>{
                resolve("我起床了")
            },300)
        })
    }
    const fn2 = () => {
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve("我吃早餐了")
            },600)
        })
    }
    const fn = (() => {
        fn1().then(res1 => {
            console.log(res1 + " => 现在可以吃早餐了")
        })
        fn2().then(res2 => {
            console.log(res2 + " => 现在可以去上学了")
        })
    })()
    // 优雅异步
    const _fn = (async() => {
        const res1 = await fn1()
        const res2 = await fn2()
        console.log(res1 + " => 现在可以优雅的去吃早餐了")
        console.log(res2 + " => 现在可以优雅的去上学了")
    })()
    // 并发请求
    const fnAll = (() => {
        Promise.all([fn1(),fn2()]).then(res => {
            console.log("并发请求 =>",res)
        })
    })()
}

const start = ()=>{
    // qunZhi()
    // concat()
    // stringFun()
    // ifBetter()
    // searchBetter()
    // arrayBetter()
    // objBetter()
    // objAddBetter()
    // isNullBetter()
    promiseBetter()
}


export default {start}