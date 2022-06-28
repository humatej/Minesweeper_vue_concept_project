(function(){"use strict";var e={139:function(e,t,i){var n=i(963),s=i(252);function a(e,t,i,n,a,r){const o=(0,s.up)("HeaderMain"),c=(0,s.up)("router-view"),l=(0,s.up)("FooterMain");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s.Wm)(o),(0,s.Wm)(c),(0,s.Wm)(l)])}const r={id:"main_nav",class:"bg-dark navbar navbar-expand-sm navbar-light shadow-lg"},o={class:"container-fluid"},c={class:"collapse d-flex justify-content-center navbar-collapse text-center",id:"navbarID"},l={id:"navbar",class:"d-flex justify-content-center"};function d(e,t,i,n,a,d){const h=(0,s.up)("HeaderLink");return(0,s.wg)(),(0,s.iD)("nav",r,[(0,s._)("div",o,[(0,s._)("div",c,[(0,s._)("div",l,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.links,(e=>((0,s.wg)(),(0,s.j4)(h,{key:e,link:e},null,8,["link"])))),128))])])])])}var h=i(262),m=i(577);function u(e,t,i,n,a,r){const o=(0,s.up)("router-link");return(0,s.wg)(),(0,s.j4)(o,{to:e.link.route,class:"nav-link text-light p-3","aria-current":"page"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,m.zw)(e.link.link),1)])),_:1},8,["to"])}var g=(0,s.aZ)({props:{link:Object}}),f=i(744);const p=(0,f.Z)(g,[["render",u]]);var b=p,w=(0,s.aZ)({setup(){const e=(0,h.iH)([{link:"Home",route:"/"},{link:"About",route:"/about"}]);return{links:e}},components:{HeaderLink:b}});const x=(0,f.Z)(w,[["render",d],["__scopeId","data-v-194746ce"]]);var v=x;const k=e=>((0,s.dD)("data-v-182b95a8"),e=e(),(0,s.Cn)(),e),y={id:"footer",class:"navbar navbar-expand-sm navbar-dark"},_=k((()=>(0,s._)("div",{class:"container-fluid d-flex flex-column justify-content-center text-light"},[(0,s._)("p",{class:"p-1"},[(0,s.Uk)("This page was created by "),(0,s._)("a",{href:"https://github.com/humatej",target:"_blank"},"Matej Hušla")]),(0,s._)("p",{class:"p-1"},"© 2022")],-1))),G=[_];function I(e,t,i,n,a,r){return(0,s.wg)(),(0,s.iD)("nav",y,G)}var D=(0,s.aZ)({});const S=(0,f.Z)(D,[["render",I],["__scopeId","data-v-182b95a8"]]);var j=S,z=(0,s.aZ)({components:{HeaderMain:v,FooterMain:j}});const H=(0,f.Z)(z,[["render",a]]);var M=H,O=i(119),Z=i.p+"img/rsz_husla.3108ecc5.jpg";const C=e=>((0,s.dD)("data-v-917acc4e"),e=e(),(0,s.Cn)(),e),T={id:"about",class:"rounded mt-5 text-light mx-auto shadow-lg"},B=C((()=>(0,s._)("h1",{class:"p-2 text-center"},"About",-1))),E=C((()=>(0,s._)("img",{class:"rounded shadow-lg",src:Z,width:"200",alt:"image of autor"},null,-1))),W=C((()=>(0,s._)("p",{class:"p-4"},'I am math, sience and tech enthusiast. This game was created as learning project in Vue js, with help of Typescript, Sass and Bootstrap 5. In this project I learnt some stuff and it\'s my first "bigger" project ',-1))),$=[B,E,W];function N(e,t,i,n,a,r){return(0,s.wg)(),(0,s.iD)("div",T,$)}var F=(0,s.aZ)({});const L=(0,f.Z)(F,[["render",N],["__scopeId","data-v-917acc4e"]]);var P=L;function Y(e,t,i,n,a,r){const o=(0,s.up)("GameWindow"),c=(0,s.up)("GameSettings");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s.Wm)(o,{onGameEnd:e.gameEnd,onStarted:e.stopWatchSet,ref:"gw"},null,8,["onGameEnd","onStarted"]),(0,s.Wm)(c,{playerGameData:this.playerGameData,onPassDif:e.sendDif,onGameNew:e.startNew,ref:"gs"},null,8,["playerGameData","onPassDif","onGameNew"])])}const A={class:"container d-flex flex-column justify-content-center pt-3"},K={id:"checkedCounter",class:"text-light text-center mt-3"},U={class:"rounded ps-3 pe-3 pt-2 pb-2 mx-auto"};function V(e,t,i,n,a,r){const o=(0,s.up)("GameBox");return(0,s.wg)(),(0,s.iD)("div",A,[(0,s._)("div",K,[(0,s._)("h3",U,"Mines left: "+(0,m.zw)(this.gameInit.mines-this.checkedBoxes),1)]),(0,s._)("div",{style:(0,m.j5)(e.gridStyle),id:"game_window",class:"container-fluid rounded shadow-lg",oncontextmenu:"return false"},[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.gameGrid,(t=>((0,s.wg)(),(0,s.iD)("div",{class:"row",key:t},[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t,(t=>((0,s.wg)(),(0,s.j4)(o,{onSetcheck:e.setchecked,onLoc:e.uncover,box:t,boxStyle:e.boxStyle,key:t},null,8,["onSetcheck","onLoc","box","boxStyle"])))),128))])))),128))],4)])}const X={class:"bi bi-flag-fill"},q={class:"bi bi-patch-exclamation-fill"};function J(e,t,i,a,r,o){const c=(0,s.up)("v-rect");return(0,s.wg)(),(0,s.j4)(c,{class:(0,m.C_)(["user-select-none d-flex justify-content-center align-items-center text-light",e.setBackground]),onContextmenu:(0,n.iM)(e.check,["right"]),onClick:e.send,style:(0,m.j5)(e.boxStyle)},{default:(0,s.w5)((()=>[(0,s.wy)((0,s._)("span",null,(0,m.zw)(e.box.nearby_mine_counter),513),[[n.F8,e.box.nearby_mine_counter>0&&e.box.visibility&&!e.box.checked]]),(0,s.wy)((0,s._)("i",X,null,512),[[n.F8,e.box.checked]]),(0,s.wy)((0,s._)("i",q,null,512),[[n.F8,e.box.visibility&&e.box.mine&&!e.box.checked]])])),_:1},8,["onContextmenu","onClick","style","class"])}var Q=(0,s.aZ)({setup(){const e=(0,h.iH)(!1);return{checked:e}},props:{boxStyle:Object,box:Object},methods:{send(){this.$emit("loc",this.box?.x,this.box?.y)},check(){return this.box?.visibility||(this.checked=!this.checked,this.$emit("setcheck",this.box?.x,this.box?.y)),this.checked}},computed:{setBackground(){return!this.box?.mine&&this.box?.visibility&&this.box?.checked?"bg-danger":this.box?.mine&&this.box?.visibility&&this.box?.checked?"bg-success":!this.box?.visibility||this.box?.mine?"unchecked":""}}});const R=(0,f.Z)(Q,[["render",J]]);var ee=R,te=(0,s.aZ)({components:{GameBox:ee},setup(){const e=15,t=500,i=9;let n=[],s=[];for(let h=0;h<i;h++){s=[];for(var a=0;a<i;a++)s=[...s,{mine:!1,visibility:!1,nearby_mine_counter:0,x:h,y:a,checked:!1}];n[h]=[...s]}const r=5,o=r.toString()+"px",c="#00525C";let l=((t-(i+1)*r)/i).toString()+"px",d=t.toString()+"px";const m=(0,h.iH)({width:l,height:l,marginLeft:o,marginTop:o,background:c}),u=(0,h.iH)({size:t,width:d,height:d}),g=(0,h.iH)({size:i,mines:e}),f=(0,h.iH)(n),p=(0,h.iH)(!1),b=(0,h.iH)(0),w=(0,h.iH)(0);return{boxStyle:m,gridStyle:u,gameGrid:f,gameInit:g,isStarted:p,checkedMines:b,checkedBoxes:w}},methods:{newGame(e){let t=5;"Easy"==e?(this.gameInit.size=9,this.gameInit.mines=15):"Medium"==e?(this.gameInit.size=12,this.gameInit.mines=25):"Hard"==e&&(this.gameInit.size=15,this.gameInit.mines=45),this.boxStyle.width=((this.gridStyle.size-(this.gameInit.size+1)*t-6)/this.gameInit.size).toString()+"px",this.boxStyle.height=this.boxStyle.width,this.makeScreen()},setchecked(e,t){this.gameGrid[e][t].checked=!this.gameGrid[e][t].checked,this.gameGrid[e][t].checked?this.checkedBoxes++:this.checkedBoxes--,this.gameGrid[e][t].mine&&(this.gameGrid[e][t].checked?this.checkedMines++:this.checkedMines--),this.checkedMines==this.gameInit.mines&&this.$emit("gameEnd",this.gameInit.mines,this.gameInit.mines)},uncoverAllMines(){for(let e=0;e<this.gameInit.size;e++)for(let t=0;t<this.gameInit.size;t++)this.gameGrid[e][t].visibility=!0;return this.$emit("gameEnd",this.gameInit.mines,this.checkedMines),null},uncover(e,t){if(this.isStarted||(this.isStarted=!0,this.$emit("started")),this.gameGrid[e][t].visibility||this.gameGrid[e][t].mine||this.gameGrid[e][t].checked||(this.gameGrid[e][t].visibility=!0),this.gameGrid[e][t].checked)return null;if(this.gameGrid[e][t].mine&&(this.gameGrid[e][t].checked||this.uncoverAllMines()),0==this.gameGrid[e][t].nearby_mine_counter)for(let i=-1;i<2;i++)for(let n=-1;n<2;n++)e+i>=0&&e+i<this.gameInit.size&&t+n>=0&&t+n<this.gameInit.size&&(this.gameGrid[e+i][t+n].visibility||this.gameGrid[e+i][t+n].mine||this.gameGrid[e+i][t+n].checked||this.uncover(e+i,t+n))},makeScreen(){let e=[],t=[];for(var i=0;i<this.gameInit.size;i++){t=[];for(var n=0;n<this.gameInit.size;n++)t=[...t,{mine:!1,visibility:!1,nearby_mine_counter:0,x:i,y:n,checked:!1}];e[i]=[...t]}let s=0,a=0,r=0;while(r<this.gameInit.mines)s=Math.floor(Math.random()*this.gameInit.size),a=Math.floor(Math.random()*this.gameInit.size),e[s][a].mine||(e[s][a].mine=!0,r++);for(let o=0;o<this.gameInit.size;o++)for(let t=0;t<this.gameInit.size;t++)if(e[o][t].mine)for(let i=-1;i<2;i++)for(let n=-1;n<2;n++)o+i>=0&&o+i<this.gameInit.size&&t+n>=0&&t+n<this.gameInit.size&&(e[o+i][t+n].mine||e[o+i][t+n].nearby_mine_counter++);this.gameGrid=e},setIsStarted(){this.isStarted=!1,this.checkedMines=0,this.checkedBoxes=0}}});const ie=(0,f.Z)(te,[["render",V],["__scopeId","data-v-2c22542e"]]);var ne=ie;const se={class:"container d-flex justify-content-center pt-3"},ae={id:"gameSettings",class:"rounded shadow-lg d-flex justify-content-between align-center p-2"},re={class:"btn-group dropup"},oe={type:"button",class:"btn shadow-lg darker-green text-light dropdown-toggle","data-bs-toggle":"dropdown","aria-expanded":"false"},ce={id:"difficultyNav",class:"dropdown-menu"},le=["onClick"],de={class:"text-light fw-bold d-flex justify-content-center align-items-center"},he={class:"text-center"},me={class:"mx-auto border-bottom border-white pb-2"};function ue(e,t,i,a,r,o){return(0,s.wg)(),(0,s.iD)("div",se,[(0,s._)("div",ae,[(0,s._)("div",re,[(0,s._)("button",oe,(0,m.zw)(this.currentDif),1),(0,s._)("ul",ce,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.difficulties,(t=>((0,s.wg)(),(0,s.iD)("li",{class:"text-center",key:t},[(0,s._)("a",{onClick:i=>e.setDif(t),class:"text-light btn border-bottom border-1 m-1"},(0,m.zw)(t),9,le)])))),128))])]),(0,s._)("div",de,(0,m.zw)(this.time.text),1),(0,s._)("div",null,[(0,s._)("a",{onClick:t[0]||(t[0]=(...t)=>e.start&&e.start(...t)),id:"startBtn",class:"darker-green btn p-2 text-light shadow-lg"},"New Game")])]),(0,s.wy)((0,s._)("div",{id:"endGame",class:(0,m.C_)(["bg-success text-light",this.modal.win?"bg-success":"bg-danger"])},[(0,s._)("div",he,[(0,s._)("h1",me,(0,m.zw)(e.modal.text),1)]),(0,s._)("a",{onClick:t[1]||(t[1]=e=>this.modal.open=!1),id:"closeBtn",class:"btn text-light d-flex align-items-center justify-content-center"},"X")],2),[[n.F8,e.modal.open]])])}var ge=(0,s.aZ)({setup(){const e=(0,h.iH)(["Easy","Medium","Hard"]),t=(0,h.iH)("Easy"),i=(0,h.iH)({text:"00:00:000",newGame:!0}),n=(0,h.iH)({open:!1,text:"",win:!1});return{difficulties:e,currentDif:t,time:i,modal:n}},props:{playerGameData:Object},methods:{setTimeText(e){return this.time.text=e,this.time.text},start(){this.time.newGame=!0,this.$emit("passDif",this.currentDif),this.$emit("gameNew")},setDif(e){this.currentDif=e},async stopWatch(){this.time.newGame=!1;let e=new Date,t=e.getTime(),i={min:0,sec:0,milis:0},n="";while(!this.time.newGame)await new Promise((e=>setTimeout(e))),e=new Date,e.getTime()-t>0&&(i.milis+=e.getTime()-t,t=e.getTime()),i.milis>999&&(i.milis=0,i.sec++,i.sec>59&&(i.sec=0,i.min++)),n="",i.min<10&&(n+="0"),n+=i.min.toString()+":",i.sec<10&&(n+="0"),n+=i.sec.toString()+":",i.milis<10?n+="00":i.milis<100&&(n+="0"),n+=i.milis.toString(),this.time.text=n},endGame(e){this.modal.open=!0,this.time.newGame=!0,e?.checked_mines!=e?.all_mines?(this.modal.text="YOU LOSE",this.modal.win=!1):(this.modal.text="YOU WIN",this.modal.win=!0)}}});const fe=(0,f.Z)(ge,[["render",ue],["__scopeId","data-v-332824ce"]]);var pe=fe,be=(0,s.aZ)({setup(){const e=(0,h.iH)(!0),t=(0,h.iH)(!1),i=(0,h.iH)({checked_mines:0,all_mines:0});return{game_new:e,stop:t,playerGameData:i}},components:{GameWindow:ne,GameSettings:pe},methods:{sendDif(e){this.$refs.gw.newGame(e)},stopWatchSet(){this.game_new&&(this.stop=!1,this.$refs.gs.stopWatch()),this.game_new=!1},startNew(){this.game_new=!0,this.$refs.gw.setIsStarted()},gameEnd(e,t){this.playerGameData.checked_mines=t,this.playerGameData.all_mines=e,this.$refs.gs.endGame(this.playerGameData)}},mounted(){this.sendDif("Easy")}});const we=(0,f.Z)(be,[["render",Y]]);var xe=we;const ve=[{path:"/",component:xe},{path:"/about",component:P}],ke=(0,O.p7)({history:(0,O.PO)("/Minesweeper_vue_project/"),routes:ve});var ye=ke;(0,n.ri)(M).use(ye).mount("#app")}},t={};function i(n){var s=t[n];if(void 0!==s)return s.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,i),a.exports}i.m=e,function(){var e=[];i.O=function(t,n,s,a){if(!n){var r=1/0;for(d=0;d<e.length;d++){n=e[d][0],s=e[d][1],a=e[d][2];for(var o=!0,c=0;c<n.length;c++)(!1&a||r>=a)&&Object.keys(i.O).every((function(e){return i.O[e](n[c])}))?n.splice(c--,1):(o=!1,a<r&&(r=a));if(o){e.splice(d--,1);var l=s();void 0!==l&&(t=l)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[n,s,a]}}(),function(){i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){i.p="/Minesweeper_vue_project/"}(),function(){var e={143:0};i.O.j=function(t){return 0===e[t]};var t=function(t,n){var s,a,r=n[0],o=n[1],c=n[2],l=0;if(r.some((function(t){return 0!==e[t]}))){for(s in o)i.o(o,s)&&(i.m[s]=o[s]);if(c)var d=c(i)}for(t&&t(n);l<r.length;l++)a=r[l],i.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return i.O(d)},n=self["webpackChunkminesweeper_game"]=self["webpackChunkminesweeper_game"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=i.O(void 0,[998],(function(){return i(139)}));n=i.O(n)})();
//# sourceMappingURL=app.4598e8d8.js.map