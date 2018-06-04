// 类型别名
// 用来给一个类型起个新名字
// 类型别名常用于联合类型
type TName = string;
type TNameResolver = () => string; // 相当于 (...rest: any[]) => string
type TNameOrResolver = TName | TNameResolver;

function createName(firstName: string, lastName: string): string {
  return firstName + '.' + lastName;
}

function getName(n: TNameOrResolver): string {
  if (typeof n === 'string') {
    return n;
  } else {
    return n();
  }
}

console.log( getName('Michael') );
console.log( getName( createName('Michael', 'Lu') ) );