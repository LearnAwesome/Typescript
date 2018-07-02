// 内置对象
// Typescript拥有所有javascript的内置对象
// 特有的内置对象: Document、HTMLElement、Event、NodeList等
const doc: Document = document;
const body: HTMLElement = document.body;
const allDiv: NodeList = document.querySelectorAll('div');
document.addEventListener('click', function(e: MouseEvent): any{});

// 用TypeScript写Node.js，需要引入node的声明文件