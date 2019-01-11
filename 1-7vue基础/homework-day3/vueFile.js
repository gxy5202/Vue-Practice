
//创建Vue实例
const app = new Vue({
    el:"#app",
    data:{
        time:""
    },
    methods: {
        stopTime(){
            app.$destroy()
        }
    },
    created() {

        //创建定时器
        let timer = setInterval(()=>{
            this.time = new Date().toLocaleString();
        },1000)
        
    },
    updated() {
        
    },
    beforeDestroy() {
        alert('即将销毁定时器')
    },
    destroyed() {
        alert('已经销毁定时器')
    },
})