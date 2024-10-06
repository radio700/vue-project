<template>
    <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/parentcomp">ParentComp</router-link> |
        <router-link to="/parentcomp2">ParentComp2</router-link> |
        <router-link to="/parentparentcomponent">ParentParentComponent</router-link> |
        <router-link to="/getcalculator">getcalculator</router-link> |
        <router-link to="/getcalculator2">GetCalculator2</router-link> |
        <router-link to="/reactivepartner">Reactive_partner</router-link> |
        
    </nav>
    <router-view/>
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

nav {
    padding: 30px;
}

nav a {
    font-weight: bold;
    color: #2c3e50;
}

nav a.router-link-exact-active {
    color: #42b983;
}
</style>
