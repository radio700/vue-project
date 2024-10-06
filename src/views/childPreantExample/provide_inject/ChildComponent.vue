<template>
    <div>
        <h2>CHILD COMPONENT {{ PRJID }}</h2>
        
        <child-child-component :PRJID="PRJID"/>

    </div>
</template>
<script>
import ChildChildComponent from './ChildChildComponent.vue'
export default {
//	name: '',
    components: {ChildChildComponent},
    data() {return {}},

    methods: {},
    props: {
        PRJID: {
            type: String,
            default:"123"
        }
    }
}
</script>
<style scoped>

</style>