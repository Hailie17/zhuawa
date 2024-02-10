const fs = require('fs')
const path = require('path')
/**
 * 转换大小写
 * 将Test-Page 转化为test-page
 */ 
const dashedName = name => {
	const replaced = name.replace(/([A-Z])/g, '-$&')
	return replaced[0] === '-' ? replaced.slice(1) : replaced
}

/**
 * 生成文件方法
 */
function generateFile(path, content) {
	const pathList = path.split('/')
	let currentPath = ''
	
	for(let item of pathList) {
		currentPath = currentPath + '/' + item
		if(currentPath.indexOf('.vue' > -1)) {
			if(fs.existsSync(path)) {
				console.error('文件已经存在，请重新命名')
				process.exit(0)
			}else{
				// 不存在，新建
				fs.writeFile(currentPath, content, {
					encoding: 'utf-8'
				})
			}
			break;
		}
		// 还没走到最后的index.vue，检查到了目录不存在就创建目录
		if(!fs.existsSync(currentPath)) {
			fs.mkdirSync(currentPath)
		}
	}
}

/**
 * 把新页面路由添加到 pages.json
 */
function addPageToJson(pagePath) {
	const jsonPath = `${path.resolve('./')}/src/pages.json`
	// 读取原有 pages.json 的内容
	const content = fs.readFileSync(jsonPath, {
		encoding: 'utf-8'
	})
	const parseContent = JSON.parse(content)
	// 更新内容
	const newContent = JSON.stringify({
		...parseContent,
		pages: parseContent.pages.concat({
			path: pagePath
		})
	})
	// 写入更新
	fs.writeFileSync(jsonPath, content, {
		encoding: 'utf-8'
	})
}

module.exports = {
	dashedName, generateFile
}