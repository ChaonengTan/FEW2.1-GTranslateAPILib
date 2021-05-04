class gt{
    constructor(APIKEY){
        this.APIKEY = APIKEY
        this.options = {
            method: 'POST',
            url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'accept-encoding': 'application/gzip',
                'x-rapidapi-key': `${this.APIKEY}`,
                'x-rapidapi-host': 'google-translate1.p.rapidapi.com',
                useQueryString: true
            },
            form: undefined
        }
    }
    translate(q, target, source){
        this.options.form = {q: q, target: target, source: source}
        const request = require('request')
        request(this.options, function (error, response, body) {
            if (error) throw new Error(error)
            console.log(body)
        })
        return request
    }
}
module.exports = {
    gt:gt,
}
