import { createRouter, createWebHistory } from 'vue-router'
import SigninView from '../views/SigninView.vue'
import LoginView from '../views/LoginView.vue'
import HomeView from '../views/HomeView.vue'
import NoteView from '../views/NoteView.vue'
import AddNoteView from '../views/AddNoteView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/signin',
      name: 'signin',
      component: SigninView,
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/note',
      name: 'note',
      component: NoteView,
    },
    {
      path:'/addNote',
      name:'addNote',
      component:AddNoteView
    }
  ],
})

export default router
