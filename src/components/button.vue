<script setup>
  import {defineProps, defineEmits} from 'vue'
  const props = defineProps({
  label: {
    type: String,
    default: 'Click Me'
  }
});
</script>

<template>
  <div>{{label}}</div>
</template>
<style scoped>
div{
width:80%;
height:50px;
border-radius:30px;
background:#284442;
text-align:center;
line-height:50px;
color:#f9ece1;
font-size:16px;
}
</style>