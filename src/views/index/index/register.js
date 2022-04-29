import Vue from 'vue';
import loginapi from '../../../api/index/login'
export default {
    data() {
        return {
            form:{
                acount:'',
                code:'',
                pwd:'',
                pwd2:'',

            },
            state:true,
            user_code:''

        }
    },
    methods: {
        getcode(e){
            if( this.form.acount&&this.form.acount.includes("@")==true){
               var count= 60
                this.timer = setInterval(() => {
                    if(count>1){
                        count-=1
                        e.target.innerHTML=count
                    }else{
                        e.target.innerHTML='获取'
                    }
                  }, 1000);
              
                loginapi.send( this.form.acount).then((res)=>{
                    this.user_code=res.user_code
                    // console.log(res)
                })
            }else{
                console.log('邮箱不合法')
          
            }
           
        },
        getcode2(e){
            console.log(this.form.acount.length)
            var count= 60
            this.timer = setInterval(() => {
                if(count>1){
                    count-=1
                    e.target.innerHTML=count
                }else{
                    e.target.innerHTML='获取'
                }
              }, 1000);
          
            loginapi.sms( this.form.acount).then((res)=>{
                this.user_code=res.user_code
            })
        },
        isemail(){
            this.state=!this.state
        },
        submit(){
            if(this.form.code==''){
                alert('验证码不对')
            
            }else{
                if(this.form.code==this.user_code){
                    if(this.form.pwd==this.form.pwd2){
                        if(this.form.acount.includes("@")==true){
                            let data={
                                user_email:this.form.acount,
                                user_code:this.form.code,
                                user_pwd:this.form.pwd,
                            }
                        Vue.delete(data, 'pwd2'); //vue方法
                        loginapi.register(data).then((res)=>{
                            this.$router.push({
                                path: "/index/login",
                              });
                        })
                        }
                      
    
                    }else{
                        alert('两次密码不对')
                    }
                }else{
                    alert('验证码不对')
                }
            }
           
        },
        gologin(){
            this.$router.push({
                path: "/index/login",
              });
        }

        
    },
}