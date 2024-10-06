<template>
    <div>
        <h2>Calculator</h2>
        <input type='text' v-model='num1' @click="plusNumbers()">
        <span> + </span>
        <input type='text' v-model='num2' @click="plusNumbers()">
        <span> = </span>
        <span>{{ result }}</span>
    </div>
</template>
<script>
export default {
    //얘들은 onclick 때 마다 수치가 변하는거
	name: "GetCalculator",
    data() {
        return {
            num1: 0,
            num2: 0,
            result : 0
        }
    },
    methods: {
        plusNumbers() {
            this.result = parseInt(this.num1) + parseInt(this.num2);
        }
    }
}
</script>
<style scoped>

</style>