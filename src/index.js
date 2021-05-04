class gt{
    constructor(APIKEY){
        this._APIKEY = APIKEY
        this.options = {
            method: 'POST',
            url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'accept-encoding': 'application/gzip',
                'x-rapidapi-key': `${this._APIKEY}`,
                'x-rapidapi-host': 'google-translate1.p.rapidapi.com',
                useQueryString: true
            },
            form: undefined
        }
    }
    translate(query, target = 'en', source = null){
        this.options.form = {q: query, target: target, source: source}
        const request = require('request-promise-native')
        return request(this.options)
            .then(res => JSON.parse(res))
            .then(res => {
                console.log(res.data.translations[0].translatedText)
                this.prevCall = res
                return(res)
            })
            .catch(err => {
                throw new Error(err)
            })
    }
    previous(){ if(this.prevCall) return this.prevCall }
    setKey(APIKEY){
        this.options.headers['x-rapidapi-key'] = APIKEY
    }
}
module.exports = {
    gt:gt,
}
