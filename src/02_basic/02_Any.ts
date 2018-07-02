// 任意值

/*
// 普通类型一旦确定，则无法用其他不同类型的值来复写
let num: string = 'seven';
num = 7; // error TS2322: Type '7' is not assignable to type 'string'.

// 任意值可以被赋值为任意类型
let some: any = undefined;
some = 7; // success
some = 'seven'; // success
*/

// 任意值的属性及方法都可以任意访问及调用，可以认为返回值都为任意值
/*
let anyThing: any = 'hello';
console.log(anyThing.myName);
console.log(anyThing.myName.firstName);
anyThing.setName('Jerry');
anyThing.setName('Jerry').sayHello();
anyThing.myName.setFirstName('Cat');
*/

// 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型
/*
// 以下两者等价
let a;
let b: any;
*/