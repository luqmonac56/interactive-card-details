<template>
    <!-- <Card/> -->
    <div class="relative">
        <div class="absolute top-[10%]  left-8">
            <div class="flex p-8 flex-col gap-8">
                <div class="front relative">
                    <div class="p-6">
                        <img src="../assets/images/card-logo.svg" alt="">
                    </div>
                    <div class="absolute p-6 bottom-2  w-[100%] my-0 mx-auto">
                        <!-- <p class="text-center text-[35px]">{{cardNumber}} </p> -->
                        <p class="text-center text-[35px]">0000 0000 0000 0000 </p>
                        <div class="flex mt-4 justify-between">
                            <p>Jane Doe</p>
                            <!-- <p>{{ cardHolder.toUpperCase() }}</p> -->
                            <p>00/00</p>
                        </div>
                    </div>
                </div>
                <div class="back relative">
                    <!-- <p class="absolute right-16 top-[43%] text-lg">{{cvc}}</p> -->
                    <p class="absolute right-16 top-[43%] text-lg">123</p>
                </div>
            </div>
        </div>
        <div class=" flex h-screen">
            <div class=" parent" >
                <div class="div1">
                </div>
                <div class="div2">
                    <form @submit.prevent="handleSubmit" class=" m-auto max-w-[400px] flex flex-col justify-center gap-6">
                        <div>
                            <label for="card-holder">CARDHOLDER NAME</label>
                            <input id="card-holder" v-model="cardHolder" type="text" placeholder="e.g Jane Appleseed">
                        </div>
                        <div>
                            <label for="card-number">CARD NUMBER</label>
                            <input id="card-number" minlength="16" maxlength="16" v-model="cardNumber" type="text" placeholder="e.g 0000 0000 0000 0000">
                        </div>
                        <div class="flex justify-between w-[100%]  gap-8">
                            <div class="w-[50%]">
                                <label >EXP. DATE (MM/YY)</label>
                                <div class="flex gap-3">
                                    <input v-model="month" class="expiry-date" type="number" placeholder="MM" >
                                    <input v-model="year" class="expiry-date" type="number" placeholder="YY" >
                                </div>
                            </div>
                            <div>
                                <label for="cvc">CVC</label>
                                <input v-model="cvc" minlength="3" maxlength="3" type="text" placeholder="eg 123" >
                            </div>
                        </div>
                        <input class="submit"  type="submit" value="Confirm">
                    </form>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
// import Card from "../components/card.vue"
export default {
    components:{
        // Card
    },
    setup () {

        const cardHolder = ref('')
        const cardNumber = ref('')
        const month = ref('')
        const year = ref('')
        const cvc = ref('')



        const handleSubmit = () =>{
            console.log(cardHolder.value);
        }
        

        return {handleSubmit, cardHolder, cardNumber, month, year, cvc}
    }
}
</script>

<style scoped>

.parent {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    color: hsl(278, 68%, 11%);
    width: 100%;
    font-family: cursive;

}
    
    .div1 {
        grid-area: 1 / 1 / 2 / 2; 
        width: 100%;
        background-image: url(../assets/images/bg-main-desktop.png);
        background-size: cover;
        background-position: center;
    }

    .div2 {
        grid-area: 1 / 2 / 2 / 4; 
        width: 100%;
        display: flex;
    }

    label{
        display: block;
        margin-bottom: .5rem;
    }

    div input{
        border: 1px solid hsl(270, 3%, 87%);
        color: hsl(279, 6%, 55%) ;
        padding:  .3rem 0 .3rem .8rem;
        border-radius: 5px;
        outline: none;
        width: 100%;
    }

    .submit{
        background: hsl(278, 68%, 11%);
        color: #fff;
        padding:  .8rem 0;
        border-radius: 5px;
        cursor: pointer;
    }

    .expiry-date{
        width: 30%;
    }


    .front{
        background: url(../assets/images/bg-card-front.png);
        background-size: cover;
        background-position: center;
        color: hsl(0, 0%, 100%);
        width: 440px;
        height: 240px;
        border-radius: 10px;
        box-shadow: 0px 0px 10px 4px rgba(0, 0, 0, 0.15);

    }
    .back{
        background: url(../assets/images/bg-card-back.png);
        border-radius: 10px;
        color: hsl(0, 0%, 100%);
        background-size: cover;
        background-position: center;
        width: 440px;
        height: 240px;
        box-shadow: 0px 0px 10px 4px rgba(0, 0, 0, 0.15);
        margin-left: 100px;


    }
</style>