<template>
    <Layout class="app"/>
</template>

<script>
const Liberty = async() => await import("../skins/liberty/layout.vue");
const Buma = async() => await import("../skins/buma/layout.vue");

var Layout;

const skin = "buma"

if (skin == "liberty") {
    Layout = Liberty
} else {
    Layout = Buma
}

export default {
    components: {
        Layout
    }
}
</script>