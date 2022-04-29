import request from '../../../store/request'

export default {

    GoodsList:function() {
        return request({
            url: '/goods/list',
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
    saveGoods(e){
        return request({
            url:'/goods/save',
            method:'get',
            params: {
                "from": e,
            }
        })
    },
    DelGoods(e){
        return request({
            url:'/goods/delete',
            method:'get',
            params: {
                "goods_id": e,
            }
        })
    },
    GoodsInfo(e){
        return request({
            url:'/goods/edit',
            method:'get',
            params: {
                "goods_id": e,
            }
        })
    },
    updGoods(e){
        return request({
            url:'/goods/upd',
            method:'get',
            params: {
                "from": e,
            }
        })
    }


}
