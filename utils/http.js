
import envInfo from './env';

let baseURL = envInfo.url

/** 请求拦截器 */
const httpInterceptor = {
    invoke(options) {
        // 判断请求地址是否为http开头，如果不是，则添加baseURL前缀
        if (!options.url.startsWith('http')) {
            options.url = baseURL + options.url
        }

        // 请求超时
        options.timeout = 10000

        // 获取token
        const memberStore = useMemberStore()
        const token = memberStore?.token

        /**请求头配置 */
        options.header = {
            ...options.header,
            'Authorization-Token': token,
        }
    },
}

// 添加请求拦截器
uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)

/**请求函数 */
export const http = (options) => {
    return new Promise((resolve, reject) => {
        // 显示加载中
        uni.showLoading({
            title: '加载中',
            mask: true,
        })
        // 发起请求
        uni.request({
            ...options,
            success: (res) => {
                // 请求成功
                if (res.data.code === 200) {
                    resolve(res.data)
                } else if (res.data.code === 206) {
                    // 登录过期
                    const memberStore = useMemberStore()
                    memberStore.clearProfile()
                    reject(res)
                } else if (res.data.code === 203) {
                    // 登录超时
                    const memberStore = useMemberStore()
                    memberStore.clearProfile()
                    uni.showToast({
                        title: '登录超时，请重新登录',
                        icon: 'none',
                    })
                    reject(res)
                } else {
                    // 请求失败
                    uni.showToast({
                        title: res.data.msg,
                        icon: 'none',
                    })
                    reject(res)
                }
            },
            fail: (error) => {
                // 请求失败
                uni.showToast({
                    title: '网络错误',
                    icon: 'none',
                })
                // 隐藏加载中
                setTimeout(() => {
                    uni.hideLoading()
                }, 500)
                reject(error)
            },
        })

        setTimeout(() => {
            uni.hideLoading()
        }, 500)
    })
}
