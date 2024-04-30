// 挂载
// constructor(){}
// 渲染到dom前
// componentWillMount(){}  可用 static getDerivedStateFromProps(props, state)
// render(){}
// 渲染到dom后
// componentDidMount(){}

//更新
// componentWillReceiveProps(nextProps){}   可用 static getDerivedStateFromProps(props, state)
// shouldComponentUpdate(nextProps, nextState) 允许某些组件渲染
// render()
// getSnapshotBeforeUpdate()    在这里进行捕获值将作为返回值给componentDidMount(prevProps, prevState, snapshot){}的第三个参数
// componentDidMount(prevProps, prevState, snapshot)

// 卸载
// componentWillUnMount()
// 错误
// static getDerivedStateFromError()
// componentDidCatch()

// hooks
// 生命周期函数乱
// class this容易忘绑定
//     State Hook
//         useState
//         useReducer
//         useState少量代码，当多个事件处理程序以相似的方式修改useReducer节省代码，可读性、可调试性、可测试性在业务复杂时，useReducer好于useState
//     Context Hook
//         useContext  provider  多个层级中,整个组件树提供数据
//           const ThemeContext = React.createContext(themes.light);
//           <ThemeContext.Provider></ThemeContext.Provider>;
//           const value = useContext(ThemeContext);
//     Ref Hook
//         useRef  保存一些不用于渲染的信息
//         useImperativeHandle 自定义从组件中暴露的 ref,一般跟forwardRef
//     Effect Hook
//         useEffect 将组件与外部系统(网络、某些浏览器 API 或第三方库保持连接)同步
//            useEffect(() => {
//               const subscription = props.source.subscribe();
//                 return () => {
//                     // 清除订阅
//                     subscription.unsubscribe();
//                 };
//             });
//         useLayoutEffect 在浏览器重新绘制屏幕之前
//         useInsertionEffect 布局副作用触发之前
//     性能 Hook
//         useMemo   缓存计算结果
//         useCallback 缓存函数定义
//     资源 Hook
//         use 允许读取像 Promise 或 上下文 这样的资源的值
//     自定义 Hook
//         use 开头

// 状态管理：
//     props
//     context
//     redux
//     ref

// 内置组件
{
  /* 
<Fragment> 
<Suspense> 
*/
}
