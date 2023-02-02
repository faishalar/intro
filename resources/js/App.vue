<template>
    <Navigation/>        
    <h3>Laravel 9 + Vue 3</h3>
    <div class="menu">
        <v-btn color="primary">Button</v-btn>
        <v-alert dismissible type="success">Anda berhasil!!!</v-alert>
    </div>
    <Footer/>
</template>

<script>
    import Navigation from './components/Navigation.vue'
    import Footer from './components/Footer.vue'

    export default{
        components:{
            Navigation,
            Footer
        }
    }
</script>