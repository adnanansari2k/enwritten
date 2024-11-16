<script setup>
  import { RouterLink} from 'vue-router'
  import {ref} from 'vue'
  import {useUserStore} from '../stores/note.js'
  const store = useUserStore()
  const activeUser = ref(store.getLoginStatus())
  const logoutHandler=()=>{
  store.users.forEach(user=>{
  user.isLoggedIn = false
  })
  console.log(store.users)
  }
</script>
<template>
  <div class='main'>
    <div class="header">
        <div class="dateBox">
            <p>14:50</p>
            <p>Sat,June 12</p>
        </div>

        <div class="optionBox">
            <div>
                <span class="material-symbols-outlined"> search </span>
            </div>
            <div>
                <span class="material-symbols-outlined">
                    custom_typography
                </span>
            </div>
            <div>
              <RouterLink to="/">
                <span @click="logoutHandler()" class="material-symbols-outlined"> logout </span>
                </RouterLink>
            </div>
        </div>
    </div>
    <div class="listBox">
      <RouterLink to="/note">
      <li v-for="note of activeUser.notes" :key="note.id" @click="store.addTempNote(note)">
        <div>
          <p>{{note.date.day}} . {{note.date.month}} . {{note.date.year}}</p>
          <span class="material-symbols-outlined">
favorite
</span>
        </div>
        <p>{{note.title}}</p>
      </li>
      </RouterLink>
    </div>
    <RouterLink to="/addNote" class="addBtn">
      <span class="material-symbols-outlined">
history_edu
</span>
    </RouterLink>
    </div>
</template>
<style scoped>
.main {
    width: 100vw;
    height: 100vh;
    background: #ab594e;
    text-align: center;
    padding:10px;
}
.header{
width:100%;
height:100px;
display:flex;
justify-content:space-between;
align-items:center;
}
.dateBox p:nth-child(1){
font-size:40px;
font-family: "Playfair", serif;
}
.dateBox p{
color:#dabda3
}
.optionBox div{
width:50px;
height:50px;
border-radius:50%;
background:#dabda3
}
.optionBox{
display:flex;
gap:10px
}
.optionBox span{
color:#ab594e;
line-height:50px;
font-size:30px;
}
.listBox{
width:100%;
margin-top:30px;
height:80%;
overflow:scroll;
}
.listBox li{
background:#dabda3;
width:100%;
height:80px;
list-style:none;
padding:10px;
overflow:scroll;
font-family: "Playfair", serif;
margin-top:10px;
border-radius:3px
}
.listBox li div{
display:flex;
justify-content:space-between
}
.addBtn{
width:70px;
height:70px;
border-radius:50%;
position:fixed;
bottom:5%;
left:50%;
transform:translate(-50%,-50%);
background:#284442;
color:#dabda3;
text-align:center;
}
.addBtn span{
font-size:50px;
line-height:70px;
}
</style>
