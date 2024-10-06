<template>
    <div>
        <h3>CHILD CHILD COMPONENT {{ PRJID }}</h3>
        <h4>{{ spec }}</h4>
    </div>
</template>
<script>
import { inject } from 'vue';

export default {
    setup() {
        const spec = inject('spec');
        return { spec };
    },
    props: {
        PRJID: {
            type: String,
            default: "123"
        }
    }
}
</script>
<style scoped>
</style>
