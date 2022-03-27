try{
    console.log("开始执行");
    const a = 1
    a = 2
    console.log(a);
}catch(e){
    console.log("出错原因:" + e);
}finally{
    console.log("错误捕捉");
}