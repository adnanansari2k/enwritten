<script setup>
import { ref, defineProps } from "vue";
import { useUserStore } from "../stores/note.js";
import { RouterLink,useRouter} from "vue-router";
const store = useUserStore();
const router = useRouter()
let note = store.tempNote;
const title = ref(note.title);
const noteModel = ref(note.note);
const deleteNotes=()=>{
store.deleteNote(note.id)
router.push({name:"home"})
}
const editNote=()=>{
store.editNotes(note.id,title.value,noteModel.value)
router.push({name:'home'})
}
</script>
<template>
    <div class="main">
        <div class="header">
          
            <RouterLink to="/home">
                <span class="material-symbols-outlined">
                    arrow_back
                </span></RouterLink>
            <p>
                {{ note.date.day }}.{{ note.date.month }}.{{ note.date.year }}
            </p>
            
            <span class="material-symbols-outlined" @click="editNote()"> edit </span>

            <span class="material-symbols-outlined" @click="deleteNotes()"> delete </span>
        </div>
        <input v-model="title" placeholder="Title..." />
        <textarea v-model="noteModel"></textarea>
    </div>
</template>
<style scoped>
.main {
    width: 100vw;
    height: 100vh;
    background: #dabda3;
    padding: 10px;
}
.header {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    color: #ab594e;
}
.header p {
    font-size: 35px;
    font-family: "Playfair", serif;
}
input {
    width: 80%;
    height: 40px;
    border-radius: 25px;
    background: #f9ece1;
    padding-left: 20px;
    margin-top: 10px;
    border: 0;
    color: #284442;
}
input::placeholder {
    color: #284442;
}
input:focus,
textarea:focus {
    outline: none;
}
textarea {
    width: 100%;
    min-height: 70%;
    margin-top: 10px;
    background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqnAyCvs9N8DrpxDTeWcl2k_1p9sxLswGHSA&usqp=CAU");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding: 22px 10px;
    color: #284442;
}
</style>
