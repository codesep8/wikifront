<template>
    <Layout class="app"/>
</template>

<script>
const Liberty = async() => await import("../skins/liberty/layout.vue")
const Buma = async() => await import("../skins/buma/layout.vue")

const skin = "buma"
var Layout;

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