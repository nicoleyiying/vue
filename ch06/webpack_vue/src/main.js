// 如何在 webpack 构建的项目中，使用 Vue 进行开发

/* 复习 在普通网页中如何使用vue： 
 * 1. 使用 script 标签 ，引入 vue 的包
 * 2. 在 index 页面中，创建 一个 id 为 app div 容器
 * 3. 通过 new Vue 得到一个 vm 的实例*/

/* 在webpack 中尝试使用 Vue：
 * 注意： 在 webpack 中， 使用 import Vue from 'vue' 导入的 Vue 构造函数，
 * 功能不完整，只提供了 runtime-only 的方式，并没有提供 像网页中那样的使用方式；*/
import Vue from 'vue';
//import Vue from '../node_modules/vue/dist/vue.js';
/* 包的查找规则：
 * 1. 找 项目根目录中有没有 node_modules 的文件夹
 * 2. 在 node_modules 中 根据包名，找对应的 vue 文件夹
 * 3. 在 vue 文件夹中，找 一个叫做 package.json 的包配置文件
 * 4. 在 package.json文件中，查找 一个 main属性【main属性指定了这个包在被加载时的入口文件】*/

/*var login = {
	template:'<h1>This is login component, created by web page. </h1>'
}*/
// 1. 导入 login 组件
import login from './login.vue';
/* 默认，webpack 无法打包 .vue 文件，需要安装 相关的loader： 
 * cnpm i vue-loader vue-template-compiler -D
 * 在配置文件中，新增loader配置项 { test:/\.vue$/, use: 'vue-loader' }*/
var vm = new Vue({
	el: '#app',
	data: {
		msg: '123'
	},
	/*components:{
		login
	},*/
	// 在 webpack 中，如果想要通过 vue， 把一个组件放到页面中去展示，vm实例中 render函数可以实现
	/*render: function(createElements) {
		return createElements(login);
	}*/
	//(createElements)只有一个参数，括号可以省略，
	/*render: createElements => {
		return createElements(login);//不写括号，默认会return
	}*/
	render: c => c(login)
});
import m1, {
	title as title123,
	content
} from './test.js'
console.log(m1);
console.log(title123 + ' --- ' + content);