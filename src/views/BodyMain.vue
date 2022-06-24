<template>
    <div>
        <GameWindow @gameEnd="gameEnd" @started="stopWatchSet" ref="gw"/>
        <GameSettings :playerGameData="this.playerGameData" @passDif="sendDif" @gameNew="startNew" ref="gs"/>    
    </div>
</template>
<script lang="ts">
import { defineComponent, ref} from 'vue'
import GameWindow from "../components/GameWindow.vue"
import GameSettings from "../components/GameSettings.vue"

export default defineComponent({
    setup(){
        const game_new = ref<boolean>(true)
        const stop = ref<boolean>(false)
        const playerGameData = ref({
            checked_mines: 0,
            all_mines: 0,
        })
        return {game_new,stop,playerGameData}
    },
    components:{
        GameWindow,
        GameSettings
    },
    methods: {
        sendDif(dif:string){
            (this.$refs as any).gw.newGame(dif)
        },
        stopWatchSet(){
            if(this.game_new){
                this.stop = false;
                (this.$refs as any).gs.stopWatch()
            }
            this.game_new = false
        },
        startNew(){
            this.game_new = true;
            (this.$refs as any).gw.setIsStarted()
        },
        gameEnd(allMines:number,checkedMines:number){
            this.playerGameData.checked_mines= checkedMines
            this.playerGameData.all_mines = allMines;
            (this.$refs as any).gs.endGame(this.playerGameData)
        }
    },
    mounted(){
        this.sendDif("Easy")
    },
})
</script>
