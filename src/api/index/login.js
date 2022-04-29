import request from '../../store/request'

export default {

    login:function(e,v) {
        return request({
            method: 'get',
            url: '/index/login',
            // url: 'goods/index',
            params: {
                "acount": e,
                "pwd":v
            }
        })
    },
    send:function(e){
        return request({
            method: 'get',
            url: '/index/send',
            params: {
                "user_email": e,
                
            }
        })
    },
    sms:function(e){
        return request({
            method: 'get',
            url: '/index/sms',
            params: {
                "user_tel": e,
                
            }
        })
    },
    register:function(e){
        return request({
            method: 'get',
            url: '/index/register',
            params: {
                "from": e,
                
            }
        })
    },

}
