// 由于 webpack 是基于Node进行构建的，所有，webpack的配置文件中，任何合法的Node代码都是支持的
var path = require('path');
/* 在内存中，根据指定的模板页面，生成一份内存中的首页，同时自动把打包好的bundle注入到页面底部
 * 如果要配置插件，需要在导出的对象中，挂载一个 plugins 节点*/
var htmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
/* 在内存中，根据指定的模板页面，生成一份内存中的首页，同时自动把打包好的bundle注入到页面底部
 * 如果要配置插件，需要在导出的对象中，挂载一个 plugins 节点*/
/* 当以命令行形式运行 webpack 或 webpack-dev-server 的时候，工具会发现，
 * 我们并没有提供 要打包 的文件的 入口 和 出口文件，此时，他会检查项目根目录中的配置文件，
 * 并读取这个文件，就拿到了导出的这个 配置对象，然后根据这个对象，进行打包构建*/
module.exports = {
	//入口文件
	entry:path.join(__dirname,'./src/main.js'),
	//指定输出选项
	output:{
		//输出路径
		path:path.join(__dirname,'./dist'),
		//指定输出文件的名称
		filename:'bundle.js'
	},
	// 所有webpack  插件的配置节点
	plugins:[
		new htmlWebpackPlugin({
			// 指定模板文件路径
			template:path.join(__dirname,'./src/index.html'),
			// 设置生成的内存页面的名称
			filename:'index.html'
		}),
		new VueLoaderPlugin()
	],
	// 配置所有第三方loader 模块的
	module:{
		// 第三方模块的匹配规则
		rules:[
			// 处理 CSS 文件的 loader
			{
				test:/\.css$/,
				use:['style-loader','css-loader']
			},
			// 处理 less 文件的 loader
			{
				test:/\.less$/,
				use:['style-loader','css-loader','less-loader']
			},
			// 处理 scss/sass 文件的 loader
			{
				test:/\.scss$/,
				use:['style-loader','css-loader','sass-loader']
			},
			// 处理 图片路径的 loader
			{
				test:/\.(jpg|png|gif|bmp|jpeg)$/,
				/* limit给定的值，是图片的大小，单位是 byte， 如果我们引用的图片，大于或等于给定的 limit值，
				 * 则不会被转为base64格式的字符串， 如果 图片小于给定的 limit值，则会被转为 base64的字符串*/
				use:'url-loader?limit=114002&&name=[hash:8]-[name].[ext]'//[name].[ext]
			},
			{
				test:/\.(ttf|eot|svg|woff|woff2)$/,
				use:'url-loader'
			},
			// 配置 Babel 来转换高级的ES语法
			{
				test:/\.js$/,
				use:'babel-loader',
				exclude:/node_modules/
			},
			// 处理 .vue 文件的 loader
			{ 
				test:/\.vue$/, 
				use: 'vue-loader' 
			}
		]
	},
	resolve:{
		// 修改 Vue 被导入时候的包的路径
		alias:{
			//'vue$':'vue/dist/vue.js'
		}
	}
}
