// 类型推论

// 在声明变量时，如果进行赋值操作，但是未定义变量类型，则会推论类型为：被赋予值的类型
// ^^^^^^^^^^^
/*
let a = 'seven'; // 此时根据赋值，推论出变量a的类型为'string'
a = 7; // error TS2322: Type '7' is not assignable to type 'string'.
*/

// 如果未进行赋值操作，则推论类型为：任意值
/*
let b;
b = 'seven'; // success
b = 7; // success
*/