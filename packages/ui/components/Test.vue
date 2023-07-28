<template>
    <button @click="counter++">Click Me - {{ counter }}</button>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const counter = ref(0);
</script>