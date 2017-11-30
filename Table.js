(function (global, factory) {
    typeof module === 'object' && typeof module.exports === 'object' ?  module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    global.Table = factory();
  }(typeof window !== "undefined" ? window : this, function (window) { 
    'use strict';
    
    var OP = Object.prototype
    var has = OP.hasOwnProperty
    /**
     * typeof 类型检测
     * @param   {Mix}      test
     * @param   {String}   type
     * @return  {Boolean}
     */
    function typeOf (test, type) {
        return typeof test === type
    }

    /**
     * 是否是对象
     */
    function isObject (object) {
        return OP.toString.call(object) === '[object Object]'
    }

    /**
     * 是否是数组
     */
    function isArray (array) {
        if(typeOf(Array.isArray,'function')){
            return Array.isArray(array)
        }else{
            return OP.toString.call(array) === "[object Array]"
        }
    }

    /**
     * 是否是函数
     */
    function isFunc (func) {
        return typeOf(func, 'function')
    }

    /**
     * 是否是字符串
     */
    function isString (str) {
        return typeOf(str, 'string')
    }

    /**
     * 是否是布尔值
     */
    function isBool (bool) {
        return typeOf(bool, 'boolean')
    }

    /**
     * 是否是数字
     */
    function isNumber (num) {
        return typeOf(num, 'number') && !isNaN(num)
    }

    /**
     * 是否是null
     */
    function isNull (value){
        return value === null
    }

    /**
     * 是否是undefined
     */
    function isUndefined(value){
        return value === undefined
    }


    /**
     * 是否是空对象
     * @param   {Object}   object
     * @return  {Boolean}
     */
    function isEmptyObject (object) {
        return Object.keys(object).length === 0
    }

    /**
     * 将 value 转化为字符串
     * undefined 和 null 都转成空字符串
     * @param   {Mix}     value
     * @return  {String}
     */
    function _toString (value) {
        return value == null ? '' : value.toString()
    }

    /**
     * value 转成 Number 类型
     * 如转换失败原样返回
     * @param   {String|Mix}  value
     * @return  {Number|Mix}
     */
    function toNumber (value) {
        if (isString(value)) {
            var val = +value
            return isNumber(val) ? val : value
        } else {
            return value
        }
    }

    /**
     * 字符串转数组
     * @param   {String}  str,symbol 
     * @return {Array}
     */
    function stringToArray(str,symbol){
        return str.split(symbol)
    }

    /**
     * 数组转字符串
     * @param {Array} array
     * @return {String}
     */
    function arrayToString(array){
        return array.toString()
    }

    /**
     * 获取id
     * @param {String} id
     * @return {String}
     */
    function getId (id) {
		var fun = document.getElementById;
		return fun.call(document,id)
    }
    
    /**
     * 获取class
     * @param {String} domclass
     * @returns {Array}
     */
    function getClass (domclass) {
      var odiv = document.getElementsByTagName("*");
       var arr=[];
       for(var i = 0; i<odiv.length; i++)
       {
           if(odiv[i].className == domclass)
           {
               arr.push(odiv[i])
           }
           
       }
       return arr;
    }


    /**
     * 空操作函数
     */
    function noop () {}

    var cons = window.console

    /**
     * 打印警告信息
     */
    /* istanbul ignore next */
    function warn () {
        if (cons) {
            cons.warn.apply(cons, arguments)
        }
    }

    /**
     * 打印错误信息
     */
    /* istanbul ignore next */
    function error () {
        if (cons) {
            cons.error.apply(cons, arguments)
        }
    }

    /**
     * 
     * @param {*Array|Object} iterator [数组或对象] 
     * @param {*Function} callback     [回调函数]
     * @param {*Object} context        [作用域] 
     */
    function each (iterator, callback, context) {
        var i, ret

        if (!context) {
            context = this
        }

        // 数组
        if (isArray(iterator)) {
            for (i = 0; i < iterator.length; i++) {
                ret = callback.call(context, iterator[i], i, iterator)
            }

        } else if (isObject(iterator)) {
            var keys = Object.keys(iterator)

            for (i = 0; i < keys.length; i++) {
                var key = keys[i]

                ret = callback.call(context, iterator[key], key, iterator)

            }
        }
    }


    /**
     * 
     * @param {*String} string [移除字符串中所有空格] 
     * @returns {*String}
     */
    function removeSpace (string) {
        return string.replace(/\s/g, '')
    }


    /*
     * 对象自有属性检测
     */
    function hasOwn (obj, key) {
        return obj && has.call(obj, key)
    }

    /**
     * object 定义或修改 property 属性
     * @param  {Object}   object      [对象]
     * @param  {String}   property    [属性字段]
     * @param  {Mix}      value       [属性的修改值/新值]
     * @param  {Boolean}  enumerable  [属性是否出现在枚举中]
     */
    function def (object, property, value, enumerable) {
        return Object.defineProperty(object, property, {
            value: value,
            writable: true,
            enumerable: !!enumerable,
            configurable: true
        })
    }
  
    function Table(opt){
     
          if(opt.isTable){
            new TableList()
          }

          if(opt.isPaging){
              new Paging()
          }
          
  
    }
  
    var tb = Table.prototype
    

    //列表
    function TableList(){

    }

    var tl = TableList.prototype

    //分页
    function Paging(){

    }

    var pg = Paging.prototype



    //编辑
    function Compile(){

    }
    var cp = Compile.prototype

    //单选
    function Radio(){

    }
    var rd = Radio.prototype


    //多选
    function CheckBox(){

    }
    var cb = CheckBox.prototype

    //排序
    function Sort(){

    }
    var st = Sort.prototype



    //自定义索引
    function Index(){

    }
    var nb = Index.prototype

    //提示详情
    function MoveTip(){

    }
    var mt = MoveTip.prototype


    //行展开
    function RowShow(){

    }
    var rs = RowShow.prototype

    //搜索
    function SearchData(){

    }
    var sd = SearchData.prototype

    //动态显示列数
    function Dyncfiled(){

    }
    var df = Dyncfiled.prototype




    //========移动端=================


    //上拉加载更多
    function PullUpMore(){

    }
    var pum = PullUpMore.prototype

    //下拉刷新数据
    function PullDownRefresh(){

    }
    var pdr = PullDownRefresh.prototype








    
  
  
  
  
    return Table;
  
  }))
  