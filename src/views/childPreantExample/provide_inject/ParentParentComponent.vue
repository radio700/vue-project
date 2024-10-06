<template>
    <div>
        <h1>PARENT COMPONENT</h1>
        <child-component :PRJID="'메쎄지'"/>
    </div>
</template>
<script>

import { provide } from 'vue';
import ChildComponent from './ChildComponent.vue'
export default {
    components: {ChildComponent},
    data() {return {}},
    
    setup() {
        provide('spec', 't50');
    },

    methods: {},

}
</script>
<style scoped>

</style>


