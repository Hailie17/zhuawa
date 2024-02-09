/**
 * 转换大小写
 * 将Test-Page 转化为test-page
 */ 
const dashedName = name => {
	const replaced = name.replace(/([A-Z])/g, '-$&')
	return replaced[0] === '-' ? replaced.slice(1) : replaced
}
