<template>
    <div>
        <h1>msg = {{ msg1 }}</h1>
        <input v-model="msg1">
    </div>
</template>
<script>
import {reactive, toRef}  from 'vue';
export default {
    setup() {
        const words = reactive({
            a:"a",
            b:"b"
        })
        const msg1 = toRef(words, 'a');

        return {msg1}
    },
}
</script>
<style scoped>

</style>