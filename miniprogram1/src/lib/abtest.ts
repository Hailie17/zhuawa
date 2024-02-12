interface TestSchema {
	key: any;
	data: any;
	proportion?: number
}
// a 10%
// b 20%
// c 70%

export function getTestSchema(testName: string, schemaList: TestSchema[]): TestSchema {
	const averageSchema = schemaList.reduce((pre, current) => {
		if(pre.indexOf(current.key) > -1) {
			throw new Error('key 需要唯一')
		}
		let proportion = current.proportion || 1
		while(proportion--) {
			pre.push(current.key)
		}
		return pre
	}, [] as any[])
	
	let abKey = uni.getStorageSync(testName)
	if(!abKey) {
		abKey = averageSchema[Math.floor(Math.random() * averageSchema.length)]
		uni.setStorageSync(testName, abKey)
	}
	return schemaList.find(item => item.key === abKey)!
}