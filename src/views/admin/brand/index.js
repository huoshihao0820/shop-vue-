import Index from '../../../components/A_index.vue'
import BrandApi from '../../../api/admin/brand/brand'
export default {
    components: {
        Index
    },
    data() {
        return {
            tableData: []

        }
    },
    created() {
        this.getBrandList()
        this.$nextTick(() => {
            // console.log(this.$route.path);

        });

    },
    methods: {
        getBrandList() {
            BrandApi.BrandList().then((response) => {
                    console.log(response.data.data)
                    if (response.data.code == 200) {
                        this.tableData = response.data.data
                    } else {}
                })
                .catch((err) => {});
        },
        handleClick(e) {
            console.log(e.brand_id)
            this.$router.push({
                path: '/brand/add',
                query: {
                    brand_id: e.brand_id
                }
            });
        },
        del(e) {
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                BrandApi.DelBrand(e.brand_id).then((response) => {

                        if (response.data.code == 200) {
                            this.$message({
                                type: 'success',
                                message: '删除成功!'
                            });
                            this.getBrandList();
                        } else {

                        }
                    })
                    .catch((err) => {});

            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
        }

    },
}