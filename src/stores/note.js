import { defineStore } from "pinia";
export const useUserStore = defineStore("userStore", {
    state: () => ({
        users: JSON.parse(localStorage.getItem('userStoreUsers')) ||[
            {
                emailOrNumber: "nomail@gmail.com",
                password: "1234",
                isLoggedIn: false,
                notes:[{id:1233,title:"quates of today",note:"nothing more destructive than lust",date:{day:12,month:10,year:2024}}]
            },
            {
                emailOrNumber: "9372132965",
                password: "1234",
                isLoggedIn: false,
                notes:[{id:1273,title:"trip of villa",note:"vissiting villa in nerul on 2 nov was exciting and fun",date:{day:2,month:8,year:2024}}]
            },
            
        ],
        tempNote:{}
    }),
    actions: {
      addUser(user){
        this.users.push(user)
        this.saveToLocalStorage()
      },
    setLoginStatus(emailOrNumber){
      this.users.forEach(user=>user.isLoggedIn = user.emailOrNumber === emailOrNumber)
      this.saveToLocalStorage()
    },
    addNotes(note,emailOrNumber){
     let cUser= this.users.find(user=>user.emailOrNumber === emailOrNumber)
     cUser.notes.push(note)
     this.saveToLocalStorage()
    },
    addTempNote(note){
      this.tempNote = note
      this.saveToLocalStorage()
    },
    deleteNote(id){
    let activeUser= this.users.find(user=>user.isLoggedIn)
    let ind = activeUser.notes.findIndex(note=>note.id === id)
    activeUser.notes.splice(ind,1)
    this.saveToLocalStorage()
    },
    editNotes(id,title,notesPara){
    let activeUser= this.users.find(user=>user.isLoggedIn)
    activeUser.notes.forEach(note=>{
      if(note.id=== id){
        note.title = title
        note.note = notesPara
      }
    })
    this.saveToLocalStorage()
    },
    saveToLocalStorage() {
            localStorage.setItem('userStoreUsers', JSON.stringify(this.users));
        },
        loadFromLocalStorage() {
            const savedUsers = JSON.parse(localStorage.getItem('userStoreUsers'));
            if (savedUsers) {
                this.users = savedUsers;
            }
        }
    },
    getters: {
        getUserByCredentials: state => (emailOrNumber, password) =>
            state.users.find(
                user =>
                    user.emailOrNumber === emailOrNumber &&
                    user.password === password
            ),
        getLoginStatus:state=>()=>{
         return state.users.find(user=>user.isLoggedIn) || false;
          }
    }
});
