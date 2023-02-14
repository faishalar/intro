<template>
    <v-toolbar color="white" flat class="pa-3">
        <v-container style="max-width:35%;">
            <v-toolbar-title style="text-align:center; text-decoration:none;"><a href="/" style="color:#57534E;font-weight:bold">HELLO WORLD</a></v-toolbar-title>
        </v-container>
        <v-container class="d-flex justify-end mr-15 pr-16">
            <router-link to="/" style="color:#57534E">Home</router-link>
            <router-link to="/pengalaman" style="color:#57534E">Pengalaman</router-link>
            <router-link to="/tentang-saya" style="color:#57534E">Tentang Saya</router-link>
        </v-container>
    </v-toolbar>
</template>