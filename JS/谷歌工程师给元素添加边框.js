/**
 *   下面是网上很流行的一行代码，据说是谷歌工程师写的，作用是给页面的
 * 所有元素增加一个随机颜色的外边框。
 *   [].forEach.call($$("*"),function(a){
 *     a.style.outline="1px solid #"+(~~(Math.random()*(1<<24))).toString(16)
 *   })
 */

 /*********************************解析****************************/
 /**
  * [].forEach.call
  * 1) [].forEach：forEach是数组遍历的一个方法，接收一个函数参数用来处理每一个
  * 遍历的元素。
  */

  /**
   * [].forEach的常规使用姿势
   * 解释：[].forEach只是为了得到forEach这个方法，这个方法是定义在Array.prototype
   *       上的方法,[]表示空数组，可以访问到数组原型对象上的方法。当我们得到forEach
   *       这个方法后，就可以通过call发起调用。
   **/
  {
      let arr = [1,2,3,4,5]
      arr.forEach((item,index) =>{
          arr[index] = item + 1
      })
      console.log(arr);
  }
  
  /**
   * call的常规使用姿势
   * 解释：call函数用来调用一个函数，和普通调用不同，call可以修改函数内部this
   *       的指向。
   */
  {
      let obj = {
          id:1,
          printId(){
            console.log(this.id);
          }
      }
      let _obj = {
          id:2
      }
      // 下面是正常调用的，方法内部的this指向obj对象本身
      obj.printId()
      // 下面使用call调用obj的printId(),然后传入了_obj对象，那么printId()函数内部的
      // this就是指向_obj这个对象
      obj.printId.call(_obj)
  }