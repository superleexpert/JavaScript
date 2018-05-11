// window.onload = function(){
//     var obj = {x: 4};
//     console.log(obj.x);
// }

var obj = {x: 431};
console.log(obj.x);

// .instanceof运算符: 此运算符可以判断一个变量是否是某个对象（类）的实例，返回值是布尔类型的
var str = new String("antzone");  
console.log(str instanceof String);

//typeof运算符:此运算符可以返回一个字符串，用语说明元算数的类型
var str = new String("antzone"); 
var strTwo = "antzone";  
console.log(typeof str); 
console.log(typeof strTwo);

// use strict ： 声明严格模式

//原型链
var obj2 = {x: 111, y: 222, z: 333};
console.log(obj2, obj2.y);
delete obj2.y;
console.log(obj2);

// 属性 get set 方法
// delete 删除属性
var cat = new Object();
cat.legs = 4;
cat.name = "kitty";
console.log(cat);
if (cat.hasOwnProperty('legs')) {
    console.log("has legs");
}
var man = {
    age: 28,
    weibo: '@Bosd'
}
console.log(typeof cat);
console.log(typeof man);

// 对象标签、序列化
// proto:原型标签
// class标签
// extensible表示对象是否可扩展

var obj3 = {x: 1, y: true, z:[1, 2, 3], nullVal: null};
var json = JSON.stringify(obj3);
console.log(obj3);
console.log(json);

// OOP
// 基于原型的继承
// prototype:对象上预设的原型属性
function Fool(){
    this.x = 1;
}

Fool.prototype.x = 2;
console.log(Fool.x);
console.log(Fool.prototype.x);

// 测试
function Person(name, age){
    this.name = name;
    this.age = age;
}
console.log("Person class:" + typeof Person);

Person.prototype.hi = function(){
    console.log("Hi my name is" + this.name + "i am" + this.age + "years old now");
}
Person.prototype.LEGS_NUM = 2;
Person.prototype.ARMS_NUM = 2;
Person.prototype.walk = function(){
    console.log(this.name + "is walking");
}

function Student(name, age, className) {
    // call调用父类
    Person.call(this, name, age);
    this.className = className;
}

// 继承Person的prototype方法
// Object.create创建空对象，并且空对象的原型指向Persion；避免直接赋值时给student原型增加属性时Person也跟着增加的错误
Student.prototype = Object.create(Person.prototype);
// constructor指向student本身，如果不设置的话constructor会指向Person
Student.prototype.constructor = Student;

Student.prototype.hi = function(){
    console.log("Hi my name is" + this.name + "i am" + this.age + "years old now" + "and from" + this.className);
}

Student.prototype.learn = function(subject){
    console.log("Hi my name is" + this.name + "is learning" + subject + "at" + this.className + ".");
}

var bosn = new Student("Bosn", 29, "Class3,Grade 2");
console.log("new obj type" + typeof bosn);
bosn.hi;
bosn.LEGS_NUM;
bosn.walk();
bosn.learn('math');



