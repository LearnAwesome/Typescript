function classDecorator<T extends { new(...args:any[]):{} }>(constructor:T) {
    return class extends constructor {
        newProperty = "new property";
        hello = "override";
    }
}

@classDecorator
class Greeter {
    private property = "property";
    private hello: string;
    constructor(private m: string) {
        this.hello = m;
    }
}

console.log(new Greeter("world"));