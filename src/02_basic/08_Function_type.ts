// 函数类型
// 要在 TypeScript 中对其进行约束，需要把输入和输出都考虑到

// 函数声明
/*
// 输入多余的（或者少于要求的）参数，是不被允许的
function foo(x: number, y: number): number {
  return x + y;
}
foo(1, 2);
*/

// 函数表达式
/*
// 不严谨的写法
// 上面的代码只对等号右侧的匿名函数进行了类型定，左边的是通过赋值操作进行类型推论而推断出来的
const myFn = function(x: number, y: number): number {
  return x + y;
}

// 严谨的写法
const myFn:(x: number, y: number) => number = function(x: number, y: number): number {
  return x + y;
}

// 用接口定义
interface IFoo {
  (source: number, comp: number): boolean;
}
const foo: IFoo = function(source: number, comp: number): boolean {
  return comp > source ? true : false;
}
*/

// 可选参数
// 可选参数后面不允许再出现必须参数
/*
function foo(first: string, other?: string): string {
  return first + other;
}
console.log(foo('a')); // aundefined
console.log(foo('a', 'b')); // ab
*/

// 参数默认值
// TypeScript 会将添加了默认值的参数识别为可选参数
// 默认值参数不受「可选参数必须接在必需参数后面」的限制了
/*
function foo(first: string = 'first', second: string): string {
  return first + second;
}
console.log(foo('a', 'b')); // ab
console.log(foo(undefined, 'b')); // firstb
*/

// 剩余参数
/*
function push(array: any[], ...rest: any[]): void {
  rest.forEach(item => {
    array.push(item);
  });
}
const array = [];
push(array, 1, 2);
console.log(array);
*/

// 重载

// 无法直观的确定参数不同时，返回的类型是什么
// function reverse(x: string | number): string | number {
//   if (typeof x === 'number') {
//     return Number(x.toString().split('').reverse().join(''));
//   } else if (typeof x === 'string') {
//     return x.split('').reverse().join('');
//   }
// }

// 重载写法
function reverse(x: number): number; // 参数为数字时，返回数字
function reverse(x: string): string; // 参数为字符串时，返回字符串
function reverse(x) { // 具体实现
  if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''));
  } else if (typeof x === 'string') {
    return x.split('').reverse().join('');
  }
}