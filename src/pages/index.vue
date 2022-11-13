<template>
 <IonPage>
    <IonHeader>
        <IonToolbar>
            <IonTitle>Anasayfa</IonTitle>
        </IonToolbar>
    </IonHeader>
    <IonContent>
        <IonButton @click="router.push('/')">Next Settings</IonButton>
    </IonContent>
 </IonPage>
</template>
<script setup lang="ts">
const router = useRouter();
</script>