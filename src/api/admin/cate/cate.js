import request from '../../../store/request'

export default {

    CateList:function() {
        return request({
            url: '/category/list',
            method: 'get'
        })
    },
    BrandList(e){
        return request({
            url: '/brand/list',
            method: 'get',
            params: {
                "show": e,
            }
        }) 
    },
    CategoryList(){
        return request({
            url: '/category/list',
            method: 'get'
        }) 
    },
    saveCate(e){
        return request({
            url:'/category/save',
            method:'get',
            params: {
                "from": e,
            }
        })
    },
    DelCate(e){
        return request({
            url:'/category/delete',
            method:'get',
            params: {
                "cate_id": e,
            }
        })
    },
    CateInfo(e){
        return request({
            url:'/category/edit',
            method:'get',
            params: {
                "cate_id": e,
            }
        })
    },
    updCate(e){
        return request({
            url:'/category/upd',
            method:'get',
            params: {
                "from": e,
            }
        })
    }


}
