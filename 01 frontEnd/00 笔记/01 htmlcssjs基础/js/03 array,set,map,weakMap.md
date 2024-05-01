### array

```javascript
  切割截取 slice splice  split
  遍历  reduce  reduceRight  every some filter
  数据进出  push pop unshift shift
  复制 arr.slice()
   从某数组拷贝 Array.form(arr) [...arr]
   判断Array.isArray  Object.prototype.toString.call(arr)==="[Object Array]"
  reverse()
```

### Set WeakSet Map Map

```javascript
// Set
    prototype
        size
        has()
        add()
        delete()
        clear()
        forEach()
        entries()
        entries()
        keys()
        values()
// WeakSet
    prototype
        has()
        add(obj)  //增加对象
        delete()
// Map
    prototype
        size
        get()
        has()
        add()
        delete()
        clear()
        forEach()
        entries()
        entries()
        keys()
        values()

    const contacts = new Map();
    contacts.set("Jessie", { phone: "213-555-1234", address: "123 N 1st Ave" });
// WeakMap  一种键值对的集合，其中的键必须是对象或非全局注册的符号，且值可以是任意的 JavaScript 类型，并且不会创建对它的键的强引用。
    prototype
        get()
        has()
        add()
        delete()
    const wm1 = new WeakMap();
    const wm2 = new WeakMap();
    const wm3 = new WeakMap();
    const o1 = {};
    const o2 = function () {};
    const o3 = window;

    wm1.set(o1, 37);
    wm1.set(o2, "azerty");
    wm2.set(o1, o2); // value 可以是任意值，包括一个对象或一个函数
    wm2.set(o2, undefined);
    wm2.set(wm1, wm2); // 键和值可以是任意对象，甚至另外一个 WeakMap 对象
```
