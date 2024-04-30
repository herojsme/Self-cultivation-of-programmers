类装饰器:
    @testable
    class MyTestableClass {
    // ...
    }

    function testable(target,context) {
        target.isTestable = true;
        console.log('context', context)
    }

    MyTestableClass.isTestable; // true

类方法装饰器:
    function replaceMethod() {
        return function () {
        return `How are you, ${this.name}?`;
        }
    }
    
    class Person {
        constructor(name) {
        this.name = name;
        }
        @replaceMethod
        hello() {
        return `Hi ${this.name}!`;
        }
    }
    
    const robin = new Person('Robin');
    
    robin.hello(), 'How are you, Robin?'
