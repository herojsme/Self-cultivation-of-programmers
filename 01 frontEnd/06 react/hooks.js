// render-props 高阶组件  层级太长
// 生命周期函数乱
// class this容易忘绑定

//有闭包
// const [state, setState] = useState(0);

// hook
// const [state, setState] = useState(initialState);
// useEffect(() => {
//   const subscription = props.source.subscribe();
//   return () => {
//     // 清除订阅
//     subscription.unsubscribe();
//   };
// });
// 条件执行;
// useEffect(() => {
//   const subscription = props.source.subscribe();
//   return () => {
//     subscription.unsubscribe();
//   };
// }, [props.source]);

//上下文
// const ThemeContext = React.createContext(themes.light);
// <ThemeContext.Provider></ThemeContext.Provider>;
// const value = useContext(ThemeContext);

//   useMemo
//   useRef  不单单元素dom引用,可以任意数据
//   useReducer
//   useImperativeHandle
//   useLayoutEffect
//   useCallback
