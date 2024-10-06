<template>
    <div>
        <h1>msg = {{ msg1 }}</h1>
        <input v-model="msg1">
        <h1>msg = {{ msg2 }}</h1>
        <input v-model="msg2">
    </div>
</template>
<script>
import { ref } from 'vue';
//reactive와 ref의 차이점은 reactive는 객체 전체를 추적하고 ref는 객체 내의 특정 값을 추적한다.
//소스까보면 ref도 reactive 사용중이다
export default {
    setup() {
        const msg1 = ref("");
        const msg2 = ref("");
        return {msg1,msg2}
    },

}
</script>
