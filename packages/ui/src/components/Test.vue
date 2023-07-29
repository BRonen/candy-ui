<script lang="ts" setup>
import { ref, watch } from 'vue';
const counter = ref(0);

watch([counter], () => {
    console.log(counter.value)
});

const increment = () => {
    counter.value += 1;
}
</script>

<template>
    <button @click="increment">Click - {{ counter }}</button>
</template>