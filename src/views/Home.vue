<template>
<ion-page>
    <ion-header :translucent="true">
        <ion-toolbar class="first">
            <ion-button slot="end" @click="logOut()">logOut</ion-button>
            <ion-title>Product</ion-title>
        </ion-toolbar>
        <div class="second">
            <ion-segment @ionChange="segmentChanged($event)" v-model="segment">
                <ion-segment-button value="search" class="four">
                    <ion-label>Search</ion-label>
                </ion-segment-button>
            </ion-segment>
        </div>
    </ion-header>
    <ion-content :fullscreen="true" >
        <div v-if="segment == 'search'">
            <ion-searchbar placeholder="search products"></ion-searchbar>
            <div>
                <ion-chip @click="selectedChip('men\'s clothing')">
                    <ion-label>Men</ion-label>
                </ion-chip>
                <ion-chip @click="selectedChip('women\'s clothing')">
                    <ion-label>Women</ion-label>
                </ion-chip>
                <ion-chip @click="selectedChip('electronics')">
                    <ion-label>Electronics</ion-label>
                </ion-chip>
                <ion-chip @click="('jewelery')">
                    <ion-label>jewelery</ion-label>
                </ion-chip>
                <ion-chip @click="selectedChip('all')">
                    <ion-label>All</ion-label>
                </ion-chip>
            </div>
            <ion-card class="third" >
            <ion-item lines="none" v-for="(product, index) in filterProducts" :key="index" @click="go(product)" >
                <ion-thumnail slot="start">
                    <img :src="product.image" alt="product image" class="five"/>
                </ion-thumnail>
                
                    <ion-label>
                        <h2>{{ product.title }}</h2>
                    </ion-label>
                
            </ion-item>
        </ion-card>
            <ion-list>
            </ion-list>
        </div>
    </ion-content>
</ion-page>
</template>

<script lang="ts">
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonItem,
    IonLabel,
    IonSearchbar,
    IonThumbnail,
    IonSegment,
    IonSegmentButton,
    IonChip,
    IonRow,
    IonList,
    IonCard,
    IonRouterOutlet
} from '@ionic/vue';

import {
    defineComponent,
    ref,
    onMounted,
} from 'vue';
interface Product {
    id: number;
    title: string;
    category: string;
    description: string;
    price: number;
    image: string
}
export default defineComponent({
    name: 'Home',
    components: {
        IonContent,
        IonHeader,
        IonPage,
        IonTitle,
        IonToolbar,
        IonList,
        IonItem,
        IonLabel,
        IonSearchbar,
        IonThumbnail,
        IonSegment,
        IonSegmentButton,
        IonChip,
        IonRow,
        IonCard,
        IonRouterOutlet
    },
    setup() {
        const products = ref < Product[] > ([]);
        const filterProducts = ref < Product[] > ([]);
        const selectedCategory = ref < string | null > (null);
        const fetchProd = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();
                products.value = data.map((product: Product) => ({
                    id: product.id,
                    title: product.title,
                    category: product.category,
                    description: product.description,
                    price: product.price,
                    image: product.image
                }));
                filterProducts.value = products.value;
            } catch (error) {
                console.log('not found');
            };
        };
        onMounted(() => { 
            fetchProd()
        });
        const selectedChip = (category: string) => {
            selectedCategory.value = category;
            if (category === 'all') {
                filterProducts.value = products.value;
            } else {
                filterProducts.value = products.value.filter(product => product.category === category);
            }
        };
        return {
            products,
            selectedChip,
            filterProducts,
            selectedCategory,
        };
    },
    data() {
        return {
            products: [] as any,
            segment: 'search',
        };
    },
    methods: {
        segmentChanged(ev: CustomEvent) {
            this.segment = ev.detail.value;
        },
        go(product: Product) {
            this.$router.push({
                name: 'ProductDetails',
                params: {
                    id: product.id,
                }
            })
        },
        logOut(){
            localStorage.removeItem('token')
            this.$router.push('/Login');
        }
    },
});
</script>

<style scoped>
#container {
    text-align: center;

    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
}

#container strong {
    font-size: 20px;
    line-height: 26px;
}

#container p {
    font-size: 16px;
    line-height: 22px;

    color: #8c8c8c;

    margin: 0;
}

#container a {
    text-decoration: none;
}

img {
    width: 200px;
    height: 200px
}

.first {
    color: rgb(255, 142, 3);
    background-color: rgb(182, 182, 46);
}

.second {
    background-color: coral;
}

.four {
    color: antiquewhite;

}
img{
    padding:20px;
}



</style>
