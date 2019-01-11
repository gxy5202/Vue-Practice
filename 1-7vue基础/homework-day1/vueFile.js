var app = new Vue({
    el:"#poem",
    data:{
        poem:[
            "夜来携手梦同游，晨起盈巾泪莫收",
            "漳浦老身三度病，咸阳宿草八回秋",
            "君埋泉下泥销骨，我寄人间雪满头",
            "阿卫韩郎相次去，夜台茫昧得知不",
        ],
        addPoem:"",   
    }
})

var app2 = new Vue({
    el:"#table",
    data:{
        title:["星宿","头衔","姓名"],
        content:[
            {
                star:"天卫星",
                honor:"双鞭",
                name:"呼延灼"
            },
            {
                star:"天英星",
                honor:"小李广",
                name:"华融"
            },
            {
                star:"天贵星",
                honor:"小旋风",
                name:"柴进"
            },
            {
                star:"天富星",
                honor:"莆田掉",
                name:"李莹"
            },
            {
                star:"天满星",
                honor:"美练功",
                name:"朱全"
            },
            {
                star:"天孤星",
                honor:"花和尚",
                name:"鲁智深"
            },
            {
                star:"天伤星",
                honor:"行者",
                name:"武松"
            },
        ]
    }
})

var app3 = new Vue({
    el:"#click_add",
    data:{
        num:0
    },
    methods:{
        add(){
            this.num++
        },
        reduce(){
            this.num--
        }
    }
})

var app4 = new Vue({
    el:".get_time",
    data:{
        time:""
    },
    methods: {
        getTime(){
            this.time = new Date().toLocaleString();
        }
    },
})
