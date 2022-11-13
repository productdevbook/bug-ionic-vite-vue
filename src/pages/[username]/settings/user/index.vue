<template>
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Onboarding</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>

            <IonItemGroup>
                <IonList inset>
                    <IonItem lines="none" button @click="logoutButton()">
                        <IonLabel> Çıkış Yap</IonLabel>
                    </IonItem>
                </IonList>
            </IonItemGroup>
        </IonContent>
    </IonPage>
</template>

<script setup lang="ts">
const router = useRouter();

const logoutButton = () => {
    router.replace('/')
}
</script>