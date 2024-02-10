/**
 * 定义版本信息
 */

export class WxAccountInfo {
	private static readonly DEFAULT_VERSION = '1.0.0'
	private static privateVersion: string
	
	static get version() {
		return this.privateVersion || this.getVersion()
	}
	
	private static getVersion() {
		try {
			if (uni.getAccountInfoSync) {
				const accountInfo = uni.getAccountInfoSync()
				this.privateVersion = accountInfo.miniProgram.version || this.DEFAULT_VERSION
			} else {
				this.privateVersion = this.DEFAULT_VERSION
			}
			return this.privateVersion
		} catch(e) {
			return this.DEFAULT_VERSION
		}
	}
	
}