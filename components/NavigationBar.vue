<template>
    <header class="navigation-bar contained">
        <h3 class="navigation-logo">
            <a href="/" class="black-text">XE // RO</a>
        </h3>
        <ul class="navigation-links">
            <li v-for="link in navLinks" :key="link.id">
                <a
                    :href="link.url"
                    :target="getLinkTarget(link.target)"
                    class="grey-text"
                    >{{ link.caption }}</a
                >
            </li>
        </ul>
        <span @click="handleThemeChange" class="theme-switcher"
            ><span class="theme-circle"></span>theme</span
        >
    </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { setTheme } from "~/utils/theme-switcher.ts";

enum linkTargetType {
    internal,
    external,
}

const navLinks = ref([
    {
        id: 0,
        caption: "source code",
        url: "https://github.com/dev-xero",
        target: linkTargetType.external,
    },
    {
        id: 1,
        caption: "projects",
        url: "/projects",
        target: linkTargetType.internal,
    },
    {
        id: 2,
        caption: "blogs",
        url: "/blogs",
        target: linkTargetType.internal,
    },
    {
        id: 3,
        caption: "contact",
        url: "#contact",
        target: linkTargetType.internal,
    },
]);

const getLinkTarget = (type: linkTargetType): string => {
    return type == linkTargetType.external ? "_blank" : "_self";
};

const handleThemeChange = () => {
    setTheme();
};
</script>
