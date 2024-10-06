<template>
    <div>
        <h2>CHILD COMP2</h2>
        <button @click="sendDataToParent">Send Data to Parent</button>
    </div>
</template>
<script>
export default {
//	name: '',
    components: {},
    data() {
        return {
            
        }
    },
    computed : {},
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        sendDataToParent() {
            this.$emit('sendData','일','이');
            
        }
    }
}
</script>
<style scoped>

</style>