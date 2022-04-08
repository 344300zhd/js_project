/**
 * 函数防抖(debounce)
 * 解释：
 *   当持续触发某事件时，一定时间间隔内没有再触发事件时，事件处理函数
 * 才会执行一次，如果设定的时间间隔到来之前，又一次触发了事件，就重新
 * 开始延时。
 */
module.exports = {
    debounce:function(fn,delay){
        const timeout = null
        return function(){
            if(timeout != null) clearTimeout(timeout)
            setTimeout(fn,delay)
        }
    },
    throttle:function(fn,delay){
    } 
}
