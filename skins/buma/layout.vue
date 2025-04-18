<template>
    <div class="Buma">
        <nuxt-link to="/">buma</nuxt-link>
        <h1>{{ $store.state.page.title }}</h1>
        <nuxt />
    </div>
</template>

<style scoped>
.Buma {
    background: #996633;
}
</style>

<script>
export default {
}
</script>