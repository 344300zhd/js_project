/**
 * 判断str_1和str_2是否为同构字符串
 * @param {String} str_1 
 * @param {String} str_2 
 * @return true:是同构字符串;false:不是同构字符串
 */
function isIsomorphic(str_1,str_2){
    if(str_1 == str_2 || str_1 == '' || str_2 == '') return true
    if(str_1.length != str_2.length) return false
    let map_1 = new Map(),map_2 = new Map()
    for(let i = 0;i<str_1.length;i++){
        // 核心判断
        if(map_1.has(str_1[i]) || map_2.has(str_2[i])){
            if(map_1.get(str_1[i]) != map_2.get(str_2[i])) return false
        }
        map_1.set(str_1[i],i)
        map_2.set(str_2[i],i)
        console.log(map_1,map_2);
    }
    return true
}
let [str_1,str_2] = ['saper','title']
console.log(str_1 + '和' + str_2 +"是否同构：" + isIsomorphic(str_1,str_2));