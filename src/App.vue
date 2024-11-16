<script setup>
import { RouterLink, RouterView,useRouter } from 'vue-router'
import { ref, onMounted } from 'vue';
import { auth } from './stores/firebaseConfig.js';
import { onAuthStateChanged } from 'firebase/auth';
import { useUserStore } from './stores/note.js'
const userStore = useUserStore();
const router = useRouter();
const isAuthenticated = ref(false);
onMounted(() => {
  // Listen for authentication state changes
  onAuthStateChanged(auth, user => {
    if (user) {
      isAuthenticated.value = true;
      userStore.setLoginStatus(user.email);
    } else {
      isAuthenticated.value = false;
      router.push('/'); // Redirect to login if not authenticated
    }
  });
});
</script>

<template>
  <RouterView v-slot={Component}>
    <transition name='scale'>
      <component :is="Component" />
    </transition>
    </RouterView>
</template>

<style>
*{
margin:0;
padding:0;
box-sizing:border-box;
}
a{
text-decoration:none;
color:#284442
}
a:active,a:visited{
color:#284442
}
.scale-enter-active, .scale-leave-active {
  transition: all 0.2s ease;
}

.scale-enter {
  transform: scale(0);
  opacity: 0;
}

.scale-enter-to, .scale-leave {
  transform: scale(1);
  opacity: 1;
}

.scale-leave-to {
  transform: scale(0);
  opacity:0.2;
}

</style>
