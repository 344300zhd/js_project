module.exports = {
    getNowTime:()=>{
        // 获取当前时间
        let date = new Date()
        // 获取年份
        let year = date.getFullYear()
        // 获取月份
        let month = date.getMonth() + 1 >= 10 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`
        // 获取天数
        let day = date.getDate() >= 10 ? date.getDate() : `0${date.getDate()}`
        // 获取小时
        let hour = date.getHours() >= 10 ? date.getHours() : `0${date.getHours()}`
        // 获取分钟
        let minute = date.getMinutes() >= 10 ? date.getMinutes() : `0${date.getMinutes()}`
        // 获取秒数
        let second = date.getSeconds() >= 10 ? date.getSeconds() : `0${date.getSeconds()}`
        return `${year}-${month}-${day} ${hour}:${minute}:${second}`
    }
}