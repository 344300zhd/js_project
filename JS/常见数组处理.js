// 数组去重
{
  let arr = [1,2,3,4,5,3,5,3]
  let _arr = new Set([...arr])
  console.log("_arr =>",_arr);
}

// 数组过滤虚值
{
  let arr = [1, undefined, null, 2, NaN, true, false, 3]
  let _arr = arr.filter(Boolean) // filter：不改变原数组
  console.log("_arr =>",_arr);
}

// 字符串转换为数字
{
    let s = '123'
    let _s = Number(s)
    let __s = +s
    console.log(_s,typeof _s,__s,typeof __s);
}

// 数字转换成字符串
{
    let num = 123
    let _num = String(num)
    let __num = num + ''
    console.log(_num,typeof _num,__num,typeof __num);
}

// 使用 && 简写判断条件
{
    let flag = true
    function init(){
        console.log("执行成功");
    }
    if(flag){
        init()
    }
    flag && init()
}

// console.table()：打印特定格式的表格
{
    function Goods(name,price){
        this.name = name
        this.price = price
    }
    let book_1 = new Goods('book_1',"$12.00")
    let book_2 = new Goods('book_2',"$2.00")
    let book_3 = new Goods('book_3',"$132.00")
    console.table([book_1,book_2,book_3],['name','price'])
}

// 为了提高数字的可读性，可以使用下划线作为分割线
{
    let num = 100_000_000
    console.log(num);
}