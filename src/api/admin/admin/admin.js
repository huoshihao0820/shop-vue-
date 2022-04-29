import request from '../../../store/request'

export default {
    AdminList(){
        return request({
            url: '/admin/list',
            method: 'get'
        }) 
    },
 
    saveAdmin(e){
        return request({
            url:'/admin/save',
            method:'get',
            params: {
                "from": e,
            }
        })
    },
    DelAdmin(e){
        return request({
            url:'/admin/delete',
            method:'get',
            params: {
                "admin_id": e,
            }
        })
    },
    AdminInfo(e){
        return request({
            url:'/admin/edit',
            method:'get',
            params: {
                "admin_id": e,
            }
        })
    },
    updAdmin(e){
        return request({
            url:'/admin/upd',
            method:'get',
            params: {
                "from": e,
            }
        })
    }


}
