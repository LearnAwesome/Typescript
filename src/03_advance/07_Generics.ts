// 泛型 Generics
// 在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性

// 简单的例子
/*
function createArray<T>(length: number, value: T): Array<T> {
  const array: T[] = [];
  for (let i = 0; i < length; i ++) {
    array[i] = value;
  }
  return array;
}
console.log(createArray(3, 'x'));
*/

// 多个类型参数
/*
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}
console.log( swap([7, 'seven']) );
*/

// 泛型约束
/*
// 类型参数继承接口
interface ILengthWise {
  length: number;
}
function loggingIdentify<T extends ILengthWise> (arg: T): T {
  console.log(arg.length); // length属性不是所有类型都含有，所以如果使用必须约束输入类型
  return arg;
}
*/
/*
// 输入参数之间互相约束
function copyFields<T extends U, U> (target: T, source: U): T {
  for (const key of Object.keys(source)) {
    target[key] = source[key];
  }
  return target;
}
const target = {a: 1, b: 2, c: 3, d: 4};
const source = {b: 22, d: 44}; // 被继承者必须是继承者的子集
console.log( copyFields(target, source) );
*/

// 泛型接口
/*
interface ICreateArray<T> {
  (length: number, value: T): T[];
}
let createArray: ICreateArray<any>; // 使用泛型接口定义函数时需要定义泛型的类型
createArray = function<T>(length: number, value:T): T[] {
  const res: T[] = [];
  for (let i = 0; i < length; i ++) {
    res[i] = value;
  }
  return res;
}
console.log( createArray(3, 1) );
*/

// 泛型类
/*
class GenericsNumber<T> {
  zeroValue: T;
  sum: (x: T, y: T) => T;
}
const myGenericsNumber = new GenericsNumber<number>();
myGenericsNumber.zeroValue = 1;
myGenericsNumber.sum = function(x, y) {
  return x + y;
}
*/

// 泛型参数的默认类型
/*
interface ICreateArray<T = any> {
  (length: number, value: T): T[];
}
const createArray: ICreateArray = function<T>(length: number, value:T): T[] {
  const res: T[] = [];
  for (let i = 0; i < length; i ++) {
    res[i] = value;
  }
  return res;
}
console.log( createArray(3, 1) );
*/