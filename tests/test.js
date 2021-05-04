const env = require('../env')
const gt = require('../src/index')
const tl = new gt.gt('123')
test('.setKey', () => {
    expect(tl._APIKEY).toBe('123')
    tl.setKey(env.APIKEY)
    expect(tl._APIKEY).toBe(env._APIKEY)
})
test('.translate', () => {
    expect(
        setTimeout(() => {
            tl.translate('something', 'ja', 'en').data.translations[0].translatedText
        }, 5000)
    ).toBe('何か')
})
test('.previous', () => {
    const call = tl.translate('something', 'ja', 'en')
    expect(
        setTimeout(() => {
            tl.previous().data.translations[0].translatedText
            console.log(call)
        }, 5000)
    ).toBe('何か')
})