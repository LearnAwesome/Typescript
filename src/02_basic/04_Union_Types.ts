// 联合类型（Union Types）
// 表示取值可以为多种类型中的一种。
/*
let myNumber: string | number;
myNumber = 'seven';
myNumber = 7;
myNumber = true; // error TS2322: Type 'true' is not assignable to type 'string | number'.
*/

// 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法
/*
function foo(some: string | number) {
  console.log(some.length); // Property 'length' does not exist on type 'number'.
  console.log(some.toString());
}
*/

// 联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型，并确定后续该变量属性或方法操作的合法性 ++++++++++++++++++++
/*
let myNumber: string | number;
myNumber = 'seven';
console.log(myNumber.length);
myNumber = 7;
console.log(myNumber.length); // error TS2339: Property 'length' does not exist on type 'number'.
*/