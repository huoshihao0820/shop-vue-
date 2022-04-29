import Head from '../components/Head.vue'
import Bottom from '../components/Bottom.vue'
import Search from '../components/Search.vue'
import Menu from '../components/Menu.vue'
import Brand from '../components/Brand.vue'
import Nav from '../components/Nav.vue'
export default {
  
  components:{
      Head,
      Bottom,
      Search,
      Menu,
      Brand,
      Nav
  },
  computed: {
    // 一个计算属性的 getter
    newMoney: function () {
      // `this` 指向 vm 实例
      return this.money * 0.995
    }
  },
  data(){
    return{
      bannerList:[
        {
          img:require('../assets/images/ban1.jpg')
        },
        {
          img:require('../assets/images/ban1.jpg')

        },
        {
          img:require('../assets/images/ban1.jpg')

        },
        {
          img:require('../assets/images/ban1.jpg')

        },
        
      ],
      money:10,
      UserInfo:''
    }
  },
  created() {
  
 

  },
}