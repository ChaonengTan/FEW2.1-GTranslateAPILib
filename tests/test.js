const env = require('../env')
const gt = require('../src/index')
const tl = new gt.gt(env.APIKEY)
test('.setKey', () => {
    expect(tl._APIKEY).toBe(env.APIKEY)
    tl.setKey('123')
    expect(tl._APIKEY).toBe('123')
})
test('.translate', async () => {
    const transCall = await tl.translate('something', 'ja', 'en')
    expect(transCall.data.translations[0].translatedText).toEqual('何か')
})
test('.previous', async () => {
    const prevCall = await tl.translate('something', 'ja', 'en')
    expect(tl.previous().data.translations[0].translatedText).toEqual('何か')
})