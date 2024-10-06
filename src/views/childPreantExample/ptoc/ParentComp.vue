<template>
    <div style="border: 1px solid;">
        <h1>Parent Comp</h1>

        <div style="border: 1px solid;">
            <child-comp :param1="메쎄지" :param2="'메에쎄지'"/>
        </div>

    </div>
    <div>
        <button type='button' @click="onClickParentBtn()">PARENT BUTTON</button>
    </div>
</template>
<script>
import ChildComp from './ChildComp.vue'
export default { 
    components: {ChildComp},
    data() {
        return {
            메쎄지 : "yes"
        }
    },
    computed : {},
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        onClickParentBtn() {
            
        }
    }
}
</script>
<style scoped>

</style>