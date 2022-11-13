import { createRouter, createWebHistory } from '@ionic/vue-router';
import { setupLayouts } from 'virtual:generated-layouts'
import { NavigationGuard } from 'vue-router';

import pages from '~pages'

const routes = setupLayouts(pages)

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

let firstLoad = true
export const onBeforeEach: NavigationGuard = async (
    to,
    from,
    next
) => {
    next()
}
router.beforeEach(onBeforeEach)

export  {router}