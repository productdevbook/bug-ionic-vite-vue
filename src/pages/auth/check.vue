<template>
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Onboarding</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
           checking ...
        </IonContent>
    </IonPage>
</template>
<script setup lang="ts">
const router = useRouter();

onMounted(() => {
    console.log('onboarding mounted');
    router.replace('/ddhello/home');
});
</script>