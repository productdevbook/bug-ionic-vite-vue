import { createRouter, createWebHistory } from '@ionic/vue-router';
import { setupLayouts } from 'virtual:generated-layouts'

import pages from '~pages'

const routes = setupLayouts(pages)

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export  {router}