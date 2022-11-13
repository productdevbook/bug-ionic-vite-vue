<script setup lang="ts">
import { IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/vue';


</script>

<template>
  <IonPage>
    <IonTabs>
      <IonRouterOutlet />
      <IonTabBar
        slot="bottom"
        class="border-t dark:border-[color:var(--ion-color-step-100)]"
      >
        <IonTabButton tab="home" :href="`/tab1`">
         <div>home1</div>
        </IonTabButton>

        <IonTabButton tab="statistics" :href="`/tab2`">
            <div>home1</div>
        </IonTabButton>

        <IonTabButton tab="settings" :href="`/tab3`">
            <div>home1</div>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  </IonPage>
</template>
