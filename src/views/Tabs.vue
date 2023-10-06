<template>
    <ion-page>
        <ion-tabs>
            <ion-router-outlet />
            <ion-tab-bar>
                <ion-tab-button tab="home" href="/tabs/Home">
                    <ion-icon :icon="search" />
                </ion-tab-button>
                <ion-tab-button tab="searchcustomer" href="/tabs/SearchCustomer">
                    <ion-icon :icon="people" />
                </ion-tab-button>
                <ion-tab-button tab="orderfulfillment" href="/tabs/OrderFulfillment">
                    <ion-icon :icon="infinite" />
                </ion-tab-button>
                <ion-tab-button tab="shoppingcart" href="/tabs/ShoppingCart">
                    <ion-icon :icon="cart" />
                </ion-tab-button>
                <ion-tab-button tab="setting" href="/tabs/Setting">
                    <ion-icon :icon="menu" />
                </ion-tab-button>
            </ion-tab-bar>
        </ion-tabs>
    </ion-page>
</template>
<script lang="ts">
import { search, people, infinite, cart, menu } from 'ionicons/icons'
import { IonPage, IonTabs, IonTabBar, IonTabButton, IonRouterOutlet, IonIcon } from '@ionic/vue'
export default {
    name: "Tabs",
    components: {
        IonPage,
        IonTabs,
        IonTabBar,
        IonTabButton,
        IonRouterOutlet,
        IonIcon
    },
    setup() {
        return {
            search,
            people,
            infinite,
            cart,
            menu
        };
    },
}
</script>
