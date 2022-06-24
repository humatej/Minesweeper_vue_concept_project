<template>
    <div class="container d-flex flex-column justify-content-center pt-3">
        <div id="checkedCounter" class="text-light text-center mt-3">
            <h3 class="rounded ps-3 pe-3 pt-2 pb-2 mx-auto">Mines left: {{this.ginit.mines - this.allChecked}}</h3>
        </div>
        <div :style="wnddim"  id="game_window" class="container-fluid rounded shadow-lg" oncontextmenu="return false">
            <div class="row" v-for="line in sets" :key="line">
                <GameBox  @setcheck="setchecked" @loc="uncover" :atr='val' :w="w" v-for="val in line" :key="val"/>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref} from 'vue'
import GameBox from './GameBox.vue'

export default defineComponent({
    components:{
        GameBox
    },
    setup() {
        //game settings
        let minesN = 15
        let col:any[][] = []
        let row:any[] = []
        //game window
        let wind = 500
        let n = 9
        for (var i = 0; i < n; i++) {
            row = []
            for (var j = 0; j <n; j++) {
                row = [...row,{mine: false,vis: false, num: 0, x: i, y: j,checked: false}]
            }
            col[i] = [...row]
        }
        // in pixels
        let space = 5
        let rect = ((wind - (n+1)*space) / n).toString() + "px"
        let wnd = wind.toString() + "px"
        let margin = space.toString() + "px"
        let color = "#00525C"
        const w = ref({
            width: rect,
            height: rect,
            marginLeft: margin,
            marginTop: margin,
            background: color
        })
        const wnddim = ref({
            size: wind,
            width: wnd,
            height: wnd,
        })
        const ginit = ref({
            size: n,
            mines: minesN,
        })
        const sets = ref<any[][]>(col)
        const isStarted  = ref<boolean>(false)
        const checkedMines  = ref<number>(0)
        const allChecked = ref<number>(0)
        return {w,wnddim,sets,ginit,isStarted,checkedMines,allChecked}
    },
    methods: {
        newGame(val:string){
            let space = 5
            if(val == "Easy"){
                this.ginit.size = 9
                this.ginit.mines = 15
            }
            else if(val == "Medium"){
                this.ginit.size = 12
                this.ginit.mines = 25
            }
            else if(val == "Hard"){
                this.ginit.size = 15
                this.ginit.mines = 45
            }
            this.w.width = ((this.wnddim.size - (this.ginit.size+1)*space-6) / this.ginit.size).toString() + "px"
            this.w.height = this.w.width
            this.makeScreen()
        },
        setchecked(x:number,y:number){
            this.sets[x][y].checked = !this.sets[x][y].checked
            if(this.sets[x][y].checked){
                this.allChecked++
            }
            else{
                this.allChecked--
            }
            if(this.sets[x][y].mine){
                if(this.sets[x][y].checked){
                    this.checkedMines++
                }
                else{
                    this.checkedMines--
                }
            }
            if(this.checkedMines == this.ginit.mines){
                this.$emit('gameEnd',this.ginit.mines,this.ginit.mines)
            }
        },
        uncoverAllMines(){
            let count = 0
            for(let x = 0; x < this.ginit.size; x++){
                for(let y = 0; y < this.ginit.size; y++){
                    this.sets[x][y].vis = true
                }
            }
            this.$emit('gameEnd',this.ginit.mines,this.checkedMines)
            return null
        },
        uncover(x:number,y:number){
            if(!this.isStarted){
                this.isStarted = true
                this.$emit('started')
            }
            if(!this.sets[x][y].vis && !this.sets[x][y].mine && !this.sets[x][y].checked){
                this.sets[x][y].vis = true
            }
            if(this.sets[x][y].checked){
                return null
            }
            if(this.sets[x][y].mine){
                if(!this.sets[x][y].checked){
                    this.uncoverAllMines()
                }
                else{
                    return null
                }
            }
            if(this.sets[x][y].num == 0){
                if(x + 1 < this.ginit.size  && !this.sets[x+1][y].mine && !this.sets[x+1][y].vis && !this.sets[x+1][y].checked && this.sets[x+1][y].num == 0){
                    this.sets[x+1][y].vis = true
                    if(this.sets[x+1][y].num == 0){
                        this.uncover(x+1, y)
                    }
                }
                if(y + 1 < this.ginit.size && !this.sets[x][y+1].mine && !this.sets[x][y+1].vis && !this.sets[x][y+1].checked){
                    this.sets[x][y+1].vis = true
                    if(this.sets[x][y+1].num == 0){
                        this.uncover(x, y+1)
                    }
                }
                if(x - 1 >= 0 && !this.sets[x-1][y].mine && !this.sets[x-1][y].vis && !this.sets[x-1][y].checked){
                    this.sets[x-1][y].vis = true
                    if(this.sets[x-1][y].num == 0){
                        this.uncover(x-1, y)
                    }
                }
                if(y - 1 >= 0  && !this.sets[x][y-1].mine && !this.sets[x][y-1].vis && !this.sets[x][y-1].checked){
                    this.sets[x][y-1].vis = true
                    if(this.sets[x][y-1].num == 0){
                        this.uncover(x, y-1)
                    }
                }
                if((y - 1 >= 0  && x-1 >= 0) && !this.sets[x-1][y-1].mine && !this.sets[x-1][y-1].vis && !this.sets[x-1][y-1].checked){
                    this.sets[x-1][y-1].vis = true
                    if(this.sets[x-1][y-1].num == 0){
                        this.uncover(x-1, y-1)
                    }
                }
                if((y - 1 >= 0  && x + 1 < this.ginit.size) && !this.sets[x+1][y-1].mine && !this.sets[x+1][y-1].vis && !this.sets[x+1][y-1].checked){
                    this.sets[x+1][y-1].vis = true
                    if(this.sets[x+1][y-1].num == 0){
                        this.uncover(x+1, y-1)
                    }
                }
                if((y + 1 < this.ginit.size  && x + 1 < this.ginit.size) && !this.sets[x+1][y+1].mine && !this.sets[x+1][y+1].vis && !this.sets[x+1][y+1].checked){
                    this.sets[x+1][y+1].vis = true
                    if(this.sets[x+1][y+1].num == 0){
                        this.uncover(x+1, y+1)
                    }
                }
                if((y + 1 < this.ginit.size  && x - 1 >= 0 ) && !this.sets[x-1][y+1].mine && !this.sets[x-1][y+1].vis && !this.sets[x-1][y+1].checked){
                    this.sets[x-1][y+1].vis = true
                    if(this.sets[x-1][y+1].num == 0){
                        this.uncover(x-1, y+1)
                    }
                }
            }
            
            
        },
        makeScreen(){
        //game settings
        let col:any[][] = []
        let row:any[] = []
        //game window
        for (var i = 0; i < this.ginit.size; i++) {
            row = []
            for (var j = 0; j <this.ginit.size; j++) {
                row = [...row,{mine: false,vis: false, num: 0, x: i, y: j,checked: false}]
            }
            col[i] = [...row]
        }
        let x = 0
        let y = 0
        let k = 0
        while(k < this.ginit.mines) {
            //a = Math.floor(Math.random()*n)
            x = Math.floor(Math.random()*this.ginit.size)
            y = Math.floor(Math.random()*this.ginit.size)
            //console.log(temp.mine);
            if(!col[x][y].mine){
                col[x][y].mine = true
                k++
            }
        }
        
        for(let y = 0; y < this.ginit.size; y++){
            for(let x = 0; x < this.ginit.size; x++){
                if(col[x][y].mine){
                    if(y - 1 >= 0 && !col[x][y - 1].mine){
                        col[x][y - 1].num++
                    }
                    if((x + 1 < this.ginit.size && y - 1 >= 0) && !col[x+1][y-1].mine){
                            col[x+1][y-1].num++
                    }
                    if((x - 1 >= 0 && y - 1 >= 0) && !col[x-1][y-1].mine){
                        col[x-1][y-1].num++
                    }
                    if(y + 1 < this.ginit.size && !col[x][y + 1].mine){
                        col[x][y+1].num++
                    }
                    if((x + 1 < this.ginit.size && y + 1 < this.ginit.size) && !col[x+1][y+1].mine){
                        col[x+1][y+1].num++
                    }
                    if(x-1 >= 0 && !col[x-1][y].mine){
                        col[x-1][y].num++
                    }
                    if((x - 1 >= 0 && y + 1 < this.ginit.size) && !col[x-1][y+1].mine){
                        col[x-1][y+1].num++
                    }
                    if(x+1 < this.ginit.size && !col[x+1][y].mine){
                        col[x+1][y].num++
                    }
                } 
            }
        }
        
        /*let space = 5
        this.w.width = ((this.wnddim.size - (this.ginit.size+1)*space-6) / this.ginit.size).toString() + "px"
        this.w.height = this.w.width
        this.wndim.wnd = this.wnddim.size.toString() + "px"*/
        this.sets = col
    },
    setIsStarted(){
        this.isStarted = false
        this.checkedMines = 0
        this.allChecked = 0
    }
    
            
        }
    },
)

</script>

<style lang="scss" scoped>
    h3{
        background-image: linear-gradient(to right bottom, #008a85, #008585, #007f85, #007a84, #007482);
    }
    #game_window{
        background-color: #1b2a33;
        border:3px solid transparent;
    }
    #game{
        width: 100%;
        height: 100%;
    }
    #checkedCounter{
        width:100%;
    }
    #checkedCounter h3{
        width: 250px;
    }
</style>