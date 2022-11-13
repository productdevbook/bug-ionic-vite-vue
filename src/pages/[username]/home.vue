<template>
 <IonPage>
    <IonHeader>
        <IonToolbar>
            <IonTitle>Home Page</IonTitle>
        </IonToolbar>
    </IonHeader>
    <IonContent>
        <IonButton @click="router.replace('/ddhello/settings')">Next Settings</IonButton>
    </IonContent>
 </IonPage>
</template>

<script setup lang="ts">
const router = useRouter();
</script>


<route lang="yaml">
meta:
  option: tabs
</route>
