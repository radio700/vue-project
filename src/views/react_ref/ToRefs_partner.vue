<template>
    <div>
        <h1>msg = {{ a }}</h1>
        <input v-model="a">
    </div>
</template>
<script>
import {reactive, toRefs}  from 'vue';
//toRef와 toRefs의 차이점은 toRef는 객체 내의 특정 값을 추적하고 toRefs는 객체 전체를 추적한다.
export default {
    setup() {
        const words = reactive({
            a:"a",
            b:"b"
        });
        const {a, b} = toRefs(words);
        return {a, b}
    },

}
</script>
<style scoped>

</style>