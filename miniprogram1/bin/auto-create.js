const type = process.argv[2] // page component类型
const name = process.argv[3] // 页面名称

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