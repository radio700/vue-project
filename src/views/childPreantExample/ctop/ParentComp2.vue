<template>
    <div style="border: 1px solid;">
        <h1>PARENT COMP</h1>
        <div style="border: 1px solid;">
            <child-comp-2 @sendData="handleData"/>
            <p>Received Param1: {{ param1 }}</p>
            <p>Received Param2: {{ param2 }}</p>
        </div>
    </div>
</template>
<script>
import ChildComp2 from './ChildComp2.vue'
export default {
//	name: '',
    components: {ChildComp2},
    data() {
        return {
            param1: '',
            param2: ''
        };
    },
    computed : {},
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        handleData(p1, p2) {
        // 자식 컴포넌트에서 받은 데이터를 data 속성에 저장
        this.param1 = p1;
        this.param2 = p2;
        }
    }
}
</script>
<style scoped>

</style>