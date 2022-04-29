import Index from '../../../components/A_index.vue'
import AdminApi from '../../../api/admin/admin/admin'
import Vue from 'vue'
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
                admin_name: '',
                admin_tel: '',
                admin_email: '',
                admin_sex: '0',
                admin_head: '',
                admin_pwd: '',
                admin_pwd2: '',

            }
        }
    },
    created() {
        // this.getAdminList()

        if (this.$route.query.admin_id) {
            console.log(this.$route.query.admin_id)
            this.state = '修改'
            this.getAdminInfo(this.$route.query.admin_id);
        } else {
            this.state = '提交'
        }

    },
    methods: {
        // 获取品牌信息
        getBrandList() {
            AdminApi.BrandList(1).then((response) => {
                    // console.log(response.data.data)
                    if (response.data.code == 200) {
                        this.BrandList = response.data.data

                    } else {}
                })
                .catch((err) => {});
        },
        // 获取分类信息
        getCategoryList() {
            AdminApi.CategoryList().then((response) => {
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
        getAdminInfo(id) {
            AdminApi.AdminInfo(id).then((res) => {
                if (res.data.code == 200) {

                    this.form = res.data.data
                    this.form.admin_sex = String(res.data.data.admin_sex)


                } else {}
            })
        },
        // 提交或修改
        onSubmit() {
                console.log(this.form)
                if (this.$route.query.admin_id) {
                    AdminApi.updAdmin(this.form).then((res) => {
                        console.log(res)
                        if (res.data.code == 200) {
                            this.$router.push({
                                path: '/admin/index',
                            });
                        } else {}
                    })
                } else {
            if (this.form.admin_pwd == this.form.admin_pwd2) {

                        // 删除admin_pwd2
                Vue.delete(this.form, 'admin_pwd2'); //vue方法
                    AdminApi.saveAdmin(this.form).then((res) => {
                        console.log(res)
                        if (res.data.code == 200) {
                            this.$router.push({
                                path: '/index/index',
                            });
                        } else {}
                    })
                } else {
                    console.log('密码不一致')
                }
                }
         


        },
        //取消
        unupd() {
            this.$router.push({
                path: '/admin/index',
            });
        }
    },
}