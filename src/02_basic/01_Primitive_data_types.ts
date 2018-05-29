// <1> boolean 布尔值
/*
const isDone: boolean = true; // success
const isDone: boolean = new Boolean(1); // error TS2322: Type 'Boolean' is not assignable to type 'boolean'.
const isDone: boolean = Boolean(1); // success
*/

// <2> number 数字
/*
const dec: number = 10; // 十进制
const binary: number = 0b1010; // 二进制
const octal: number = 0o12; // 八进制
const hex: number = 0xa; // 十六进制
*/

// <3> string 字符串
/*
const user: string = 'Tom';
const sayHello: string = `Hello, ${user}`;
*/

// <4> void 空值

// 可以使用void来表示一个没有返回值的函数
/*
function alertName(): void {
  alert('name');
}
const unusable1: void = undefined;
const unusable2: void = null;
const unusable3: void = 1; // error TS2322: Type '1' is not assignable to type 'void'.
*/

// <5> null & undefined
/*
// undefined类型只能赋予undefined
// null类型只能赋予null
const u: undefined = undefined;
const n: null = null;

// 与void的区别，void不是所有类型的子类型，不能赋值给其他类型
const a: number = undefined; // success
const b: number = void; // error TS1109: Expression expected.
*/
