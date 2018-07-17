// 类与接口
// 接口可以对类的一部分进行抽象

// 类实现接口 implements
// 实现接口中的属性及方法必须被实现
// 可以实现多个接口，用 , 隔开
/*
interface IAlarm {
  name: string;
  alert(): void;
}
interface ILight {
  lightOn(): void;
  lightOff(): void;
}

class Door {}
class SecurityDoor extends Door implements IAlarm {
  name = 'SecurityDoor';
  alert() {
    console.log(this.name, 'Door');
  }
}
class Car implements IAlarm, ILight {
  name = 'Car';
  alert() {
    console.log(this.name, 'Car');
  }
  lightOn() {
    console.log('light on');
  }
  lightOff() {
    console.log('light off');
  }
}
*/

// 接口继承
/*
interface IAlarm {
  alert(): void;
}
interface ILightableAlarm extends IAlarm {
  lightOn();
  lightOff();
}
*/

// 接口继承类
/*
class Vector2 {
  x: number;
  y: number;
}
interface IVector3 extends Vector2 {
  z: number;
}
const vector3: IVector3 = { x: 1, y: 2, z: 3 };
*/