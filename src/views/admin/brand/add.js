import Index from '../../../components/A_index.vue'
import BrandApi from '../../../api/admin/brand/brand'
export default {
    components: {
        Index
    },
    data() {
        return {
            fileList: [],
            BrandList: [],
            state: '',
            form: {
                brand_name:'',
                brand_url:'',
                brand_logo:'',
                brand_show:'',
            }
        }
    },
    created() {
        // this.getBrandList()
        // this.getBrandList()
        if (this.$route.query.brand_id) {
            console.log(this.$route.query.brand_id)
            this.state = '修改'
            this.getBrandInfo(this.$route.query.brand_id);
        } else {
            this.state = '提交'
        }

    },
    methods: {
        handleImg() {

        },
        // 获取一条商品信息
        getBrandInfo(id) {
            BrandApi.BrandInfo(id).then((res) => {
                if (res.data.code == 200) {

                    this.form = res.data.data
                    this.form.brand_show = String(res.data.data.brand_show)
                


                } else {}
            })
        },
        // 提交或修改
        onSubmit() {
            if (this.$route.query.brand_id) {
                BrandApi.updBrand(this.form).then((res) => {
                    console.log(res)
                    if (res.data.code == 200) {
                        this.$router.push({
                            path: '/brand/index',
                        });
                    } else {}
                })
            } else {
                BrandApi.saveBrand(this.form).then((res) => {
                    console.log(res)
                    if (res.data.code == 200) {
                        this.$router.push({
                            path: '/brand/index',
                        });
                    } else {}
                })
            }

        },
        //取消
        unupd() {
            this.$router.push({
                path: '/brand/index',
            });
        }
    },
}