<script setup>
  import Buttons from '../components/button.vue'
  import { RouterLink} from 'vue-router'
  import {ref} from 'vue'
  import {useUserStore} from '../stores/note.js'
  import { useRouter } from 'vue-router';
  import {useToast} from 'vue-toastification'
  const toast = useToast()
  const noteStore = useUserStore()
  const router = useRouter()
  let emailOrNumber = ref('')
  let password = ref('')
  
  const checkLogin = ()=>{
  const user = noteStore.getUserByCredentials(emailOrNumber.value + "",password.value)
  if(user){
   router.push({name:"home"})
   noteStore.setLoginStatus(emailOrNumber.value+'')
   console.log(noteStore.users)
  }else{
  toast.error("wrong credential")
  }
  emailOrNumber.value = password.value = ''
  }
</script>
<template>
  <div class='main'>
      <h1>unwritten</h1>
      <p>Your heart is safe hear</p>
      
     <input v-model="emailOrNumber" type="number" placeholder="Phone number/Email address" required/>
     <input v-model="password" placeholder="Password"/>
     <Buttons @click="checkLogin" label="Login" class="btn"/>
     <RouterLink to="/signin">
       <Buttons class="btn signUp" label="Sign in"/>
     </RouterLink>
     
  </div>
</template>
<style scoped>
.main{
width:100vw;
height:100vh;
background:#AB594e;
padding:35% 10%;
text-align:center
}
h1{
font-size:60px;
color:#d3864f;
font-family: "Playfair", serif;
letter-spacing:2px
}
p{
color:#f9ece1;
}
input{
width:105%;
border:0;
border-bottom:2px solid #284442;
background:transparent;
padding-left:30px;
margin-top:40px
}
input::placeholder{
color:#284442;
}
.btn{
margin-top:30px;
margin-left:10%;
opacity:1;
transition:0.3s all
}
.btn:active{
opacity:0.5;
transform:scale(1.1)
}
input:focus{
outline:none
}
.signUp{
background:#dabda3;
color:#284442;
}
</style>