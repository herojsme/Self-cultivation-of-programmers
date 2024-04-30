#### 类型

- any
- boolean
- string
- symbol
- object
- null
- undefined
- array Array<type> type[]
- enum
- unknown 可以视为顶级类型,任何类型都可以赋值给 unknown,但 unknown 只能赋给 unknown 跟 any 类型
- void 什么也没有,严格模式下等于 undefined
  ```
  void 和 undefined 类型最大的区别是，你可以理解为 undefined 是 void 的一个子集
  type Props = {
  getValue: () => void;  // 这里的void表示逻辑上不关注具体的返回值类型，number、string、undefined等都可以
  }
  function Child({ getValue }: Props) => <div>{getValue()}</div>
  ```
- never
  - never 是指没法正常结束返回的类型，一个必定会报错或者死循环的函数会返回这样的类型。
  ```
  function foo(): never { throw new Error('error message') } // throw error 返回值是never function foo(): never { while(true){} } // 这个死循环的也会无法正常退出 function foo(): never { let count = 1; while(count){ count ++; } } // Error: 这个无法将返回值定义为never，因为无法在静态编译阶段直接识别出
  ```
  - 还有就是永远没有相交的类型。
  ```
  type human = 'boy' & 'girl' // 这两个单独的字符串类型并不可能相交，故human为never类型
  ```
  - 任何类型联合上 never 类型，还是原来的类型。
  ```
  type language = 'ts' | never // 还是'ts'类型
  ```
  - 在一个函数中调用了返回 never 的函数后，之后的代码都会变成 deadcode
  ```
  function test() { foo(); // 这里的foo指上面返回never的函数 console.log(111); // Error: 永远不会执行 }
  ```
  - 无法把其他类型赋给 never，包括 any
  ```
  let n: never; let o: any = {}; n = o; // Error
  ```

#### 元组

tuple 元组

#### 枚举 enum

默认从 0 自增,可自定义修改

#### 断言

1 类型断言

- 尖括号 <string/>
- as

2 非空断言:

- 带!

```
值后面带!
function myFunc(maybeString: string | undefined | null) {
  const onlyString: string = maybeString; // Error
  const ignoreUndefinedAndNull: string = maybeString!; // Ok
}
函数调用带!
type NumGenerator = () => number;
function myFunc(numGenerator: NumGenerator | undefined) {
  const num1 = numGenerator(); // Error
  const num2 = numGenerator!(); //OK
}
```

- 明确赋值

```
// let x: number;  报错
let x!: number;    //ok 通过 let x!: number; 确定赋值断言，编译器属性会被明确赋值。
initialize();
console.log(2 * x); // Ok

function initialize() {
  x = 10;
}
```

- 排除 undefined null

#### 类型保护

- in 联合类型之间
- typeOf number string symbol boolean
- instanceOf
- is 用户自定义的类型保护

  ```
  //这里可以注意到我们不得不多次使用类型断言
  //if ((<Fish>pet).swim) {
  //(<Fish>pet).swim();
  //}
  //else {
  //(<Bird>pet).fly();
  //}

  function isFish(pet: Fish | Bird): pet is Fish {
    return (<Fish>pet).swim !== undefined;
  }
  // 只需要一次检查过类型
  // 'swim' 和 'fly' 调用都没有问题了
  if (isFish(pet)) {
  pet.swim();
  }
  else {
  pet.fly();
  }
  ```

#### 联合类型

- xx|yy

#### 交叉类型

- xx&yy
- type pX={x:number}
- type pB=pX & {y:number}
- 同名交叉类型

```

基础类型属性交叉
type a={a:string} type b= a& {a:number}; a 为 never
非基础类型属性交叉
type a={a:{b:number}} type b= a& {a:{c:string}}; a 为{b:number,c:string}

```

#### 函数

- 必填参数
- 可选参数 ?
- 重载 通过参数重载
- 剩余参数...符号加自定义名称

#### 数组,对象

- 数组 let of
- 解构

#### 类型别名

- type a=string|number;

#### 接口 interface

- 任意属性 [propName: string]: any;
- 对象 interface sss{key:value}
- 函数 interface Fn{():void}
- 与类型别名区别

  - 类型别名用法更多点,可以用于原始类型,联合类型,元组 type a=string;
  - extends 接口跟类型别名可以互相扩展,接口可以扩展类型别名,反过来不行
  - implements 不能实现类型别名的联合类型

        ```
        type Ab={a:number}|{b:string};
        class s implements Ab{
            a:1,
            b:'456'
        }
        报错
        ```

#### class

- 私有 private 符号 #字符
- 抽象类 abstract 抽象类不能实例化
- 访问器 getter setter
- 继承 extends
- 类方法也支持重载

#### 泛型

- 类型名<泛型列表> 具体类型定义
- 可以理解为占位符,需要的时候传入,像函数参数一样
- 泛型工具类型

  - 基础:

    - typeof 可以获取变量的声明或对象的类型

    ```
    interface Person{ name:string,age:number}
    const tom:Person={name:"小张",age:25}
    type Tom =typeof tom // Person
    ```

    - keyof

    ```
    interface Person {
    name: string;
    age: number;
    }

    type K1 = keyof Person; // "name" | "age"
    type K2 = keyof Person[]; // "length" | "toString" | "pop" | "push" | "concat" | "join"
    type K3 = keyof { [x: string]: Person };  // string | number
    ```

    - in 遍历类型

    ```
    type Keys="a"|"b"|"c";

    type obj={
        [p in Keys]:any
    }
    ```

    - infer
    - extends 泛型名 extends 类型

    ```
    T extends U  T为U的子集
    T extends U? X: Y
    T extends U? T: never 返回的 T，是满足原来的 T 中包含 U 的部分，可以理解为 T 和 U 的交集。
    ```

  - Readonly<T> 全部标记为只读

    ```
    type Readonly<T> = {
    readonly [P in keyof T]: T[P];
    }
    ```

  - Partial<T> 全部标记为可选

  ```
  type Partial<T> = {
  [key in keyof T]?: T[P]
  }
  ```

  - Required<T> 全部标记为必选

  ```
  type Required<T> = {
  [P in keyof T]-?: T[P]
  }
  ```

  - Pick<T, K>

  ```
  type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };
  ```

  - Record<K, T>

  ```
  type Record<K extends keyof any, T> = {
    [P in K]: T;
  };
  ```

  - Exclude<T, U> 从 T 中剔除可以赋值给 U 的类型。

  ```
  type Exclude<T, U> = T extends U?never:T;
  ```

  - Extract<T, U> -- 提取 T 中可以赋值给 U 的类型。

  ```
  type Exclude<T, U> = T extends U?T:never;
  ```

  - NonNullable<T> -- 从 T 中剔除 null 和 undefined

  ```
  type NonNullable<T> = T extends null | undefined ? never : T;
  ```

  - Omit<T, K>

  ```
  type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
  ```

  - ReturnType<T>

  ```
  type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
  ```

  - InstanceType<T> -- 获取构造函数类型的实例类型。

#### 关键字

- extends
- implements
- keyOf
- typeOf
- instanceOf
- in
- is

#### 装饰器

- 属性装饰
- 类装饰
- 方法装饰
- 参数装饰

#### 开发配置

- tsconfig.json
- files 需要编译的文件名称
- includes 包含哪些
- excludes 不包含哪些
- compilerOptions 编译流程

#### 工具

- typescript eslint 搭配 typescript-eslint
