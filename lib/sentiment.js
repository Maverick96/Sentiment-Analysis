const request = require('request-promise');
const appId = require('../config/config').appid;

module.exports = function get(textData, cb) {
    const url = `https://apis.paralleldots.com/v4/sentiment?text=${textData}&api_key=${appId}&lang_code=en`
    request.get(url)
        .then(data => {
            return cb(null, data)
        })
        .catch(err => {
            return cb(err, null);
        });
}