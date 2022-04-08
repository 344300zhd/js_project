// 生成随机数组
function getRandomArray(n){
    let array = []
    for(let i = 0;i<(n || 1000);i++){
        array.push(Math.round(Math.random() * 1000))
    }
    return array
    // 去重
    // return [...(new Set([...array]))]
}
// sort排序
{
    console.time("sort 排序用时 =>")
    let array = getRandomArray();
    array.sort((a,b) => { return a-b })
    console.log("array =>",array,array.length);
    console.timeEnd("sort 排序用时 =>")
}
// 冒泡排序：依次比较两个相邻的值，如果后者较小，则交换两者顺序
{
    let array = getRandomArray()
    console.time("冒泡排序用时 =>")
    for(let i = 0;i<array.length;i++){
        for(let j = i+1;j<array.length;j++){
            if(array[j] < array[i]){
                [array[i],array[j]] = [array[j],array[i]]
            }
        }
    }
    console.log("array =>",array,array.length);
    console.timeEnd("冒泡排序用时 =>")
}
// 选择排序：依次选出最小的值，然后将其放在数组中
{
    let array = getRandomArray()
    console.time("选择排序 =>")
    let minIndex = 0;
    for(let i = 0;i<array.length;i++){
        minIndex = i;
        for(let j = i+1;j<array.length;j++){
            if(array[j] < array[minIndex]){
                minIndex = j
            }
        }
        [array[i],array[minIndex]] = [array[minIndex],array[i]]
    }
    console.log("array =>",array);
    console.timeEnd("选择排序 =>")
}
// 插入排序：依次比较当前值与已排序的值，找到当前值在已排序的数组中的合适位置插入
{
    let array = getRandomArray()
    console.time("插入排序 =>")
    for(let i = 0;i<array.length;i++){
        for(let k = 0;k<i;k++){
            if(array[i] < array[k]){
                [array[i],array[k]] = [array[k],array[i]]
            }
        }
    }
    console.log("array =>",array);
    console.timeEnd("插入排序 =>")
}