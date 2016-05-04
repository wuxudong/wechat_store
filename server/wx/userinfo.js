var rp = require('request-promise'),
    cache = require('memory-cache'),
    config = require('../config/wechat.cfg'),
    Promise = require('promise'),
    commonAccessToken = require('./common_access_token');


module.exports = function (openId) {
    if(cache.get('userinfo_' + openId)) {
        return new Promise(function(reslove, reject) {
            cache.get('userinfo_' + openId);
        });
    } else {
        return commonAccessToken().then(function (accessToken) {
            var userinfoUri = config.userinfoUri + '?access_token=' + accessToken + '&openid=' + openId + '&lang=zh_CN';
            return rp({uri: userinfoUri, json: true});
        }).then(function(userinfo) {
            cache.put('userinfo_' + openId, userinfo, config.cache_duration);
            return userinfo;
        });
    }



}