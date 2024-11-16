<script setup>
  import {ref} from 'vue'
  import {useUserStore} from '../stores/note.js'
  const store = useUserStore()
  const date = new Date()
  const day = date.getDate()
  const year = date.getFullYear()
  const month = date.getMonth()
  const title = ref("")
  const note = ref("")
  
</script>
<template>
    <div class="main">
      <div class="header">
            <p>{{day}}.{{month+1}}.{{year}}</p>
                <span class="material-symbols-outlined"> favorite </span>
                <span @click="addNote" class="material-symbols-outlined">
                    done
                </span>
                <span class="material-symbols-outlined"> <span class="material-symbols-outlined">
close
</span></span>
                </div>
                <input v-model="title" placeholder="Title..."/>
                <textarea v-model="note"></textarea>
    </div>
</template>
<style scoped>
.main{
    width: 100vw;
    height: 100vh;
    background: #dabda3;
    padding:10px;
}
.header{
width:100%;
height:50px;
display:flex;
justify-content:space-between;
align-items:center;
padding:0 10px;
color:#ab594e
}
.header p{
font-size:35px;
font-family: "Playfair", serif;
}
input{
width:80%;
height:40px;
border-radius:25px;
background:#f9ece1;
padding-left:20px;
margin-top:10px;
border:0;
color:#284442;
}
input::placeholder{
color:#284442;
}
input:focus ,textarea:focus{
outline:none
}
textarea{
width:100%;
min-height:70%;
margin-top:10px;
background-image:url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqnAyCvs9N8DrpxDTeWcl2k_1p9sxLswGHSA&usqp=CAU");
background-repeat: no-repeat;
background-size: cover;
background-position: center;
padding:22px 10px;
color:#284442;
}

</style>
