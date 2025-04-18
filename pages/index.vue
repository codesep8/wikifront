<template>
  <h1>redirecting</h1>
</template>
<script>
export default {
  beforeCreate() {
    this.$router.push("/w/frontpage")
  }
}
</script>