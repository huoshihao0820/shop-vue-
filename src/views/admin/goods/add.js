import Index from '../../../components/A_index.vue'
import GoodsApi from '../../../api/admin/goods/goods'
export default {
    components: {
        Index
    },
    data() {
        return {
            fileList: [],
            BrandList: [],
            CategoryList: [],
            state: '',
            form: {
                brand_id: '',
                cate_id: '',
                goods_desc: '',
                goods_img: '',
                goods_imgs: '',
                goods_name: '',
                goods_num: '',
                goods_price: '',
                is_best: '',
                is_hot: '',
                is_new: '',
                is_up: '',
            }
        }
    },
    created() {
        // this.getGoodsList()
        this.getBrandList()
        this.getCategoryList()
        if (this.$route.query.goods_id) {
            console.log(this.$route.query.goods_id)
            this.state = '修改'
            this.getGoodsInfo(this.$route.query.goods_id);
        } else {
            this.state = '提交'
        }

    },
    methods: {
        // 获取品牌信息
        getBrandList() {
            GoodsApi.BrandList(1).then((response) => {
                    // console.log(response.data.data)
                    if (response.data.code == 200) {
                        this.BrandList = response.data.data

                    } else {}
                })
                .catch((err) => {});
        },
        // 获取分类信息
        getCategoryList() {
            GoodsApi.CategoryList().then((response) => {
                    // console.log(response.data.data)
                    if (response.data.code == 200) {
                        this.CategoryList = response.data.data
                    } else {}
                })
                .catch((err) => {});
        },
        handleImg() {

        },
        // 获取一条商品信息
        getGoodsInfo(id) {
            GoodsApi.GoodsInfo(id).then((res) => {
                if (res.data.code == 200) {

                    this.form = res.data.data
                    this.form.is_best = String(res.data.data.is_best)
                    this.form.is_hot = String(res.data.data.is_hot)
                    this.form.is_new = String(res.data.data.is_new)
                    this.form.is_up = String(res.data.data.is_up)


                } else {}
            })
        },
        // 提交或修改
        onSubmit() {
            if (this.$route.query.goods_id) {
                GoodsApi.updGoods(this.form).then((res) => {
                    console.log(res)
                    if (res.data.code == 200) {
                        this.$router.push({
                            path: '/goods/index',
                        });
                    } else {}
                })
            } else {
                GoodsApi.saveGoods(this.form).then((res) => {
                    console.log(res)
                    if (res.data.code == 200) {
                        this.$router.push({
                            path: '/goods/index',
                        });
                    } else {}
                })
            }

        },
        //取消
        unupd() {
            this.$router.push({
                path: '/goods/index',
            });
        }
    },
}