<script setup>
  //imports
import Buttons from "../components/button.vue";
import { RouterLink } from "vue-router";
import { ref } from "vue";
import { useUserStore } from "../stores/note.js";
import { useRouter } from 'vue-router';
import {useToast} from 'vue-toastification'

//variables
const toast = useToast()
const router = useRouter()
const noteStore = useUserStore();
let emailOrNumber = ref("");
let password = ref("");
let userName = ref("");

//click function
const addUser = () => {
//check if input us valid
    if(!emailOrNumber.value && !password.value && !userName.value){
    toast.error('invalid credential')
    return
    }
    let user = {
        emailOrNumber: emailOrNumber.value + "",
        password: password.value,
        userName: userName.value,
        isLoggedIn: false,
        notes:[]
    };
    //search the user in store
  let exsist =  noteStore.users.find(u=>{
   return u.emailOrNumber === emailOrNumber.value +""
    })
    if(exsist){
    toast.warning("user exist")
    }else{
    noteStore.addUser(user)
    noteStore.setLoginStatus(emailOrNumber.value+"")
    console.log(noteStore.users)
    router.push({name:'home'})
    }
    emailOrNumber.value = password.value = userName.value= ''
};
</script>
<template>
    <div class="main">
        <p>
            Welcome to <span>Unwritten</span>,<br />your new every day journal
        </p>
        <input v-model="userName" placeholder="Your name" />
        <input
            v-model="emailOrNumber"
            placeholder="Phone number/Email address"
            type="number"
        />
        <input v-model="password" placeholder="Password" />
        <Buttons @click="addUser" label="Sign in" class="btn" />
        <RouterLink to="/">
            <Buttons label="back" class="btn back" />
        </RouterLink>
    </div>
</template>
<style scoped>
.main {
    width: 100vw;
    height: 100vh;
    background: #dabda3;
    text-align: center;
    padding-top: 50%;
}
p {
    color: #ab594e;
    font-size: 25px;
    font-weight: 900;
}
p span {
    color: #d3864f;
}
input {
    width: 85%;
    border: 0;
    border-bottom: 2px solid #284442;
    background: transparent;
    padding: 5px 30px;
    margin-top: 40px;
}
input::placeholder {
    color: #284442;
}
.btn {
    margin-top: 30px;
    margin-left: 10%;
    opacity: 1;
    transition: 0.3s all;
}
.btn:active {
    opacity: 0.5;
    transform: scale(1.1);
}
input:focus {
    outline: none;
}
.back {
    background: #d3864f;
}
</style>
