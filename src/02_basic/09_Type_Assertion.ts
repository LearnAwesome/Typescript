// 类型断言
// 在联合类型时，只能访问共有属性或者方法
// 类型断言可以在访问非共有属性时，避免错误
// <type>variable
// variable as type
function getLength(x: string | number): number {
  if ( (<string>x).length ) {
    return (x as string).length;
  } else {
    return x.toString().length;
  }
}

// 无法断言联合类型中未出现的类型
// let one: string | number;
// console.log(<boolean>one);