<script lang="ts">
    import Vue from 'vue';
    export default Vue.extend({
        mpType: 'app',
        onLaunch() {
            console.log('App Launch')
        },
        onShow() {
            console.log('App Show')
            
            const updateManager = uni.getUpdateManager()
            updateManager.onCheckForUpdate((res) => {
                //检测到更新
                if (res.hasUpdate) {
                    uni.showLoading({
                        title: '更新下载中。。。请不要离开。。。'
                    })
                }
            })
			updateManager.onUpdateReady(() => {
				//更新已完成
				uni.hideLoading()
				uni.showModal({
					title: '更新提示',
					content: '新版本已准备好了，是否重启应用?',
					success: (res) => {
						if(res.confirm){
							//调用apply新版本并启用
							updateManager.applyUpdate()
						}
					}
				})
			})
			updateManager.onUpdateFailed(() => {
				uni.hideLoading()
				uni.showToast({
					title: '更新下载失败',
					icon: 'none'
				})
			})
        },
        onHide() {
            console.log('App Hide')
        }
    });
</script>

<style>
    /*每个页面公共css */
</style>
