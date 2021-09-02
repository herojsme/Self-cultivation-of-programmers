// 挂载
// constructor(){}
// 渲染到dom前
// componentWillMount(){}  可用 static getDerivedStateFromProps(props, state)
// render(){}
// 渲染到dom后
// componentDidMount(){}

//更新
// componentWillReceiveProps(nextProps){}   可用 static getDerivedStateFromProps(props, state)
// shouldComponentUpdate(nextProps, nextState)
// render()
// getSnapshotBeforeUpdate()    在这里进行捕获值将作为返回值给componentDidMount(prevProps, prevState, snapshot){}的第三个参数
// componentDidMount(prevProps, prevState, snapshot)

// 卸载
// componentWillUnMount()
// 错误
// static getDerivedStateFromError()
// componentDidCatch()
