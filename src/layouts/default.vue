<script setup lang="ts">
import { IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/vue';
const router = useRouter();
const isTab = computed(() => {
  return (
    router.currentRoute.value.meta.option &&
    router.currentRoute.value.meta.option === 'tabs'
  )
})

</script>

<template>
  <IonPage>
    <IonTabs>
      <IonRouterOutlet />
      <IonTabBar
        v-if="isTab"
        slot="bottom"
        class="border-t dark:border-[color:var(--ion-color-step-100)]"
      >
        <IonTabButton tab="home" :href="`/ddhello/home`">
         <div>home1</div>
        </IonTabButton>

        <IonTabButton tab="statistics" :href="`/ddhello/settings`">
            <div>home1</div>
        </IonTabButton>

      </IonTabBar>
    </IonTabs>
  </IonPage>
</template>
