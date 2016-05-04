module.exports = {
    grant_type:'client_credential',
    appid:'wx2f6b9a151cd3da2c',
    secret:'5a752354bca737cc319128dd1190b6a7',
    accessTokenUrl:'https://api.weixin.qq.com/cgi-bin/token',
    ticketUrl:'https://api.weixin.qq.com/cgi-bin/ticket/getticket',
    cache_duration:1000*60*10,
    redirectUri:'http://127.0.0.1/wx/authorization/callback',
    userinfoUri:'https://api.weixin.qq.com/cgi-bin/user/info'

}
