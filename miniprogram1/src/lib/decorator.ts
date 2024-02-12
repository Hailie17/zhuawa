/**
 * 计算某个函数运行多长时间
 */
export function measure(target, name, descriptor) {
	let oldValue = descriptor.value // 原来的方法
	descriptor.value = async function() {
		const start = Date.now()
		let result = await oldValue.apply(this, arguments)
		console.log(`${name} 执行耗时 ${Date.now() - start}`)
		return result
	}
	return descriptor
}