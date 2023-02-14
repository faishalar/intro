<template>
    <v-toolbar color="white" flat>
        <v-container style="max-width:19%;">
            <v-toolbar-title style="text-align:center; text-decoration:none;"><a href="/" style="color:#57534E">HELLO WORLD</a></v-toolbar-title>
        </v-container>
        <v-container class="d-flex justify-start ml-10 pl-7">
            <router-link to="/" style="color:#57534E">Home</router-link>
            <router-link to="/pengalaman" style="color:#57534E">Pengalaman</router-link>
            <router-link to="/tentang-saya" style="color:#57534E">Tentang Saya</router-link>
        </v-container>
    </v-toolbar>
</template>