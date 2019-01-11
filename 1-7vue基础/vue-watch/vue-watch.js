//全局通用data
let data = {
    meters:"",
    km:"",
}

const app = new Vue({
    el:"#app1",
    data:{
        meters:"",
        km:"",
    },
    watch:{
        meters:function(val){
            this.meters = val;
            this.km = val*1000;
        },
        km:function(val){
            this.km = val;
            this.meters = val/1000;
        }
    }
})
//监听
app.$watch('meters',(newval,oldval)=>{
    console.log(newval);
    console.log(oldval);
})