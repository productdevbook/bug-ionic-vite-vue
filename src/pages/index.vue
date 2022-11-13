<template>
 <IonPage>
    <IonHeader>
        <IonToolbar>
            <IonTitle>Onboarding</IonTitle>
        </IonToolbar>
    </IonHeader>
    <IonContent>
        <IonButton @click="router.push('/auth/check')">Check</IonButton>
    </IonContent>
 </IonPage>
</template>
<script setup lang="ts">
const router = useRouter();
</script>