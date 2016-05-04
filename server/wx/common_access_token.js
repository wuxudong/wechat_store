var rp = require('request-promise'),
    cache = require('memory-cache'),
    config = require('../config/wechat.cfg'),
    Promise = require('promise');

module.exports = function () {
    if(cache.get('common_access_token')){
        var common_access_token = cache.get('common_access_token');
        return new Promise(function(resolve, reject) {
            resolve(common_access_token);
        })
    }else{
        var tokenUri = config.accessTokenUrl + '?grant_type=' + config.grant_type + '&appid=' + config.appid + '&secret=' + config.secret;

        return rp({uri: tokenUri, json: true}).then(function(tokenMap) {
            return tokenMap.access_token;
        })
    }
}