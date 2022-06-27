<template>
    <div class="container d-flex justify-content-center pt-3">
        <div id="gameSettings" class="rounded shadow-lg d-flex justify-content-between align-center p-2">
            <div class="btn-group dropup">
                <button type="button" class="btn shadow-lg darker-green text-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    {{this.currentDif}}
                </button>
                <ul id="difficultyNav" class="dropdown-menu">
                    <li class="text-center" v-for="item in difficulties" :key="item">
                        <a @click="setDif(item)" class="text-light btn border-bottom border-1 m-1">{{item}}</a>
                    </li>
                </ul>
            </div>
            <div class="text-light fw-bold d-flex justify-content-center align-items-center">
                {{this.time.text}}
            </div>
            <div>
                <a @click="start" id="startBtn" class="darker-green btn p-2 text-light shadow-lg">New Game</a>
            </div>
        </div>
        <div v-show="modal.open" id="endGame" class="bg-success text-light" :class="this.modal.win ? 'bg-success':'bg-danger'">
            <div class="text-center">
                <h1 class="mx-auto border-bottom border-white pb-2">{{modal.text}}</h1>
            </div>
            <a @click="this.modal.open = false" id="closeBtn" class="btn text-light d-flex align-items-center justify-content-center">X</a>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref} from 'vue'

export default defineComponent({
    setup(){
        const difficulties = ref<string[]>([
            "Easy", "Medium", "Hard"
        ])

        //easy by default
        const currentDif = ref<string>("Easy")

        const time = ref({
            text: "00:00:000",
            newGame: true})
            
        const modal = ref({
            open: false,
            text: "",
            win: false,
        })
        return {difficulties, currentDif, time, modal}
    },
    props:{
        playerGameData: Object
    },
    methods: {
        setTimeText(text:string){
            this.time.text = text
            return this.time.text
        },
        start(){
            this.time.newGame = true
            this.$emit('passDif',this.currentDif)
            this.$emit('gameNew')
        },
        setDif(difficultyNav:string){
            this.currentDif = difficultyNav
        },
        async stopWatch(){
            this.time.newGame = false
            let t = new Date()
            let tempTime = t.getTime()
            let time = {
                min: 0,
                sec: 0,
                milis: 0 
            }
            let tempText = ""
            //update time text every 10 milliseconds and make it stop when game is over
            while(!this.time.newGame){
                await new Promise(resolve => setTimeout(resolve));
                t = new Date()
                if(t.getTime() - tempTime > 0){
                    time.milis += t.getTime() - tempTime
                    tempTime = t.getTime()
                }
                if(time.milis > 999){
                    time.milis = 0
                    time.sec++
                    if(time.sec > 59){
                        time.sec = 0
                        time.min++
                    }
                }
                tempText = ""

                //set minutes format
                if(time.min < 10){
                    tempText += "0"
                }
                tempText += time.min.toString() + ":"

                //set second format                                                                                                                                                                                                                                      
                if(time.sec < 10){
                    tempText += "0"
                }
                tempText += time.sec.toString() + ":"

                //set milis format
                if(time.milis < 10){
                    tempText += "00"
                }
                else if(time.milis < 100){
                    tempText += "0"
                }
                tempText += time.milis.toString()

                //update time text
                this.time.text = tempText
            }
        },
        endGame(playerData:any){
            this.modal.open = true
            this.time.newGame = true

            if(playerData?.checked_mines != playerData?.all_mines){
                this.modal.text = "YOU LOSE"
                this.modal.win = false
            }
            else{
                this.modal.text = "YOU WIN"
                this.modal.win = true
            }
        },

    }
})
</script>
<style scoped lang="scss">
    $widthPx: 500px;
    $delay: .15s;
    .darker-green{
        transition: $delay;
        position: relative;
        z-index: 1;
        background-image: linear-gradient(to right bottom, #006d52, #00654c, #005c45, #00543f, #004c39);
    }
    .darker-green::before{
        background-image: linear-gradient(to right bottom, #004c39, #004534, #003f2f, #00382a, #003225);
        position: absolute;
        content: "";
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        transition: $delay;
        z-index: -1;
        opacity: 0;
    }
    .darker-green:hover::before{
        opacity: 1;
    }
    #gameSettings{
        width: $widthPx;
        height: 60px;
        background-image: linear-gradient(to right bottom, #03b365, #00b068, #00ad6b, #00aa6e, #00a770);

    }
    button{
        width: $widthPx / 3;
    }
    a{
        width: $widthPx / 3;
    }
    #endGame{
        z-index: 2;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width:300px;
        height:200px;
        border-radius: 10px;
        opacity: 0.85;
        transition:$delay;
    }
    #endGame:hover{
        opacity: 0.95;
        transition:$delay;
    }
    #endGame h1{
        padding-top:25%;
        width: 70%
    }
    #closeBtn{
        position: fixed;
        width: 10% !important;
        top:0%;
        left:90%;
        font-weight: 500;
    }
    #difficultyNav{
        background-image: linear-gradient(to right bottom, #006d52, #00654c, #005c45, #00543f, #004c39);
    }
    #difficultyNav li a:hover{
         background-image: linear-gradient(to right bottom, #004c39, #004534, #003f2f, #00382a, #003225);
    }
</style>