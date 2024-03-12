<script setup lang="ts">
const response = await fetch("http://127.0.0.1:8000/api/test");
const data = await response.json();
</script>

<template>
    <h1 class="text-center">Hello Table Request page</h1>
    <div class="">
    </div>
</template>