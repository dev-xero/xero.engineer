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
        <span class="theme-switcher"
            ><span class="theme-circle"></span>theme</span
        >
    </header>
</template>

<script lang="ts">
enum linkTargetType {
    internal,
    external,
}
export default {
    data() {
        return {
            navLinks: [
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
                    caption: "blog",
                    url: "/blog",
                    target: linkTargetType.internal,
                },
                {
                    id: 3,
                    caption: "contact",
                    url: "#contact",
                    target: linkTargetType.internal,
                },
            ],
        };
    },
    methods: {
        getLinkTarget(type: linkTargetType): string {
            return type == linkTargetType.external ? "_blank" : "_self";
        },
    },
};
</script>
