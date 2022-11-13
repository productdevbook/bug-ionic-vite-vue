<template>
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Settings</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <IonButton @click="router.push('/ddhello/settings/user')">Go User Profile Settings</IonButton>
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
