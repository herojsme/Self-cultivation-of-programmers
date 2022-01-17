# 基本配置
entry 入口
output 出口
loader 模块转换器
plugins 插件 特定时机注入逻辑更改结果
module  模块 开放这将程序分解成离散功能块


# 执行流程
 从入口文件entry里递归找到所有的module,根据响应的loader去解析,对module转换后解析当前module所依赖的module,这些模块以entry为分组,一个entry和所有依赖的module都是一个chunk,webpack会把所有chunk转换文件,整个流程中会有一些时机钩子,plugin会在适当的时机执行

# 本地服务
* 热加载
* 可代理
* webpack-dev-serve  启动一个本地服务器运行代码
* source-map

# loader
css-loader less-loader style-loader typescript-loader 

# plugin
html-webpack-plugin

# 自己写 plugin


 
# webpack优化
* optimization
* cache
* 代码分离  splitChunckPlugin
* 动态导入  dynamic import
* 懒加载
* tree shaking 检测未使用模块
* 压缩

# 构建优化
* dll
* thread-loader  worker pool
* 持久化缓存


# 开发便捷
* require.context   支持glob,获取搜索的目录的所有文件
* web worker
* shiming预设依赖
	- 全局导入 
		- webpack.ProvidePlugin全局变量, 暴露出某个模块中单个导出,也可以[module, child, ...children?]）实现只导出模块某几个功能,和tree-sharking配合
	- 全局导出  exports-loader
	- polyfill  可以条件加载
	- babel-preset-env通过browserslist转译浏览器不支持的特性.通过useBuilIns设置为true
* 离线应用  workbox-webpack-plugin


# 微前端 ModuleFederationPlugin
