(()=>{
  setTimeout(()=>{console.log("this is a timer_1");},1000)
  setTimeout(()=>{console.log("this is a timer_2");},1000)
  setTimeout(()=>{console.log("this is a timer_3");},2000)
  setTimeout(()=>{console.log("this is the longest time");},2**31) // 最大延迟时间，延迟任务会立即执行
  console.log("this is timer_4");
  let timeId = setTimeout(()=>{console.log("i will be pop");},3000) // 延迟任务id
  clearTimeout(timeId) // 删除延迟任务
})()