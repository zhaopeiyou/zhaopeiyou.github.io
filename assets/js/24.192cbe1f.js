(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{339:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"数据类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据类型"}},[t._v("#")]),t._v(" 数据类型")]),t._v(" "),s("ul",[s("li",[t._v("基础类型：String Number Boolean Null undefined Symbol bigInt")]),t._v(" "),s("li",[t._v("引用类型 Function Object Array Date RegExp")])]),t._v(" "),s("h2",{attrs:{id:"变量和函数声明的提升"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#变量和函数声明的提升"}},[t._v("#")]),t._v(" 变量和函数声明的提升")]),t._v(" "),s("ul",[s("li",[t._v("在js中变量和函数的声明会提升到最顶部执行")]),t._v(" "),s("li",[t._v("函数提升高于变量提升")]),t._v(" "),s("li",[t._v("函数内部如果使用了var声明相同名称的外部变量，函数将不再向上寻找")])]),t._v(" "),s("h2",{attrs:{id:"判断数据类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#判断数据类型"}},[t._v("#")]),t._v(" 判断数据类型")]),t._v(" "),s("ul",[s("li",[t._v("typeof 可以判断 string number object function undefined")]),t._v(" "),s("li",[t._v("instanceof 可以判断该对象是谁的实例")]),t._v(" "),s("li",[t._v("Object.prototype.toString.call()")])]),t._v(" "),s("h2",{attrs:{id:"闭包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#闭包"}},[t._v("#")]),t._v(" 闭包")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("闭包是指有权访问另一个函数作用域中的变量的函数（一个函数可以访问另一个函数的变量）")])]),t._v(" "),s("li",[s("p",[t._v("用途")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("能够访问函数定义时所在的词法作用域(阻止其被回收)")])]),t._v(" "),s("li",[s("p",[t._v("私有化变量")])]),t._v(" "),s("li",[s("p",[t._v("模拟块级作用域")])])])]),t._v(" "),s("li",[s("p",[t._v("缺点")]),t._v(" "),s("ul",[s("li",[t._v("会导致函数的变量一直保存在内存中，过多的闭包可能会导致内存泄漏")])])])]),t._v(" "),s("h2",{attrs:{id:"原型、原型链"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原型、原型链"}},[t._v("#")]),t._v(" 原型、原型链")]),t._v(" "),s("ul",[s("li",[t._v("原型链: 当我们访问一个对象的属性时，如果这个对象内部不存在这个属性，那么他就会去它的原型对象里找这个属性")]),t._v(" "),s("li",[t._v("原型是函数特有的")]),t._v(" "),s("li",[t._v("数组对象只有原型链")]),t._v(" "),s("li",[t._v("就近原则")])]),t._v(" "),s("h2",{attrs:{id:"json-parse-json-stringify-深拷贝事项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#json-parse-json-stringify-深拷贝事项"}},[t._v("#")]),t._v(" JSON.parse(JSON.stringify) 深拷贝事项")]),t._v(" "),s("ul",[s("li",[t._v("如果json里有时间对象，则序列化会将时间对象转换为字符串格式")]),t._v(" "),s("li",[t._v("如果json里有function、undefined则序列化会将function、undefined 丢失")]),t._v(" "),s("li",[t._v("如果json里有NaN、Infinity和-Infinity，则序列化后会变成null")]),t._v(" "),s("li",[t._v("如果对象中存在循环引用的情况将抛出错误")]),t._v(" "),s("li",[t._v("如果json里有对象是由构造函数生成的，则序列化的结果会丢弃对象的 constructor")])]),t._v(" "),s("h2",{attrs:{id:"new"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#new"}},[t._v("#")]),t._v(" new")]),t._v(" "),s("ul",[s("li",[t._v("首先创建了一个新的空对象")]),t._v(" "),s("li",[t._v("设置原型，将对象的原型设置为函数的prototype对象")]),t._v(" "),s("li",[t._v("让函数的this指向这个对象，执行构造函数的代码")]),t._v(" "),s("li",[t._v("判断函数的返回值类型，如果是值类型，返回创建的对象，如果是引用类型，返回引用类型的对象")])]),t._v(" "),s("h2",{attrs:{id:"继承-es6"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#继承-es6"}},[t._v("#")]),t._v(" 继承（es6）")]),t._v(" "),s("ul",[s("li",[t._v("原型链方式继承")]),t._v(" "),s("li",[t._v("借用构造函数")]),t._v(" "),s("li",[t._v("组合继承")]),t._v(" "),s("li",[t._v("原型继承")]),t._v(" "),s("li",[t._v("寄生式继承")]),t._v(" "),s("li",[t._v("寄生式组合继承")])]),t._v(" "),s("h2",{attrs:{id:"null和undefined"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#null和undefined"}},[t._v("#")]),t._v(" null和undefined")]),t._v(" "),s("ul",[s("li",[t._v("undefined  输出是原始数据类型\n"),s("ul",[s("li",[t._v("1.已声明，未赋值")]),t._v(" "),s("li",[t._v("2.对象某个属性不存在")]),t._v(" "),s("li",[t._v("3.函数调用少传参")]),t._v(" "),s("li",[t._v("4.函数默认返回值")])])]),t._v(" "),s("li",[t._v("null 输出的是object类型\n"),s("ul",[s("li",[t._v("1.给值赋值为null，手动释放内存")]),t._v(" "),s("li",[t._v("2.作为函数参数(此参数不是对象)")]),t._v(" "),s("li",[t._v("3.原型链的顶端")])])])]),t._v(" "),s("h2",{attrs:{id:"this"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#this"}},[t._v("#")]),t._v(" this")]),t._v(" "),s("ul",[s("li",[t._v("在函数调用中，this指向调用它的对象。")]),t._v(" "),s("li",[t._v("在构造函数中，this指向实例化对象。")]),t._v(" "),s("li",[t._v("在箭头函数中，没有this")]),t._v(" "),s("li",[t._v("在事件体中，this指向事件源")]),t._v(" "),s("li",[t._v("其他情况，this指向window")])]),t._v(" "),s("h2",{attrs:{id:"箭头函数和普通函数的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#箭头函数和普通函数的区别"}},[t._v("#")]),t._v(" 箭头函数和普通函数的区别")]),t._v(" "),s("ul",[s("li",[t._v("不可当作构造函数，不可使用new命令，否则会抛出异常")]),t._v(" "),s("li",[t._v("不可使用arguments对象，由Rest参数代替")])]),t._v(" "),s("h2",{attrs:{id:"和-区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#和-区别"}},[t._v("#")]),t._v(" ==和===区别")]),t._v(" "),s("ul",[s("li",[t._v("==是非严格意义上的相等  值相等就相等")]),t._v(" "),s("li",[t._v("=== 是严格意义上的相等，会比较两边的数据类型和值大小")])]),t._v(" "),s("h3",{attrs:{id:"创建对象的方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建对象的方式"}},[t._v("#")]),t._v(" 创建对象的方式")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("字面量的方式创建  let obj = {}")])]),t._v(" "),s("li",[s("p",[t._v("工厂模式创建对象")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createObject")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("age")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" obj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("age"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" obj\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("构造函数创建对象")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createObject")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("age")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" age\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"数组方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数组方法"}},[t._v("#")]),t._v(" 数组方法")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("1. map:遍历数组，返回组成的新数组，映射\n2. forEach: 无法break;\n3. filter: 过滤\n4. some : 有一项返回true则为true\n5. every : 有一项返回false，则整体返回false\n6. join : 通过指定连接生成字符串\n7. push/pop : 末尾推入和弹出，返回推入/弹出项\n8. unshift/shift : 头部推入和弹出，改变原数组，返回操作项\n9. sort(fn) / reverse : 排序/反转，改变原数组\n10. concat : 连接数组，浅拷贝\n11. slice(start,end) : 返回截断后的新数组，不改变原数组\n12. splice(start,number,value) \n13. indexOf / lastIndexOf(value,formIndex) : 查找数组项，返回对应下标\n14. reduce / reduceRight\n\n原数组不改变： \nconcat   slice   join   toString   map   every   some   filter  reduce  map reduceRight\n\n原数组会改变： \npush pop shift unshift  sort  splice  reverse\n")])])]),s("h2",{attrs:{id:"数组去重"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数组去重"}},[t._v("#")]),t._v(" 数组去重")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.")]),t._v(" Array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("form")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.")]),t._v(" 双层"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v("循环去重\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" arr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("45")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("arr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" j "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("j"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("arr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("j"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v("arr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            arr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("splice")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("j"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            j"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"apply-bind-call"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#apply-bind-call"}},[t._v("#")]),t._v(" apply bind call")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("相同点 都可以改变当前作用域中的this指向\n不同点： 1.apply 和bind call 接受的参数不同，apply([])  2.bind有返回值\napply 可以求给定数组的最大值和最小值 let max = Math.max.apply(null,arr)\ncall 可以判断数据类型  类数组转换数组 let type = Object.prototype.toString.call(arr)\n")])])]),s("h2",{attrs:{id:"求数组中的最大值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#求数组中的最大值"}},[t._v("#")]),t._v(" 求数组中的最大值")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.")]),t._v("通过Math"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("max")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("arr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.")]),t._v("通过 reduce方法 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" max "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" arr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reduce")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("prev"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("current")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" prev"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("current"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("prev"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("current"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.")]),t._v("通过数组sort方法 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" max "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" arr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sort")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("b")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"for-in-for-of区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#for-in-for-of区别"}},[t._v("#")]),t._v(" for..in  for..of区别")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("for..in 用于可枚举数据，如对象，数组，字符串，得到key\n\nfor..of 用于可迭代数据，如数组，字符串，Map，Set,得到value\n")])])]),s("h2",{attrs:{id:"函数防抖节流"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#函数防抖节流"}},[t._v("#")]),t._v(" 函数防抖节流")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("防抖 （在固定时间内，事件只允许触发一次）")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("input type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text"')]),t._v(" id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"input"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" input "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'input'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  input"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'input'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("debounce")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'防抖执行'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 防抖 在固定时间内，事件只允许触发一次")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("debounce")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("fn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" wait")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" timer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("args")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("timer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clearTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("timer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      timer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" wait"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("节流 （在一定时间内的多个事件合成一个）")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"box"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" box "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.box'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  box"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'touchmove'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("throttle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'节流事件'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 节流 在一定时间内的多个事件合成一个")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("throttle")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" time")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" timer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("timer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        timer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("event")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          timer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"let-和const区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#let-和const区别"}},[t._v("#")]),t._v(" let 和const区别")]),t._v(" "),s("ul",[s("li",[t._v("let const 命令不存在变量提升，不允许重复声明")]),t._v(" "),s("li",[t._v("const定义的是常量，不能修改，如定义的是对象，可修改对象内部的数据")])]),t._v(" "),s("h2",{attrs:{id:"es6新增特性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#es6新增特性"}},[t._v("#")]),t._v(" es6新增特性")]),t._v(" "),s("ul",[s("li",[t._v("新增symbol类型，表示独一无二的值")]),t._v(" "),s("li",[t._v("const/let 声明变量，不可重复声明，块级作用域，暂时性死区")]),t._v(" "),s("li",[t._v("解构赋值")]),t._v(" "),s("li",[t._v("模板字符串")]),t._v(" "),s("li",[t._v("扩展运算符")]),t._v(" "),s("li",[t._v("箭头函数")]),t._v(" "),s("li",[t._v("class")]),t._v(" "),s("li",[t._v("Proxy")]),t._v(" "),s("li",[t._v("Promise")])]),t._v(" "),s("h2",{attrs:{id:"ajax"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ajax"}},[t._v("#")]),t._v(" Ajax")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ajax")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("successFn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" xhr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("XMLHttpRequest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    xhr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GET'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    xhr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onreadystatechange")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      \t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xhr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("readyState "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xhr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n           \t \t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("successFn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xhr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("responentText"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    xhr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"同源策略"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#同源策略"}},[t._v("#")]),t._v(" 同源策略")]),t._v(" "),s("ul",[s("li",[t._v("同源指 域名，协议，端口号都相等")])]),t._v(" "),s("h2",{attrs:{id:"宏任务微任务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#宏任务微任务"}},[t._v("#")]),t._v(" 宏任务微任务")]),t._v(" "),s("ul",[s("li",[t._v("异步-宏任务：不需要立即连贯执行，微任务：需要立即连贯执行")])]),t._v(" "),s("h2",{attrs:{id:"commonjs和es6模块区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#commonjs和es6模块区别"}},[t._v("#")]),t._v(" CommonJS和ES6模块区别")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("commonJs模块输出是值的拷贝  es6模块输出是值的引用")])]),t._v(" "),s("li",[s("p",[t._v("commonjs模块是运行时加载 es6模块是编译时输出接口")])]),t._v(" "),s("li",[s("p",[t._v("commonjs模块的require()是同步加载模块 es6模块 import是异步加载")])])]),t._v(" "),s("h2",{attrs:{id:"http与https"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http与https"}},[t._v("#")]),t._v(" http与https")]),t._v(" "),s("ul",[s("li",[t._v("HTTPS协议需要CA证书,费用较高;而HTTP协议不需要")]),t._v(" "),s("li",[t._v("HTTP协议是超文本传输协议,信息是明文传输的,HTTPS则是具有安全性的SSL加密传输协议;")]),t._v(" "),s("li",[t._v("使用不同的连接方式,端口也不同,HTTP协议端口是80,HTTPS协议端口是443;")]),t._v(" "),s("li",[t._v("HTTP协议连接很简单,是无状态的;HTTPS协议是具有SSL和HTTP协议构建的可进行加密传输、身份认证的网络协议,比HTTP更加安全")])]),t._v(" "),s("h2",{attrs:{id:"dns域名解析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dns域名解析"}},[t._v("#")]),t._v(" DNS域名解析")]),t._v(" "),s("ul",[s("li",[t._v("客户端输入ip地址--\x3e浏览器DNS缓存--\x3e操作系统DNS缓存--\x3e本地HOST文件--\x3e本地DNS服务器缓存--根服务器--com域名服务器--sixue权威域名服务器--返回客户端")])]),t._v(" "),s("h2",{attrs:{id:"工厂模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#工厂模式"}},[t._v("#")]),t._v(" 工厂模式")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("用一个函数来创建实例，返回new创建的实例(隐藏了new关键字)")])]),t._v(" "),s("li",[s("p",[t._v("场景：")]),t._v(" "),s("ul",[s("li",[t._v("jQuery的$函数")]),t._v(" "),s("li",[t._v("react createElement函数(jsx语法底层函数)")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('function $(...rest) {\n\treturn new Foo(...rest)\n}\n$("xxx1","xxx2")\n')])])])])]),t._v(" "),s("h2",{attrs:{id:"单例模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#单例模式"}},[t._v("#")]),t._v(" 单例模式")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("是一个全局。唯一的实例(不论怎么创建实例都是一个)")])]),t._v(" "),s("li",[s("p",[t._v("vue项目中的实例")])]),t._v(" "),s("li",[s("p",[t._v("Node项目中的App实例")])]),t._v(" "),s("li",[s("p",[t._v("vuex react-rudex中的store")])]),t._v(" "),s("li",[s("p",[t._v("全局唯一一个组件 弹出框 模态框")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("class Dog {\n\tconstructor(){}\n\tstatic getInstance() {\n\t\treturn Dog._instance\n\t}\n}\n\nlet d3 = Dog.getInstance()\nlet d4 = Dog.getInstance()\nd3===d4\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"代理模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代理模式"}},[t._v("#")]),t._v(" 代理模式")]),t._v(" "),s("ul",[s("li",[t._v("Proxy 访问一个对象属性之前先做一个拦截（做一些额外的业务和逻辑操作）")]),t._v(" "),s("li",[t._v("vue3响应式原理")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('let obj = {\n\tname: "vue",\n\tage:9\n}\n\nlet obj2 = new Proxy(obj,{\n\tget(target,property) {\n\t\treturn target[property]\n\t}\n\tset(target,property,newVal) {\n\t\ttarget[property] = newVal\n\t}\n})\nobj2.age = 10\n')])])]),s("h2",{attrs:{id:"发布订阅者模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发布订阅者模式"}},[t._v("#")]),t._v(" 发布订阅者模式")]),t._v(" "),s("ul",[s("li",[t._v("发布者 订阅者 第三方")])]),t._v(" "),s("h2",{attrs:{id:"观察者模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#观察者模式"}},[t._v("#")]),t._v(" 观察者模式")]),t._v(" "),s("ul",[s("li",[t._v("一个主题，一个观察者。主题发生变化，就触发了观察者的执行（没有媒介）")])]),t._v(" "),s("h2",{attrs:{id:"装饰器模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#装饰器模式"}},[t._v("#")]),t._v(" 装饰器模式")]),t._v(" "),s("ul",[s("li",[t._v("保证原有函数的功能不变的同时，增加一个新的功能（AOP面向切面编程)")]),t._v(" "),s("li",[t._v("场景 ES和TypeScript的Decorator语法")]),t._v(" "),s("li",[t._v("类装饰器，函数")])]),t._v(" "),s("h2",{attrs:{id:"首屏优化的方案-分别从代码、网络和缓存说一下"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#首屏优化的方案-分别从代码、网络和缓存说一下"}},[t._v("#")]),t._v(" 首屏优化的方案，分别从代码、网络和缓存说一下")]),t._v(" "),s("ol",[s("li",[t._v("代码优化：    - 压缩代码：通过去除空格、注释、无用代码等方式，减小文件大小，加快下载速度。    - 懒加载：将页面中非首屏内容延迟加载，只在用户需要时再加载，减少首屏所需资源量。    - 代码分割：将代码按需拆分成多个模块，只加载当前首屏所需的模块，减少不必要的加载。    - 预加载关键资源：提前加载首屏所需的关键资源，以减少网络请求的延迟时间。")]),t._v(" "),s("li",[t._v("网络优化：    - 压缩资源：使用压缩算法对静态资源进行压缩，减小文件大小，提高下载速度。    - 使用CDN加速：将静态资源部署到全球各地的CDN节点，使用户可以从离其最近的节点获取资源，加快加载速度。    - HTTP缓存：设置合适的缓存策略，使浏览器可以缓存静态资源，减少重复请求，提高加载速度。")]),t._v(" "),s("li",[t._v("缓存优化：    - 使用浏览器缓存：设置合适的缓存头信息，使浏览器可以缓存页面和静态资源，减少后续请求的时间和带宽消耗。    - 使用缓存策略：根据资源的特性，选择合适的缓存策略，如根据文件内容的变化设置版本号或文件哈希，以确保客户端在资源更新时能够获取最新版本。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);