<template>
  <div class="index">
    <div class="content">
      <div class="top">
        后台管理系统
      </div>
      <div class="bottom">
        <div class="left">
          <div class="item" v-for="(item, index) in navList" :key="index">
            <div class="box" @click.stop="isshow"></div>

            <div class="item_top">
              <div class="title" @click.stop>{{ item.title }}信息</div>
              <div class="activeClass show" @click.stop></div>
              <div class="activeClass2" @click.stop></div>
            </div>
            <div class="item_child">
              <div class="child_con" @click="SaveGoods(item.addUrl)">
                {{ item.title }}添加
              </div>
              <div class="child_con" @click="SaveGoods(item.indexUrl)">
                {{ item.title }}列表
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="right">
        </div> -->
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.index {
  position: fixed;
  .content {
    .top {
      width: 100vw;
      height: 50px;
      background-color: #198a5f;
      line-height: 50px;
      padding-left: 100px;
      font-size: 20px;
    }

    .bottom {
      display: flex;
      .left {
        width: 200px;
        height: 100vh;
        // background: rgb(84, 92, 100);
        border: solid 1px #e6e6e6;
        .item {
          width: 100%;
          background: red;
          position: relative;

          .box {
            height: 30px;
            width: 200px;
            position: absolute;
            z-index: 1000;
          }
          .item_top {
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 30px;
            width: 200px;

            .title {
              margin-left: 10px;
            }
            .activeClass {
              width: 10px;
              height: 10px;
              border: 1px solid #fff;
              transform: rotate(45deg);
              margin-right: 10px;
              margin-bottom: 5px;
              border-width: 0px 1px 1px 0px;
            }
            .activeClass2 {
              width: 10px;
              height: 10px;
              border: 1px solid #fff;
              transform: rotate(-45deg);
              margin-right: 10px;
              margin-top: 5px;
              border-width: 1px 1px 0px 0px;
            }
          }
          .item_child {
            top: 30px;
            left: 0px;
            width: 200px;
            background: rgb(105, 100, 100);
            .child_con {
              height: 30px;
              line-height: 30px;
              padding-left: 40px;
              width: 80%;
              border-bottom: 1px solid #3e3e3e;
              // background-color: yellow;
            }
            .child_con:hover {
              color: #e6e6e6;
            }
          }
          .show {
            display: none;
          }
        }
      }
      //   .right{
      //     width: 500px;
      //     height: 500px;
      //   }
    }
  }
}
</style>
<script >
export default {
  data() {
    return {
      isActive: false,
      navList: [
        {
          title: "商品",
          addUrl: "/goods/add",
          indexUrl: "/goods/index",
        },
        {
          title: "分类",
          addUrl: "/cate/add",
          indexUrl: "/cate/index",
        },
        {
          title: "品牌",
          addUrl: "/brand/add",
          indexUrl: "/brand/index",
        },
        {
          title: "管理员",
          addUrl: "/index/add",
          indexUrl: "/index/index",
        },
      ],
    };
  },
  methods: {
    isshow(e) {
      if (e.target.getAttribute("class") === "box") {
        if (
          e.target.nextElementSibling.nextElementSibling.getAttribute(
            "class"
          ) === "item_child"
        ) {
          e.target.nextElementSibling.nextElementSibling.classList.add("show"); //隐藏

          e.target.nextElementSibling.lastElementChild.classList.add("show");

          e.target.nextElementSibling.lastElementChild.previousSibling.classList.remove(
            "show"
          );
        } else {
          e.target.nextElementSibling.nextElementSibling.classList.remove(
            "show"
          );
          e.target.nextElementSibling.lastElementChild.classList.remove("show");

          e.target.nextElementSibling.lastElementChild.previousSibling.classList.add(
            "show"
          );
        }
      }
    },
    SaveGoods(path) {
      if (this.$route.path != path) {
        this.$router.push({
          path: path,
        });
      } else {
      }
    },
  },
};
</script>