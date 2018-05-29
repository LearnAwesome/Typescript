// 与javascript相同的语法
/*
function greeter(person) {
  return "Hello, " + person;
}
let user = "Michael.Lu";
console.log( greeter(user) );
*/

// 参数类型声明
/*
function greeter(person: string) {
  return "Hello, " + person;
}
let user = [0, 1];
console.log( greeter(user) ); // 静态判断，错误的参数类型
*/

// 接口
/*
interface Person {
  firstName: string;
  lastName: string;
}
function greeter(person: Person) {
  const { firstName, lastName } = person;
  return "Hello, " + firstName + " " + lastName;
}
let user = {
  firstName: "Michael",
  lastName: "Lu"
};
console.log( greeter(user) );
*/

// 类
/*
class Student {
  fullName: string;
  constructor(
    public firstName,
    public middleInitail,
    public lastName
  ) {
    this.fullName = firstName + middleInitail + lastName;    
  }
}
interface Person {
  firstName: string;
  lastName: string;
}
let user = new Student('Jane', 'M.', 'User');
function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}
console.log( greeter(user) );
*/