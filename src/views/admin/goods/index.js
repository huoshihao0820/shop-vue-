import Index from '../../../components/A_index.vue'
import GoodsApi from '../../../api/admin/goods/goods'
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
        this.getGoodsList()
        this.$nextTick(() => {
            // console.log(this.$route.path);

        });

    },
    methods: {
        getGoodsList() {
            GoodsApi.GoodsList().then((response) => {
                    // console.log(response.data.data)
                    if (response.data.code == 200) {
                        this.tableData = response.data.data
                    } else {}
                })
                .catch((err) => {});
        },
        handleClick(e) {
            console.log(e.goods_id)
            this.$router.push({
                path: '/goods/add',
                query: {
                    goods_id: e.goods_id
                }
            });
        },
        del(e) {
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                GoodsApi.DelGoods(e.goods_id).then((response) => {

                        if (response.data.code == 200) {
                            this.$message({
                                type: 'success',
                                message: '删除成功!'
                            });
                            this.getGoodsList();
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