<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Customer Details</ion-title>
            </ion-toolbar>
        </ion-header>
       <ion-content>
        <ion-card v-for="customer in customerDetails" :key="customer.id" @click="viewCustomer(customer)">
          <ion-card-content>{{ customer.name }}</ion-card-content>
          <ion-card-content v-if="customer.showDescription">{{ customer.description }}</ion-card-content>
        </ion-card>
       </ion-content>
    </ion-page>
</template>
<script lang="ts">
import{IonPage,IonHeader,IonToolbar,IonTitle,IonContent,IonCard,IonCardContent} from '@ionic/vue'
export default{
    name:'Search Customer',
    components:{
        IonPage,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonCard,
        IonCardContent
    },
    data(){
        return{
            customerDetails:[
                {
                    id:1,
                    name:"john",
                    description:"Mobile no:999,address:H.No-3,Bds,txt",
                    showDescription:false
                },
                {
                    id:2,
                    name:"jack",
                    description:"Mobile no:888,address:H.No-4,Sdb,Bxt",
                    showDescription:false
                },
                {
                    id:3,
                    name:"kim",
                    description:"Mobile no:777,address:H.no-5,Ibs,Rja",
                    showDescription:false
                }
            ] as any,
        };
    },
    methods:{
        viewCustomer(details: any){
             details.showDescription=!details.showDescription;
        },
    },
};
</script>