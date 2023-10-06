<template>
<ion-page>
    <ion-header>
        <ion-toolbar>
            <ion-back-button slot="start" class="first" @click="backToHome()" default-href="/tabs/Home"></ion-back-button>
            <ion-title>Product Details</ion-title>
        </ion-toolbar>
    </ion-header>
    <ion-content>
        <img :src="product.image" alt="'Product Image'" height="200" width="200" />
        <ion-card class="footer">
            <ion-card-header>
                <h1>{{ product.title }}</h1>
                <h4>${{ product.price }}</h4>
                <ion-card-subtitle>
                    <h6>{{ product.category}}</h6>
                </ion-card-subtitle>
            </ion-card-header>
            <ion-card-content>
                <h4>{{ product.description }}</h4>
            </ion-card-content>
            <ion-button shape="round" @click="add()">Add to Cart</ion-button>
        </ion-card>
    </ion-content>
</ion-page>
</template>

<script lang="ts">
import {
    IonIcon
} from "@ionic/vue";
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonLabel,
    IonList,
    IonButton,
    IonBackButton,
    IonCardSubtitle,
    IonCardHeader
} from '@ionic/vue'
import {
    defineComponent,
    ref
} from 'vue';
interface Product {
    id: string,
    title: string,
    description: string;
    category: string;
    price: string;
    image: string;
}
export default defineComponent({
    name: 'productDetails',
    components: {
        IonContent,
        IonHeader,
        IonPage,
        IonTitle,
        IonToolbar,
        IonCard,
        IonCardTitle,
        IonCardContent,
        IonItem,
        IonLabel,
        IonList,
        IonIcon,
        IonButton,
        IonBackButton,
        IonCardSubtitle,
        IonCardHeader

    },
    data() {
        return {
            product: {
                id: '',
                title: '',
                description: '',
                category: '',
                price: '',
                image: '',
            },
        };
    },
    methods: {
        backToHome() {
            this.$router.push({
                path: '/tabs/Home',
            });
        },
        add() {
            alert('Successfully added to cart')
        }
    },
    async mounted() {

        const productData = ref < Product > ({
            id: '',
            title: '',
            description: '',
            category: '',
            price: '',
            image: ''
        });
        try {
            const resp = await fetch(`https://fakestoreapi.com/products/${this.$route.params.id}`);
            const data = await resp.json();
            productData.value = data;
            this.product = {
                id: productData.value.id,
                title: productData.value.title,
                description: productData.value.description,
                category: productData.value.category,
                price: productData.value.price,
                image: productData.value.image,
            }
        } catch (error) {
            console.error(error)
        }
    },
})
</script>

<style scoped>
.first {
    width: 60px;
    height: 60px;
    padding: 10px;
    background-color: rgb(221, 224, 230);
}

h1 {
    color: rgb(133, 33, 33)
}

h2 {
    color: rgb(170, 4, 34);

}

h4 {
    color: coral;
    font-style: italic;

}

.second {
    height: 3px;
    width: 3px;
}

.footer {
    position: absolute;
    bottom: 0;
    width: 100%
}
</style>
