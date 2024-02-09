const { dashedName } = require('./utils.js')
const path = require('path') // 引入绝对路径

const type = process.argv[2] // page component类型
const name = process.argv[3] // 页面名称

const rootPath = path.relative('./')
const pagePath = `${rootPath}/src/pages`
const componentsPath = `${rootPath}/components`

const lowerDashedName = dashedName(name).toLocaleLowerCase(); // Test-Page => test-page

switch (type) {
	case 'page': {
		break;
	},
	case 'component': {
		break;
	}
}

console.log(`创建${type}-${name}成功`)
process.exit(0) //退出运行