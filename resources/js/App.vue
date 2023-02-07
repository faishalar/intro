<template>
    <Navigation/>        
    <Depan/>
    <Footer/>
</template>

<script>
    import Navigation from './components/Navigation.vue'
    import Footer from './components/Footer.vue'
    import Depan from './components/Depan.vue'

    export default{
        components:{
            Navigation,
            Footer,
            Depan
        }
    }
</script>