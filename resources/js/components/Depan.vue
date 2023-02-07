<template>
    <v-content>
        <v-row no-gutters>
            <v-col>
                <v-container fluid class="d-grid">
                    <h1>Hai ini adalah web perkenalan diri</h1>
                </v-container>
                <v-container fluid class="d-grid">
                    <p>Hai ini adalah web perkenalan diri</p>
                </v-container>
            </v-col>
            <v-col>
                <v-container fluid class="d-grid" start>
                    <v-img :src="'../storage/img/profil.jpg'" :aspect-ratio="1" max-height="500"></v-img>
                </v-container>
            </v-col>
        </v-row>
        
    </v-content>
</template>