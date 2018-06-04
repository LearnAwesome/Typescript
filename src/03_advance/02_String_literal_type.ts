// 字符串字面量类型
// 用来约束取值只能是某几个字符串中的一个

type TEventNames = 'click' | 'scroll' | 'mousemove';
function handleEvent(ele: Element, event: TEventNames): any {}

// handleEvent(document.getElementById('foo'), 'click');
// handleEvent(document.querySelector('#foo'), 'mousedown'); // error: Argument of type '"mousedown"' is not assignable to parameter of type 'TEventNames'.