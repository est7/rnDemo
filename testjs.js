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
    let { first: f, last: l } =  { first: 'hello', last: 'world' };;
    f // 'hello'
    l // 'world'


    //注意，采用这种写法时，变量的声明和赋值是一体的。对于let和const来说，变量不能重新声明，所以一旦赋值的变量以前声明过，就会报错。

    let foo;
    let {foo} = {foo: 1}; // SyntaxError: Duplicate declaration "foo"

}