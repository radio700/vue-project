<template>
    <div>
        <h1>msg = {{ msg.value }}</h1>
        <input v-model="msg.value">
        <h1>msg = {{ msg.value2 }}</h1>
        <input v-model="msg.value2">
    </div>
</template>

<script>
import { reactive } from 'vue'
export default {
    setup() {
        const msg = reactive({//msg 객체를 추적하겠다는 말
            value: '',
            value2: ''
        })
        return {msg}
    }
}
</script>
