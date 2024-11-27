<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>


<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const authRoutes = ['/', '/login'];

const showTabs = computed(() => {
  return !authRoutes.includes(route.path);
});
</script>