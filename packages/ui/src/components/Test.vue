<script lang="ts" setup>
import { reactive, watch } from 'vue';

const counter = reactive({ value: 0 });

watch([counter], () => {
    console.log(counter.value, 'wasd')
});

const increment = () => {
    counter.value += 1;
}
</script>
<template>
    <button @click="increment" class="bg-red-400">Click test - {{ counter.value }}</button>
    <h1>{{ counter.value }}</h1>
</template>