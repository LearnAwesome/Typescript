// 声明合并
// 如果定义了两个相同名字的{ 函数 }、{ 接口 }或{ 类 }，那么它们会合并成一个类型

// 函数的声明合并 => 重载
/*
function reverse(target: string): string;
function reverse(target: number): number;
function reverse(target) {
  if (typeof target === 'string') {
    return target.split('').reverse().join('');
  } else if (typeof target === 'number') {
    return Number( target.toString().split('').reverse().join('') );
  }
}
console.log( reverse('abc'), reverse(123) );
*/

// 接口声明合并
// 子属性的名称如果重复，类型不同会报错
/*
interface IVertical<T> {
  top: T;
  width(x: T, y: T): T;
}
interface IVertical<T> {
  bottom: T;
}
const vertical: IVertical<number> = {
  top: 10,
  bottom: 20,
  width(x:number, y: number): number {
    return x + y;
  }
};
console.log( vertical.width( vertical.top, vertical.bottom ) );
*/