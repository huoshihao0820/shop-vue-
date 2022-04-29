import request from '../../store/request'

export default {

    login:function(e,v) {
        return request({
            method: 'get',
            url: '/admin/login',
            // url: 'goods/index',
            params: {
                "acount": e,
                "pwd":v
            }
        })
    },

}
