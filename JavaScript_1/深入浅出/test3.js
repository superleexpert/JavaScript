// 数组，数组是弱类型的，可以把不同类型放到同一个数组里，size from 0 to 2^23 - 1
// 通过自变量创建数组
var arr = [1, true, null, undefined, [1, 2, 3], {x: 1}];
console.log(arr[2]);
// 通过Array构造器创建数组
var arr2 = new Array(10);
var arr3 = new Array(1, 2, 55);
delete arr3[1];
console.log(arr3);
arr3.push("myTest");
console.log(arr3);
arr3.unshift(0); // 增加头部元素

// 二维数组
// 稀疏数组：并不含有从0开始的连续索引，一般length属性值比实际元素个数大

// 数组方法
// Array.prototype.
// sort reverse 排序
// concat合并数组
// slice返回部分数组
// splice数组拼接

// 数组遍历
var arr4 = [1, 2, 3, 4, 5];
arr4.forEach(function(x, index, a){
    console.log(x + '|' + index + '|' + (a === arr));
});

// 数组映射
var arr5 = [1, 2, 3];
arr.map(function(x){
    return x + 10;
});

// 数组过滤filter
// 数组判断every some
// reduce输入值后可进行计算后返回结果值，reduceRight聚合结果
// 数组检索 indexOf lastIndexOf
// isArray判断是否为数组

// 总结
// VS 一般对象
// 相同：都可以继承，是对象，对象不一定是数组，都可以当做对象添加删除属性
// 不同：数组自动更新length，按索引访问数组常常比访问一般对象属性明显迅速。

// ---
// 函数
// 函数的length表示它形参的个数
// 没有return默认返回undefined
// 函数声明
// 函数表达式
(function(){
// 立即执行函数表达式
})();
// 区别：函数声明会别提前
// Function函数构造器
// var func1 = new Function('a', 'b', 'console.log(a + b');
// func1(1, 2);
// 全局的this（浏览器）指的是window
// call/apply
function add(c, d){
    return this.a + this.b + c+ d;
}
var o = {a:1, b: 3};
add.call(o, 5, 6);//扁平传参数
add.apply(o, [10, 24]);//作为数组传递
function bar(){
    console.log(Object.prototype.toString.call(this));
}
bar.call(7);

// 函数属性和方法
// bind可以改变函数this，可以颗粒化

// 闭包 可以封装一些复杂的函数逻辑，可以访问函数里面的变量 
// 滥用闭包会导致性能和空间的浪费
!function(){ // 立即执行的匿名函数
    console.log("local data:" + "got");

    var localData = "localData hear";
    document.addEventListener('click', function(){
        console.log("local data:" + localData);
    });
}();


// OOP补充：
// 模拟重载
// 调用子类方法
// 链式调用
// 抽象类
// defineProperty（ES5）



