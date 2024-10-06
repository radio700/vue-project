<template>
    <div>
        <h2>CHILD COMP 1</h2>
        <h2>this is param1 : {{ param1 }}</h2>
        <h2>this is param2 : {{ param2 }}</h2>
    </div>
    
</template>
<script>
export default {
    //props : ['message'],
    props : {
        param1 : {
            type : String,
            required : true
        },
        param2 : {
            type : String,
            default : "none"
        }
    },
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
    methods: {}
}
</script>
<style scoped>

</style>