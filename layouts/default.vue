<template>
    <Layout/>
</template>

<script>
const liberty = async() => await import("~/skins/liberty/layout.vue");
const buma = async() => await import("~/skins/buma/layout.vue");

var Layout;

const skin = "buma";

if (skin == "liberty") {
    Layout = liberty
} else {
    Layout = buma
}

export default {
    components: {
        Layout
    }
}
</script>