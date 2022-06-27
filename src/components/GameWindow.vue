<template>
    <div class="container d-flex flex-column justify-content-center pt-3">
        <div id="checkedCounter" class="text-light text-center mt-3">
            <h3 class="rounded ps-3 pe-3 pt-2 pb-2 mx-auto">Mines left: {{this.gameInit.mines - this.checkedBoxes}}</h3>
        </div>
        <div :style="gridStyle"  id="game_window" class="container-fluid rounded shadow-lg" oncontextmenu="return false">
            <div class="row" v-for="line in gameGrid" :key="line">
                <GameBox  @setcheck="setchecked" @loc="uncover" :box='val' :boxStyle="boxStyle" v-for="val in line" :key="val"/>
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
        //game default settings
        const mines_counter = 15
        const window_width = 500
        const box_counter = 9
        let grid_temp:any[][] = []
        let grid_row:any[] = []

        //making plane temp game grid
        for (let i = 0; i < box_counter; i++) {
            grid_row = []
            for (var j = 0; j < box_counter; j++) {
                grid_row = [...grid_row,{ mine: false,visibility: false, 
                                            nearby_mine_counter: 0, 
                                            x: i, 
                                            y: j,
                                            checked: false}]
            }
            grid_temp[i] = [...grid_row]
        }

        //single box config//
        //********************//

        //fixed values
        const space = 5
        const space_str = space.toString() + "px"
        const color = "#00525C"

        //dynamic values (but in this case it's default for easy dificulty)
        let box_size = ((window_width - ( box_counter + 1 )*space) / box_counter).toString() + "px"
        let box_size_str = window_width.toString() + "px"

        //********************//
        const boxStyle = ref({
            width: box_size,
            height: box_size,
            marginLeft: space_str,
            marginTop: space_str,
            background: color
        })

        const gridStyle = ref({
            size: window_width,
            width: box_size_str,
            height: box_size_str,
        })

        //this is set byt game difficulty
        const gameInit = ref({
            size: box_counter,
            mines: mines_counter,
        })

        //global universal variables
        const gameGrid = ref<any[][]>(grid_temp)
        const isStarted  = ref<boolean>(false)
        const checkedMines  = ref<number>(0)
        const checkedBoxes = ref<number>(0)
        return {boxStyle ,gridStyle, gameGrid,
                gameInit, isStarted, checkedMines,
                checkedBoxes}
    },
    methods: {
        newGame(val:string){
            let space = 5

            if(val == "Easy"){
                this.gameInit.size = 9
                this.gameInit.mines = 15
            }
            else if(val == "Medium"){
                this.gameInit.size = 12
                this.gameInit.mines = 25
            }
            else if(val == "Hard"){
                this.gameInit.size = 15
                this.gameInit.mines = 45
            }

            //set box style by game difficulty
            this.boxStyle.width = ((this.gridStyle.size - (this.gameInit.size+1)*space-6) / this.gameInit.size).toString() + "px"
            this.boxStyle.height = this.boxStyle.width

            this.makeScreen()
        },
        setchecked(x:number,y:number){
            this.gameGrid [x][y].checked = !this.gameGrid [x][y].checked
            
            if(this.gameGrid [x][y].checked){
                this.checkedBoxes++
            }
            else{
                this.checkedBoxes--
            }

            if(this.gameGrid [x][y].mine){
                if(this.gameGrid [x][y].checked){
                    this.checkedMines++
                }
                else{
                    this.checkedMines--
                }
            }

            if(this.checkedMines == this.gameInit.mines){
                this.$emit('gameEnd',this.gameInit.mines,this.gameInit.mines)
            }
        },
        uncoverAllMines(){
            for(let x = 0; x < this.gameInit.size; x++){
                for(let y = 0; y < this.gameInit.size; y++){
                    this.gameGrid [x][y].visibility = true
                }
            }

            this.$emit('gameEnd',this.gameInit.mines,this.checkedMines)
            return null
        },
        uncover(x:number,y:number){
            //start stopwatch
            if(!this.isStarted){
                this.isStarted = true
                this.$emit('started')
            }

            //checking for mines, flag and already uncovered box locally
            if(!this.gameGrid [x][y].visibility && !this.gameGrid [x][y].mine && !this.gameGrid [x][y].checked){
                this.gameGrid [x][y].visibility = true
            }
            if(this.gameGrid [x][y].checked){
                return null
            }
            if(this.gameGrid [x][y].mine){
                if(!this.gameGrid [x][y].checked){
                    this.uncoverAllMines()
                }
            }

            //checking for mines, flag and already uncovered box nearby and recursivly call again this function
            //*****************************************************************
            if(this.gameGrid [x][y].nearby_mine_counter > 0){ return null}

            //up, down, left and right
            if(x + 1 < this.gameInit.size  && !this.gameGrid [x + 1][y].mine && !this.gameGrid [x + 1][y].visibility && !this.gameGrid[x + 1][y].checked){
                this.gameGrid [x + 1][y].visibility = true
                if(this.gameGrid [x + 1][y].nearby_mine_counter == 0){
                    this.uncover(x + 1, y)
                }
            }
            if(y + 1 < this.gameInit.size && !this.gameGrid[x][y + 1].mine && !this.gameGrid[x][y + 1].visibility && !this.gameGrid[x][y + 1].checked){
                this.gameGrid[x][y + 1].visibility = true
                if(this.gameGrid[x][y + 1].nearby_mine_counter == 0){
                    this.uncover(x, y + 1)
                }
            }
            if(x - 1 >= 0 && !this.gameGrid[x - 1][y].mine && !this.gameGrid[x - 1][y].visibility && !this.gameGrid[x - 1][y].checked){
                this.gameGrid[x - 1][y].visibility = true
                if(this.gameGrid[x - 1][y].nearby_mine_counter == 0){
                    this.uncover(x - 1, y)
                }
            }
            if(y - 1 >= 0  && !this.gameGrid[x][y - 1].mine && !this.gameGrid[x][y - 1].visibility && !this.gameGrid[x][y - 1].checked){
                this.gameGrid[x][y - 1].visibility = true
                if(this.gameGrid[x][y - 1].nearby_mine_counter == 0){
                    this.uncover(x, y - 1)
                }
            }
            
            //up, down, left and right corner
            if((y - 1 >= 0  && x - 1 >= 0) && !this.gameGrid[x - 1][y - 1].mine && !this.gameGrid[x - 1][y - 1].visibility && !this.gameGrid[x - 1][y - 1].checked){
                this.gameGrid[x - 1][y - 1].visibility = true
                if(this.gameGrid[x - 1][y - 1].nearby_mine_counter == 0){
                    this.uncover(x - 1, y - 1)
                }
            }
            if((y - 1 >= 0  && x + 1 < this.gameInit.size) && !this.gameGrid[x + 1][y - 1].mine && !this.gameGrid[x + 1][y - 1].visibility && !this.gameGrid[x + 1][y - 1].checked){
                this.gameGrid[x + 1][y - 1].visibility = true
                if(this.gameGrid[x + 1][y - 1].nearby_mine_counter == 0){
                    this.uncover(x + 1, y - 1)
                }
            }
            if((y + 1 < this.gameInit.size  && x + 1 < this.gameInit.size) && !this.gameGrid[x + 1][y + 1].mine && !this.gameGrid[x + 1][y + 1].visibility && !this.gameGrid[x + 1][y + 1].checked){
                this.gameGrid[x + 1][y + 1].visibility = true
                if(this.gameGrid[x + 1][y + 1].nearby_mine_counter == 0){
                    this.uncover(x + 1, y + 1)
                }
            }
            if((y + 1 < this.gameInit.size  && x - 1 >= 0 ) && !this.gameGrid[x - 1][y + 1].mine && !this.gameGrid[x - 1][y + 1].visibility && !this.gameGrid[x - 1][y + 1].checked){
                this.gameGrid[x - 1][y + 1].visibility = true
                if(this.gameGrid[x - 1][y + 1].nearby_mine_counter == 0){
                    this.uncover(x - 1, y + 1)
                }
            }
            //*****************************************************************
            
            
        },
        makeScreen(){
        //game settings
        let grid_temp:any[][] = []
        let grid_row:any[] = []

        //clear temp grid
        for (var i = 0; i < this.gameInit.size; i++) {
            grid_row = []
            for (var j = 0; j <this.gameInit.size; j++) {
                grid_row = [...grid_row,{ mine: false,
                                         visibility: false, 
                                         nearby_mine_counter: 0, 
                                         x: i, 
                                         y: j,
                                         checked: false}]
            }
            grid_temp[i] = [...grid_row]
        }

        //temp values
        let x = 0
        let y = 0
        let minesCounter = 0

        //adding mines on grid at random
        while(minesCounter < this.gameInit.mines) {
            
            //select random location for mine
            x = Math.floor( Math.random() * this.gameInit.size )
            y = Math.floor( Math.random() * this.gameInit.size )
            
            //if is position already selected cycle start over while number of mines is same like difficulty number of mines
            if(!grid_temp[x][y].mine){
                grid_temp[x][y].mine = true
                minesCounter++
            }
        }
        
        //adding count of near by mines
        for(let y = 0; y < this.gameInit.size; y++){
            for(let x = 0; x < this.gameInit.size; x++){
                if(grid_temp[x][y].mine){
                        //up, down, left and right
                        if(y - 1 >= 0 && !grid_temp[x][y - 1].mine){
                            grid_temp[x][y - 1].nearby_mine_counter++
                        }
                        if((x + 1 < this.gameInit.size && y - 1 >= 0) && !grid_temp[x + 1][y - 1].mine){
                                grid_temp[x + 1][y - 1].nearby_mine_counter++
                        }
                        if((x - 1 >= 0 && y - 1 >= 0) && !grid_temp[x - 1][y - 1].mine){
                            grid_temp[x - 1][y - 1].nearby_mine_counter++
                        }
                        if(y + 1 < this.gameInit.size && !grid_temp[x][y + 1].mine){
                            grid_temp[x][y + 1].nearby_mine_counter++
                        }

                        //up, down, left and right corner
                        if((x + 1 < this.gameInit.size && y + 1 < this.gameInit.size) && !grid_temp[x + 1][y + 1].mine){
                            grid_temp[x + 1][y + 1].nearby_mine_counter++
                        }
                        if(x - 1 >= 0 && !grid_temp[x - 1][y].mine){
                            grid_temp[x - 1][y].nearby_mine_counter++
                        }
                        if((x - 1 >= 0 && y + 1 < this.gameInit.size) && !grid_temp[x - 1][y + 1].mine){
                            grid_temp[x - 1][y + 1].nearby_mine_counter++
                        }
                        if(x + 1 < this.gameInit.size && !grid_temp[x + 1][y].mine){
                            grid_temp[x + 1][y].nearby_mine_counter++
                        }
                    } 
                }
            }
            //update real game grid by temp grid
            this.gameGrid = grid_temp
        },

        setIsStarted(){
            this.isStarted = false
            this.checkedMines = 0
            this.checkedBoxes = 0
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