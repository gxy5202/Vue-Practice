//注册全局组件

//全局公用数据
let data = {
    data_list:[],
    title_list:['序列','角色名','系列','擅长','操作'],
    series_list:['雷','木','水','火','土','光','暗'],
    skill_list:['攻击','防御','智力','体质','敏捷'],
    add_char:{
        id:"",
        name:"",
        series:"",
        skill:""
    },
    show:true,
    showAnti:false
}

//表单组件
Vue.component('form-list',{
    props:['series','skill','value'],
    template:`
        <form role="form">
            <div class="form-group">
                <label for="name">序号</label>
                <input v-model="add_char.id" type="text" class="form-control" id="name" placeholder="请输入序号">
            </div>
            <div class="form-group">
                <label for="name">角色名</label>
                <input v-model="add_char.name" type="text" class="form-control" id="name" placeholder="请输入名称">
            </div>
            <div class="form-group">
                <label for="name">系列</label>
                <select class="form-control" v-model="add_char.series" >
                    <option v-for="item of series">{{item}}</option>
                </select>
            </div>
            <div class="form-group">
                <label for="name">擅长</label>
                <select class="form-control" v-model="add_char.skill" >
                    <option v-for="item of skill">{{item}}</option>
                </select>
            </div>
            <button @click="add" type="button" class="btn btn-success" v-show="show">创建角色</button>
            <button @click="current_change" type="button" class="btn btn-success" v-show="showAnti">确认修改</button>
        </form>

    `,
    data(){
        return data
    },
    methods:{
        add(){
            this.data_list.push(this.add_char);
            this.add_char = {
                id:"",
                name:"",
                series:"",
                skill:""
            }
        },
        current_change(){
            this.data_list.map((value,index,arr)=>{
                if(this.add_char.id == value.id){
                    console.log(value)
                    arr.splice(index,1,this.add_char)
                }
            })
            this.show = true;
            this.showAnti = false;
            this.add_char = {
                id:"",
                name:"",
                series:"",
                skill:""
            }
        }
    }
})

//表格组件
Vue.component('table-list',{
    props:['data','title'],
    template:`
        <table class="table table-hover">
            <thead>
                <tr>
                    <th v-for="item of title">{{item}}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) of data" :key="item.id">
                    <td>{{item.id}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.series}}</td>
                    <td>{{item.skill}}</td>
                    <td>
                        <button @click="change(item)"  type="button" class="btn btn-warning btn-xs">修改</button>
                        <button @click="del(index)" type="button" class="btn btn-danger btn-xs">删除</button>
                    </td>
                </tr>
            </tbody>
            <button @click="asc"  type="button" class="btn btn-success btn-xs">升序</button>
            <button @click="desc" type="button" class="btn btn-success btn-xs">降序</button>
        </table>
        
    `,
    data(){
        return data
    },
    methods:{
        change(item){
            this.show = false;
            this.showAnti = true;
            this.add_char = {
                id:item.id,
                name:item.name,
                series:item.series,
                skill:item.skill
            }
        },
        del(index){
            this.data_list.splice(index,1)
        },
        asc(){
            this.data_list.sort((a,b)=>{
                return b.id.slice(2) - a.id.slice(2)
            })
        },
        desc(){
            this.data_list.sort((a,b)=>{
                return a.id.slice(2) - b.id.slice(2)
            })
        }
    }
})
//创建vue实例
const app = new Vue({
    el:'#app',
    data:data,
    methods: {
        
        
    },
    created() {
        axios.get('data.json')
        .then((res)=>{
            this.data_list = res.data
            console.log(this.data_list)
        })
        .catch((res)=>{

        })
    },
})