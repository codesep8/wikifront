<template>
    <h1>doc</h1>
</template>

<script>
export default {
    async asyncData({ store, params }) {
        store.mutation("setTitle", params.doc)
    }
}
</script>