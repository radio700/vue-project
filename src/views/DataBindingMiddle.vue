<template>
    <div>
        <button type="button" @click="increaseCounter">add 1</button>
        <p>the counter is : {{ counter }}</p>
    </div>
    <div>
        <button type="button" @click="setCount(7)">set 7</button>
        <p>the counter is : {{ counter7 }}</p>
    </div>
    <div>
        <button type="button" @click="one(), two()">add 1</button>
    </div>
    <div>
        <select v-model="selectedCboValue" @change="changeCbo()">
            <option value="서울">서울</option>
            <option value="부산">부산</option>
            <option value="제주">제주</option>
        </select>
    </div>
    <div>
        <input @keyup.alt.enter="clear"/>
    </div>
    <div>
        <h1>name is {{ getFullName() }}</h1>
    </div>
</template>
<script>
export default {
    components: {},
    data() {
        return {
            counter : 0,
            counter7 : 0,
            selectedCboValue: '',
            firstName: 'Jin',
            lastName: 'Kim'
        }
    },
    methods: {
        increaseCounter() {
            this.counter++
        },
        setCount(counter7){
            this.counter7 = counter7
        },
        one(){
            alert('one')
        },
        two(){
            alert('two')
        },
        changeCbo(){
            alert(this.selectedCboValue)
        },
        clear(){
            alert('clear')
        },
        getFullName(){
            return this.firstName +"  "+this.lastName
        }


    },

}
</script>