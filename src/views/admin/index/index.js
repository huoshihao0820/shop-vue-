import Index from '../../../components/A_index.vue'
import AdminApi from '../../../api/admin/admin/admin'
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
        this.getAdminList()
        this.$nextTick(() => {
            // console.log(this.$route.path);

        });

    },
    methods: {
        getAdminList() {
            AdminApi.AdminList().then((response) => {
                    // console.log(response.data.data)
                    if (response.data.code == 200) {
                        this.tableData = response.data.data
                    } else {}
                })
                .catch((err) => {});
        },
        handleClick(e) {
            console.log(e.admin_id)
            this.$router.push({
                path: '/index/add',
                query: {
                    admin_id: e.admin_id
                }
            });
        },
        del(e) {
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                AdminApi.DelAdmin(e.admin_id).then((response) => {

                        if (response.data.code == 200) {
                            this.$message({
                                type: 'success',
                                message: '删除成功!'
                            });
                            this.getAdminList();
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