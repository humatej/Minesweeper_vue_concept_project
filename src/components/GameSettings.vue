<template>
    <div class="container d-flex justify-content-center pt-3">
        <div id="gam_set" class="d-flex justify-content-between align-center p-2">
            <div class="btn-group dropup">
                <button type="button" class="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    {{this.currentDif}}
                </button>
                <ul id="dif" class="dropdown-menu bg-dark">
                    <li class="text-center" v-for="item in dif_list" :key="item">
                        <a @click="setDif(item)" class="btn btn-dark border-bottom border-1 m-1">{{item}}</a>
                    </li>
                </ul>
            </div>
            <div class="text-light fw-bold d-flex justify-content-center align-items-center">
                {{this.time.text}}
            </div>
            <div>
                <a @click="start" class="btn btn-dark p-2">New Game</a>
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
        const dif_list = ref<string[]>([
            "Easy", "Medium", "Hard"
        ])
        const currentDif = ref<string>("Easy")
        const time = ref({
            text: "00:00:000",
            newGame: true})
        const modal = ref({
            open: false,
            text: "",
            win: false,
        })
        return {dif_list, currentDif, time, modal}
    },
    props:{
        playerGameData: Object
    },
    methods: {
        setTimeText(text:string){
            this.time.text = text
            return this.time.text
        },
        setText(){
            return this.time.text
        },
        start(){
            this.time.newGame = true
            this.$emit('passDif',this.currentDif)
            this.$emit('gameNew')
        },
        setDif(dif:string){
            this.currentDif = dif
        },
        sleep(milliseconds:number) {
            let time = new Date()
            const date = time.getTime()
            let currentDate = null;
            do {
                time = new Date()
                currentDate = time.getTime();
            } while (currentDate - date < milliseconds);
        },
        async stopWatch(){
            this.time.newGame = false
            let t = new Date()
            let t1 = t.getTime()
            let t2 = 0   
            let time = {
                min: 0,
                sec: 0,
                milis: 0 
            }
            let tempText = ""
            while(!this.time.newGame){
                await new Promise(resolve => setTimeout(resolve));
                t = new Date()
                if(t.getTime() - t1 > 0){
                    time.milis += t.getTime() - t1
                    t1 = t.getTime()
                }
                if(time.milis > 999){
                    time.milis -= 1000
                    time.sec++
                    if(time.sec > 59){
                        time.sec -= 60
                        time.min++
                    }
                }
                tempText = ""
                //set minutes format
                if(time.min < 10){
                    tempText += "0" + time.min.toString()
                }
                else{
                    tempText += time.min.toString()
                }
                tempText += ":"
                //set second format                                                                                                                                                                                                                                                  
                if(time.sec < 10){
                    tempText += "0" + time.sec.toString()
                }
                else{
                    tempText += time.sec.toString()
                }
                tempText += ":"
                //set milis format
                if(time.milis < 10){
                    tempText += "00" + time.milis.toString()
                }
                else if(time.milis < 100){
                    tempText += "0" + time.milis.toString()
                }
                else{
                    tempText += time.milis.toString()
                }

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
        }
    }
})
</script>
<style scoped lang="scss">
    $widthPx: 500px;
    $delay: .3s;
    #gam_set{
        width: $widthPx;
        height: 60px;
        box-shadow: 1px 2px 10px 1px rgb(0,0,0);
    }
    button{
        width: $widthPx / 3;
    }
    a{
        width: $widthPx / 3;
    }
    #endGame{
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
</style>