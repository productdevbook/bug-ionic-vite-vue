<template>
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Username</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <IonButton @click="router.replace('/ddhello/settings')">Go Settings</IonButton>
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
