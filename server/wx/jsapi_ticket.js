var rp = require('request-promise'),
    cache = require('memory-cache'),
    config = require('../config/wechat.cfg'),
    Promise = require('promise'),
    commonAccessToken = require('./common_access_token');


module.exports = function () {
    if(cache.get('ticket')){
        var jsapi_ticket = cache.get('ticket');
        return new Promise(function(resolve, reject) {
            resolve(jsapi_ticket);
        })
    }else{
        return commonAccessToken().then(function(accessToken) {
            var ticketUri = config.ticketUrl + '?access_token=' + accessToken + '&type=jsapi';
            return rp({uri : ticketUri, json: true})
        }).then(function(ticketMap) {
            cache.put('ticket',ticketMap.ticket,config.cache_duration);  //加入缓存
            return ticketMap.ticket;
        })
    }
}