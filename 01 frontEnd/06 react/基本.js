// React.Component
// React.PureComponent 浅比较 shouldComponentUpdate props state
// React.memo   记忆组件,浅比较, 可以用第二个参数自定义比较
// React.createElement(
//     type,
//     [props],
//     [...children]
//   )
// React.createFactory(type)
// React.cloneElement(
//     element,
//     [props],
//     [...children]
//   )
//   React.isValidElement(object)
// React.Children
//   React.Children.map(children, function[(thisArg)])
//  React.Children.forEach(children, function[(thisArg)])
//  React.Children.count(children)
//  React.Children.only(children)
//  React.Children.toArray(children)

// ReactDom.render()
// ReactDom.hydrate() 与render一样,但是是服务器端用
// ReactDom.unmountComponentAtNode()  //dom中卸载
// ReactDom.findDOMNode()   查找dom node
// ReactDom.createPortal()   渲染到dom节点

// class组件内
// forceUpdate() 强制让组件重新渲染

// class属性
// defaultProps
// displayName  调试

// 事件小驼峰命名
// jsx 表达式   三元表达式  返回null阻止组件渲染
// key 可以识别列表中哪个组件需要渲染
// 表单受控组件和非受控组件
//受控  value===>this.state控制
//非受控  表单数据由dom节点控制,用ref获取表单数据

// 无障碍要照顾残疾人之类的  html编写  朗读之类的
// 鼠标和指针 window的click弹窗可以用  onFocus onBlur实现

//代码分割  import()结合 React.lazy,Suspense组件包裹懒组件  服务器渲染可以用loadableComponents
// 错误捕捉  组件内部定义componentDidCatch()或者static getDerivedStateFromError()

// refs   React.createRef()创建ref,再把ref指向元素
//refs转发   ref指向组件,组件可以用 forwardRef(props,ref)接受,然后再转发ref
// 函数组件ref不能使用,如果要用可以跟forwardRef配合
// fragment  <></>
// 也可以用回调ref  <input ref={ins=>this.intRef=ins}/>

// 高阶组件   函数接收一个组件返回一个新组件
// 组件上的静态不会被高阶组件继承,所以的自己拷贝  hoist-non-react-statics
// ref不会被传递,ref不在props里面
//  不要在render里使用hoc
//  不要修改原组件  里面的案例用了一个Input组件说明,如果直接更改Input的ComponentDidMount就会导致原来的直接用Input组件的地方都将被改动

// 与其他库协同
// ref 获取dom
//ReactDom.render 渲染原生dom

// jsx是react.createElement的语法糖
// 组件首字母必须大写
// props的key没有赋值默认为true

//性能问题 具体看文档
//压缩terser  webpack rollup
// react 分析器
//immutability-helper

// portals
//ReactDom.createPortal(child,container)  事件冒泡到React树而不是dom树

//profiler  可以分析渲染组件的开销  onRenderFn可以获取开销
{
  /* <Profiler id='main' onRender={onRenderFn} >
  <Profiler id="int1">
      <Input/>
  </Profiler>
  <Profiler id="int2">
      <Input/>
  </Profiler>
  </Profiler>     */
}

// renderProps  动态渲染
// 跟PureComponent要注意,因为浅比较 props 的时候总会得到 false,永远生成新值
// childrenProps

// 静态类型检查  ts
// 类型检查  props-types

// 测试
// jest
