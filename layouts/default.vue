<template>
    <div>
        <h1>root</h1>
        <Layout />
    </div>
</template>

<script>
import Liberty from "../skins/liberty/layout.vue"
import Buma from "../skins/buma/layout.vue"
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