// 在 TypeScript 中，我们使用接口（Interfaces）来定义对象的类型。
// 常用于对对象的形状（Shape）进行描述
// 形状必须完全一致
/*
interface IPerson {
  name: string;
  age: number;
}
const person: IPerson = {
  name: 'Tom',
  age: 28
};
// 错误：类型不符合
const person_type_error: IPerson = {
  name: 'Tom',
  age: 'twenty-eight' // Type 'string' is not assignable to type 'number'.
};
// 错误: 缺少属性
const person_missing_props_error: IPerson = {
  name: 'Tom'
}; // Property 'age' is missing in type '{ name: string; }'
// 错误: 多余属性
const person_unknown_props_error: IPerson = {
  name: 'Tom',
  age: 28,
  sex: 'male' // Object literal may only specify known properties, and 'sex' does not exist in type 'IPerson'.
};
*/

// 可选属性
// 含义是该属性可以不存在，但仍然不允许添加未定义的属性
/*
interface IPerson {
  name: string;
  age?: number;
}
const person1: IPerson = {
  name: 'Tom'
};
const person2: IPerson = {
  name: 'Tom',
  age: 28
};
*/

// 任意属性
/*
interface IPerson {
  name: string;
  age?: number;
  [props: string]: any;
}
const person: IPerson = {
  name: 'Tom',
  sex: 'male'
};
// 一旦定义了任意属性，那么确定属性和可选属性都必须是它的子属性
interface IPerson {
  name: string;
  age?: number; // error TS2411: Property 'age' of type 'number' is not assignable to string index type 'string | boolean'.
  [propName: string]: string | boolean;
}
*/

// 只读属性
// 只能读取，不能覆写
// 只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候
/*
interface IPerson {
  readonly id: number;
  name: string;
  age?: number;
}
const person: IPerson = {
  id: 9527,
  name: 'Tom',
  age: 27
};
console.log(person.id);
person.id = 9528; // error TS2540: Cannot assign to 'id' because it is a constant or a read-only property.
*/