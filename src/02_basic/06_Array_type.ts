// <1> 「类型 + 方括号」表示法
const numberArray: number[] = [1, 2, 3];
const stringArray: string[] = ['1', '2', '3'];
const unionArray: (number | string)[] = [1, '2', 3];
const anyArray: any[] = [1, true, '2'];

// <2> 数组泛型
const genericNumberArray: Array<number> = [1, 2, 3];
const genericStringArray: Array<string> = ['1', '2', '3'];
const genericUnionArray: Array<number | string> = [1, '2', '3'];
const genericAnyArray: Array<any> = [1, true, '2'];

// <3> 用接口表示数组
interface INumberArray {
  [index: number]: number;
}
interface IStringArray {
  [index: number]: string;
}
interface IUnionArray {
  [index: number]: number | string | boolean;
}
interface IAnyArray {
  [index: number]: any;
}

// 类数组内置对象接口：IArguments, NodeList, HTMLCollection