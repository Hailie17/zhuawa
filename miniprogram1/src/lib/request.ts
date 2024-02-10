/**
 * 封装请求
 */


type RequestMethod = "GET" | "POST" | "PUT" | "OPTIONS" | "HEAD" | "DELETE" | "TRACE" | "CONNECT"

const request = async(url: string, params?: object, method: RequestMethod = 'GET', header: Object={}) => {
	return await new Promise((resolve, reject) => {
		uni.request({
			url,
			method,
			header,
			data: {
				...params
			},
			success: (res) => {
				if(res.statusCode !== 200) {
					reject(res.data)
				} else {
					resolve(res.data)
				}
			},
			fail: (e) => {
				reject(e)
			}
		})
	}).catch(e => {
		const errorMsg = `${method} ${url} failed: ${e.status} ${e.message}`
		console.error(new Error(errorMsg))
		commonErrorHandler(e)
	})
}

/**
 * 错误处理
 */
const commonErrorHandler = e => {
	let msg = ''
	if(e.status > 499) {
		// 5xx错误一般是服务端错误，所以单独处理
		msg = '服务器错误'
	} else if (e.errMsg === 'request:fail' || e.errMsg === 'request:fail timeout'){
		// 可能是断网或者弱网
		msg = '无法连接至服务器'
	}
	if(msg) {
		uni.showToast({
			title: msg,
			icon: 'none',
			duration: 4000
		})
	}
}