/**
 * Created by xudong on 5/4/16.
 */

var express = require('express');
var crypto = require('crypto');
var config = require('../config/wechat.cfg');
var rp = require('request-promise');
var router = express.Router();

router.get('/authorization', function (req, res, next) {
    var silent = req.query.silent;

    var scope = 'snsapi_userinfo';
    if(silent) {
        scope = 'snsapi_base';
    }

    var uri = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" +
        config.appid + "&redirect_uri=" + encodeURIComponent(config.redirectUri) +
        "&response_type=code&scope=" + scope + "&state=STATE#wechat_redirect"
    res.redirect(uri);

});

router.get('/authorization/callback', function (req, res, next) {
    var code = req.query.code;
    var state = req.query.state;

    // TODO: check state

    if(code) {
        var uri = "https://api.weixin.qq.com/sns/oauth2/access_token?appid=" +
            config.appid + "&secret=" + config.secret + "&code=" + code + "&grant_type=authorization_code"
        rp({uri: uri, json:true}).then(function(data) {
            console.log(data);
            var accessToken = data.access_token;
            var refreshToken = data.refresh_token;
            var openId = data.openid;

            // TODO: save accessToken, refreshToken, openId

            req.session.openid = openId;
            res.redirect('/index');
        })
    } else {
        res.redirect('/index');
    }
});


module.exports = router;