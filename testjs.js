/**
 * Created by Administrator on 2017/2/9.
 */

{
    let a = 12;
    var b = 1;

    //let声明的变量只在它所在的代码块有效。

    for (let a = 0; a < 10; a++) {
        let i = 'abc';
        //这里可以
        console.log(i);
    }
    //这里无效
    console.log(i);

}
//var声明的变量在外面也有效
{
    var a = [];
    for (var i = 0; i < 10; i++) {
        a[i] = function () {
            console.log(i);
        };
    }

    a[6](); // 10
}

{
    var Obj = new Array();

    //单维数组
    var Obj1 = [3, 4, 5, 6, 7, "adb"];
    //多维数组
    var Obj2 = new Array(
        [3, 4, 5, 6, 7, "adb"],
        [3, 4, 5, 6, 7, "adb"],
        [3, 4, 5, 6, 7, "adb"]);


    let obj1 = Obj1[0];

    //取多维数组
    let newVar = obj2[2][5];

    let objarray = obj2[2];
    let objarray2 = objarray[5];


    Obj1.constructor;

    Obj.length;

    Obj1.pop();
}


{
    let elementById = document.getElementById(id);
    let firstChild = elementById.firstChild;
    elementById.cloneNode(true);//true深度clone
    let attribute = firstChild.getAttribute("name");
    attribute.substring();

}
{

    function getSecondName(a = "lihang", b = "hangli") {
        let name = a + b;
        return name;

    }

    let secondName = getSecondName("bbb", "bbbb", "bbbb");


    function getName(a) {
        return a;
    }


    let name = getName("lihnag");

}

{

    function bar(x = y, y = 2) {//在x=y时候y还没赋值，所以有问题
        return [x, y];
    }

    bar(); // 报错
}
{


    //noinspection JSAnnotator
    function dosomne() {

        //这样也报错的
        // let不允许在相同作用域内，重复声明同一个变量。
        let a = 10;
        var a = 1;
    }

    function func(arg) {
        //这样相当于在同一个结构体声明了两次
        let arg; // 报错
    }

    function func(arg) {
        {
            let arg; // 不报错
        }
    }

}

{
//常量不能再次赋值
    const str = 344;
//    str = "44";
}

{

    let a = 1;
    let b = 2;
    let c = 3;
    //ES6允许写成下面这样。
    let [a, b, c] = [1, 2, 3];


    //这种写法属于“模式匹配”，只要等号两边的模式相同，左边的变量就会被赋予对应的值。下面是一些使用嵌套数组进行解构的例子。
    let [head, ...tail] = [1, 2, 3, 4];
    head // 1
    tail // [2, 3, 4]

    let [x, y, ...z] = ['a'];
    x // "a"
    y // undefined
    z // []


    let [foo, [[bar], baz]] = [1, [[2], 3]];
    foo // 1
    bar // 2
    baz // 3


}

{

    // 解构赋值允许指定默认值。

    let [a = 2] = [1];

    let [foo = true] = [];
    foo // true

    let [x, y = 'b'] = ['a']; // x='a', y='b'
    let [x, y = 'b'] = ['a', undefined]; // x='a', y='b'
}


{

    let {foo, bar} = {foo: "aaa", bar: "bbb"};

    foo;

    //如果变量名与属性名不一致，必须写成下面这样。

    var {foo: baz} = {foo: 'aaa', bar: 'bbb'};
    baz // "aaa"
    //对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。
    let {first: f, last: l} =  {first: 'hello', last: 'world'};
    ;
    f // 'hello'
    l // 'world'


    //注意，采用这种写法时，变量的声明和赋值是一体的。对于let和const来说，变量不能重新声明，所以一旦赋值的变量以前声明过，就会报错。

    let foo;
    let {foo} = {foo: 1}; // SyntaxError: Duplicate declaration "foo"

}

{

    let object = new Object();

    let person = {
        name: 'lihang',
        gander: 33,
        isdog: true,
        year: null

    };
    person.test = function (x) {
        return x;
    }

    let isdog = person.isdog;

    let year = person.year;

    let name2 = person.name;

    let gander = person.gander;

    let person2 = person[person];

    let test = person.test(544);

    let valueOf = person.valueOf();

    let b2 = person.hasOwnProperty("isgood");


    let str = "Fasfasdd";
    let ba = {str};
    let num = 0o11;

    let baz = {person: true};

}

{


    function foo({x, y = 5}) {
        console.log(x, y);
    }

    foo({}) // undefined, 5
    foo({x: 1}) // 1, 5
    foo({x: 1, y: 2}) // 1, 2
    foo() // TypeError: Cannot read property 'x' of undefined

}
{


    function add(...values) {
        let sum = 0;

        for (var val of values) {
            sum += val;
        }
        return sum;
    }

    add(2, 5, 3) // 10
}

{

    let baz = {
        abc: "fff"
    };

    //默认会有一个name属性，返回自己的名字
    let name3 = baz.name;

}

{

    // 报错
    function doSomething(value = 0o70) {
        'use strict'

        return value;

    }
}

{
    undefined
    null
    Number
    Boolean
    Object
    String

    if (typeof  doSomething("ff") != "undefined") {


    }
    typeof null;

}


{
    function createXHR() {
        if (typeof XMLHttpRequest != 'undefined') {
            return new XMLHttpRequest();
        } else if (typeof ActiveXObject != 'undefined') {
            if (typeof arguments.callee.activeXString != 'string') {
                var versions = ['MSXML2.XMLHttp.6.0', 'MSXML2.XMLHttp.3.0', 'MSXML2.XMLHttp'], i, len;
                for (i = 0, len = versions.length; i < len; i++) {
                    try {
                        new ActiveXObject(versions[i]);
                        arguments.callee.activeXString = versions[i];
                    } catch (e) {

                    }
                }
            }
            return new ActiveXObject(arguments.callee.activeXString);
        } else {
            throw new Error('No XHR object available');
        }
    }
}

{

    let xhr = createXHR();

    xhr.open('GET', 'example.php');

    xhr.setRequestHeader('Content-Type', 'text/plain');
    xhr.send(null);
    xhr.onreadystatechange = function () {

        localStorage.key('ff');
        localStorage.setItem('fff', "21312");

    };

    localStorage.length


    let a = function isVdaennaing() {
        return "a";
    }

    function test() {
        var name = 'tg';

        function test2() {
            var age = 10;
            console.log(name);  // "tg"
        }

        console.log(age);  // Uncaught ReferenceError: age is not defined
    }

    test();


}

{
    <script>

    </script>;
}