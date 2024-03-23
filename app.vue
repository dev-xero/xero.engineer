<template>
    <div>
        <NuxtPage />
    </div>
</template>

<script setup>
import "~/assets/css/global.css";
import { loadTheme } from "~/utils/theme-switcher.ts";
import { onMounted } from "vue";

onMounted(() =>  loadTheme());
</script>
