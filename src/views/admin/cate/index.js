import Index from '../../../components/A_index.vue'
import CateApi from '../../../api/admin/cate/cate'
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
        this.getCateList()
        this.$nextTick(() => {
            // console.log(this.$route.path);

        });

    },
    methods: {
        getCateList() {
            CateApi.CateList().then((response) => {
                console.log(response.data.data)
                    if (response.data.code == 200) {
                        this.tableData = response.data.data
                    } else {}
                })
                .catch((err) => {});
        },
        handleClick(e) {
            console.log(e.cate_id)
            this.$router.push({
                path: '/cate/add',
                query: {
                    cate_id: e.cate_id
                }
            });
        },
        del(e) {
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                CateApi.DelCate(e.cate_id).then((response) => {

                        if (response.data.code == 200) {
                            this.$message({
                                type: 'success',
                                message: '删除成功!'
                            });
                            this.getCateList();
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