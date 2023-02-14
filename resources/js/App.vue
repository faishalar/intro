<template>
    <Navigation/>   
    <router-view></router-view>
    <Footer/>
</template>

<script>
    import Navigation from './components/Navigation.vue'
    import Footer from './components/Footer.vue'

    export default{
        components:{
            Navigation,
            Footer
        },
        data(){
            return{
                title:'laravel 9'
            }
        }
    }
</script>