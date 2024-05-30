const baseUrl = {
    develop: 'https://testsc.udmax.cn/stage-api/api',
    trial: 'https://testsc.udmax.cn/stage-api/api',
    release: 'https://sc.udmax.cn/prod-api/api',
};

function getEnvVersion() {
    const accountInfo = uni.getAccountInfoSync();
    return accountInfo?.miniProgram?.envVersion
};

/**
 * 获取当前运行环境和对应的url
 * @returns 返回运行环境和对应的url
 */
export const envInfo = () => {
    const env = getEnvVersion()
    const url = baseUrl[env]
    return { env, url };
};

