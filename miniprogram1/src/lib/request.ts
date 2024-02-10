/**
 * 封装请求
 */

type RequestMethod = "GET" | "POST" | "PUT" | "OPTIONS" | "HEAD" | "DELETE" | "TRACE" | "CONNECT"

const request = async(url: string, params?: object, method: RequestMethod = 'GET', header: Object={}) => {
	return await new Promise(() => {
		uni.request({
			url,
			method,
			header,
			data: {
				...params
			}
		})
	})
}