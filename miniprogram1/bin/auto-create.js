const { dashedName, generateFile, addPageToJson } = require('./utils.js')
const path = require('path') // 引入绝对路径
const { PageTemplate, ComponentTemplate } = require('./template.js')

const type = process.argv[2] // page component类型
const name = process.argv[3] // 页面名称

const rootPath = path.relative('./')
const pagePath = `${rootPath}/src/pages`
const componentsPath = `${rootPath}/components`

const lowerDashedName = dashedName(name).toLocaleLowerCase(); // Test-Page => test-page

switch (type) {
	case 'page': {
		const path = `${rootPath}/${lowerDashedName}/index.vue`
		const content = PageTemplate(name)
		// 生成文件
		generateFile(path, content)
		// 把新页面路由添加到 pages.json
		addPageToJson(`pages/${lowerDashedName}/index`)
		break;
	}
	case 'component': {
		// 文件夹名需要和文件名相同
		const path = `${rootPath}/${lowerDashedName}/${lowerDashedName}.vue`
		const content = PageTemplate(name)
		// 生成文件
		generateFile(path, content)
		break;
	}
}

console.log(`创建${type}-${name}成功`)
process.exit(0) //退出运行