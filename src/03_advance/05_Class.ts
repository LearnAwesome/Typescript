// 类

/** 类的特点
* 类(Class)：定义了一件事物的抽象特点，包含它的属性和方法
* 对象（Object）：类的实例，通过 new 生成
* 面向对象（OOP）的三大特性：封装、继承、多态
* 封装（Encapsulation）：将对数据的操作细节隐藏起来，只暴露对外的接口。外界调用端不需要（也不可能）知道细节，就能通过对外提供的接口来访问该对象，同时也保证了外界无法任意更改对象内部的数据
* 继承（Inheritance）：子类继承父类，子类除了拥有父类的所有特性外，还有一些更具体的特性
* 多态（Polymorphism）：由继承而产生了相关的不同的类，对同一个方法可以有不同的响应。比如 Cat 和 Dog 都继承自 Animal，但是分别实现了自己的 eat 方法。此时针对某一个实例，我们无需了解它是 Cat 还是 Dog，就可以直接调用 eat 方法，程序会自动判断出来应该如何执行 eat
* 存取器（getter & setter）：用以改变属性的读取和赋值行为
* 修饰符（Modifiers）：修饰符是一些关键字，用于限定成员或类型的性质。比如 public 表示公有属性或方法
* 抽象类（Abstract Class）：抽象类是供其他类继承的基类，抽象类不允许被实例化。抽象类中的抽象方法必须在子类中被实现
* 接口（Interfaces）：不同类之间公有的属性或方法，可以抽象成一个接口。接口可以被类实现（implements）。一个类只能继承自另一个类，但是可以实现多个接口
*/

// 基本写法
/** 包括全部的ES6特性
 * 构造器 constructor
 * 属性及方法
 * 继承 extends super()
 * 存取器 getter setter
 * 静态方法 static method()
 */

/** 包括ES7特性
 * 静态属性 static prop = something;
 */
/*
class Animal {
  static type: string = 'Parent';
  name: string;
  constructor(name) {
    this.name = name;
  }
  say() {
    console.log(`Hello, my name is ${this.name} (${Animal.type})`);
  }
}
const animal = new Animal('Jack');
animal.say(); // 'Hello, my name is Jack (Parent)'
*/

// 访问修饰符 Access Modifiers
// public 公有，可以在任何地方访问到（默认）
// private 私有，只能在类的内部访问到，并且不能在子类中直接访问
// protected 受保护，只能在类的内部访问到，但是可以被子类访问
/*
  class Animal {
    private name: string = 'Jack';
    protected id: number;
    constructor() {
      this.id = 1;
    }
    say(): void {
      console.log(this.name);
    }
  }
  const animal = new Animal();
  // console.log(animal.name); // ERROR: Property 'name' is private and only accessible within class 'Animal'.
  animal.say(); // 'Jack'
  
  class Cat extends Animal {
    constructor() {
      super();
      // console.log(this.name); // ERROR: Property 'name' is private and only accessible within class 'Animal'.
      console.log(this.id); // 1
    }
  }
  const cat = new Cat();
  cat.say(); // 'Jack' 继承来的父类的方法中，直接访问了父类的私有属性，不受影响
*/

// 抽象类及抽象方法 abstract
// 抽象类：不允许被实例化，只能用来被继承
// 抽象方法：必须通过子类去实现
/*
abstract class Animal {
  name: string;
  constructor(name) {
    this.name = name;
  }
  abstract say(): void;
}
// const animal = new Animal('Jack'); // ERROR: Cannot create an instance of an abstract class.
class Cat extends Animal {
  constructor(name) {
    super(name);
  }
  say() {
    console.log(`Hello, my name is ${this.name}`);
  }
}
const cat = new Cat('Jack');
cat.say(); // 'Hello, my name is Jack'
*/