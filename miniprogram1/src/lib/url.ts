/**
 * 处理url的方法
 */
export function appendParamsToUrl(url: string = '', params: object) {
	let resultUrl = url
	// 将对象转化为 queryString
	// {a: 1111, b: 2222} => a=1111&b=2222
	let queryStringParams = Object.keys(params).map(key => `${key}=${encodeURIComponent(params[key])}`).join('&') // Object.keys(params) 遍历params的key a 和 b；encodeURIComponent()防止其他字符如+影响url
	if(queryStringParams) {
		// www.baidu.com?a=111 => &
		// www.baidu.com => ?
		resultUrl = url + (resultUrl.indexOf('?') === -1 ? '?' : '&') + queryStringParams
	}
	return queryStringParams
}