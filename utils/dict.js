/**
 * 获取字典数据
 * @param {Array} dicts - 传入字段值数组['dict','dict']
 * @returns 返回字典数据
 */
export const getDict = (dicts) => {

    const dictResult = {};

    const promises = dicts.map((dict, index) => {
        return new Promise((resolve, reject) => {
            findDict({ data: dict }).then(res => {
                if (res.data.code === 200) {
                    const dictList = res.data.data[0].sysDictData.map(item => {
                        return {
                            label: item.dictLabel,
                            value: item.dictValue
                        };
                    });
                    dictResult[dict] = {
                        dictName: res.data.data[0].dictName,
                        dictList,
                    };
                    resolve();
                } else {
                    reject(new Error('Failed to fetch dictionary data'));
                }
            }).catch(err => {
                reject(err);
            });
        });
    });

    return Promise.all(promises).then(() => {
        return dictResult;
    });
};
