// 元组
// 数组合并了相同类型的对象，而元组（Tuple）合并了不同类型的对象。
/*
// 初始赋值操作必须完全符合定义
const tuple1: [string, number] = ['a', 1];

// 非初始赋值写法
let tuple2: [string, number];
tuple2[0] = 'a';
tuple2[1] = 1;
*/

// 元组中的越界元素
// 超出类型定义的元素，类型会被定义为元素中所有类型的联合类型
const tuple: [string, number] = ['a', 1];
tuple.push('abc');
console.log(tuple); // ['a', 1, 'abc']
// tuple.push(true); // error: Argument of type 'true' is not assignable to parameter of type 'string | number'

// 当访问一个越界的元素，也会识别为元组中每个类型的联合类型
// console.log(tuple[2].slice(1)); // 不能访问非联合类型的共有方法