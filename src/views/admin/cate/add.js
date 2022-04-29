import Index from '../../../components/A_index.vue'
import CateApi from '../../../api/admin/cate/cate'
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
                cate_name: '',
                cate_nav_show: '',
                cate_show: '',
                parent_id: '',
            }
        }
    },
    created() {
        // this.getCateList()
        // this.getBrandList()
        this.getCategoryList()
        if (this.$route.query.cate_id) {
            console.log(this.$route.query.cate_id)
            this.state = '修改'
            this.getCateInfo(this.$route.query.cate_id);
        } else {
            this.state = '提交'
        }

    },
    methods: {
        // 获取品牌信息
        getBrandList() {
            CateApi.BrandList(1).then((response) => {
                    // console.log(response.data.data)
                    if (response.data.code == 200) {
                        this.BrandList = response.data.data

                    } else {}
                })
                .catch((err) => {});
        },
        // 获取分类信息
        getCategoryList() {
            CateApi.CategoryList().then((response) => {
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
        getCateInfo(id) {
            CateApi.CateInfo(id).then((res) => {
                if (res.data.code == 200) {

                    this.form = res.data.data
                    this.form.cate_show = String(res.data.data.cate_show)
                    this.form.cate_nav_show = String(res.data.data.cate_nav_show)
                } else {}
            })
        },
        // 提交或修改
        onSubmit() {
            if (this.$route.query.cate_id) {
                console.log(this.form)
                CateApi.updCate(this.form).then((res) => {
                    console.log(res)
                    if (res.data.code == 200) {
                        this.$router.push({
                            path: '/cate/index',
                        });
                    } else {}
                })
            } else {
                console.log(this.form)
                CateApi.saveCate(this.form).then((res) => {
                    console.log(res)
                    if (res.data.code == 200) {
                        this.$router.push({
                            path: '/cate/index',
                        });
                    } else {}
                })
            }

        },
        //取消
        unupd() {
            this.$router.push({
                path: '/cate/index',
            });
        }
    },
}