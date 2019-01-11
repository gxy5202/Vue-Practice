let data = {
    list:[],
}

//注册全局组件
Vue.component("shop-list",{
    props:['shoplist'],
    template:`
        <ul>
            <li v-for="item of shoplist">
                <div class="des-left">
                    <img :src="item.img" />
                </div>
                <div class="des-right">
                    <h5>{{item.name}}</h5>
                    <div class="del-info">
                        <div>
                            <span>★{{item.score}}</span>
                            <span>销量{{item.sales}}</span>
                        </div>
                        <div>
                            <span>{{item.time}}</span>
                            <span>{{item.distance}}</span>
                        </div>
                    </div>
                </div>

            </li>
        </ul>
    `
})

//创建Vue实例
const app = new Vue({
    el:"#app",
    data:data,
    created() {
        axios.get("shop.json")
        .then((res)=>{
            this.list = res.data
            console.log(this.list)
        })
        .catch((res)=>{

        })
    },
})
