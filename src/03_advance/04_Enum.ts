// 枚举
// 枚举（Enum）类型用于取值被限定在一定范围内的场景，比如一周只能有七天，颜色限定为红绿蓝等

// 基本写法
// 默认第一位为 0，后面各项逐次 +1
/*
enum Week { Sun, Mon, Tue, Wed, Thu, Fri, Sat }
console.log( Week['Sun'] === 0 ); // true
console.log( Week['Sat'] === 6 ); // true
console.log( Week[0] === 'Sun' ); // true
console.log( Week[6] === 'Sat' ); // true
*/

// 手动赋值
// 未赋值项会根据最后赋值项为基准
/*
enum RGB { Red = 3, Green = 0.1, Blue }
console.log( RGB[ 'Blue' ] === 1.1 ); // true
*/

// 常数项与计算所得项
/*
enum RGB { Red, Green = Red + 2, Blue }
//                 计算所得项
console.log( RGB ); // { '0': 'Red', '1': 'Green', '4': 'Blue', Red: 0, Green: 1, Blue: 4 }
console.log( RGB.Blue === 4 ); // true
*/

// 常数枚举
// 常数枚举与普通枚举的区别是，它会在编译阶段被删除，并且不能包含计算成员
/*
const enum RGB { Red, Green, Blue }
const arr: number[] = [ RGB.Red, RGB.Green, RGB.Blue ];
console.log(arr); // [ 0, 1, 2 ]
*/