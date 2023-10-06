<template>
    <ion-page>
        <ion-card>
            <ion-toolbar>
                <div>
                    <ion-list>
                        <ion-item>
                            <ion-input v-model="userName" label="Enter ID" type="email" placeholder="enter email Id here" />
                        </ion-item>
                        <ion-item>
                            <ion-input v-model="password" label="Enter Password" type="password"
                                placeholder="enter password" />
                        </ion-item>
                    </ion-list>
                    <ion-button @click="login">LogIn</ion-button>
                </div>
            </ion-toolbar>
        </ion-card>
    </ion-page>
</template>

<script lang="ts">
import {
    IonToolbar,
    IonButton,
    IonPage,
    IonList,
    IonInput, 
    IonItem,
    IonCard
} from '@ionic/vue';
import {
    defineComponent
} from 'vue';
import instance from '../axios/axio'
export default defineComponent({
    name: 'Home',
    components: {
        IonToolbar,
        IonButton,
        IonPage,
        IonList,
        IonInput, 
        IonItem,
        IonCard
    },
    data() {
        return {
            userName: '',
            password: '',
        }
    },
    methods: {
        async login() {
            // store this in local storage if login is successful
            // delete this on logout
             const givenToken = 'mysecrettoken'
            console.log('login called', this.userName, this.password);
            if (this.userName === '1' && this.password === '2') {
                localStorage.setItem('token',givenToken)
                try{
                    const response=await instance.get('https://fakestoreapi.com/');
                    const data=response.data;
                }catch(error){
                   console.log('Invalid')
                }
                this.$router.push('/tabs/Home')
            } else {
                alert('Invalid');
            };
        },
    },
});
</script>