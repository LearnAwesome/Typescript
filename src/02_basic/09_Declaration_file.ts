// 当使用第三方库时，我们需要引用它的声明文件。

// 先用npm install @types/lodash安装声明文件
// 可以在http://microsoft.github.io/TypeSearch/寻找声明文件
import * as _ from "lodash"; /* tslint-disable-line */

console.log(_.partition([1, 2, 3, 4], (n: any) => n % 2));