import request from '../../../store/request'

export default {
    BrandList(){
        return request({
            url: '/brand/list',
            method: 'get'
        }) 
    },
 
    saveBrand(e){
        return request({
            url:'/brand/save',
            method:'get',
            params: {
                "from": e,
            }
        })
    },
    DelBrand(e){
        return request({
            url:'/brand/delete',
            method:'get',
            params: {
                "brand_id": e,
            }
        })
    },
    BrandInfo(e){
        return request({
            url:'/brand/edit',
            method:'get',
            params: {
                "brand_id": e,
            }
        })
    },
    updBrand(e){
        return request({
            url:'/brand/upd',
            method:'get',
            params: {
                "from": e,
            }
        })
    }


}
