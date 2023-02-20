<template>
    <div class="cards flex p-8 w-2/5 flex-col-reverse md:flex-col gap-0 md:gap-8">
        <div class="front relative z-50">
            <img class=" front-img w-full h-full" src="../assets/images/bg-card-front.png" alt="">
            <div class="card_container w-full">
                <img class="absolute top-4 left-4 card_logo" src="../assets/images/card-logo.svg" alt="">
                <div class=" absolute bottom-4  w-full px-4">
                    <p class="text-center tracking-wide text-[22px] lg:text-[30px] xl:text-[250%] ">0000 0000 0000 0000 </p>
                    <div class="flex mt-2 md:mt-4 justify-between">
                        <p>full name</p>
                        <p>00/00</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="back relative translate-x-8 md:translate-x-16 translate-y-14 md:translate-y-0">
            <img class="w-full h-full back-img" src="../assets/images/bg-card-back.png" alt="">
            <p class="absolute right-8 lg:right-12 top-[40%] text-lg lg:top-[43%] xl:top-[44%] ">123</p>
        </div>
    </div>

    <!-- <div class="absolute top-[10%]  left-8">
        <div class="flex p-8 flex-col gap-8">
            <div class="front relative">
                <div class="p-6">
                    <img src="../assets/images/card-logo.svg" alt="">
                </div>
                <div class="absolute p-6 bottom-2  w-[100%] my-0 mx-auto">
                    <p class="text-center text-[35px]">{{ defaultNumber || finalNumber}} </p>
                    <div class="flex mt-4 justify-between">
                        <p>{{ defaultName || cardHolder.toUpperCase() }}</p>
                        <p>00/00</p>
                    </div>
                </div>
            </div>
            <div class="back relative">
                <p class="absolute right-16 top-[43%] text-lg">{{cvc}}</p>
            </div>
        </div>
    </div> -->
</template>

<script>
import { ref } from 'vue'
export default {
    props: ['finalNumber', 'cardHolder'],
    setup (props) {

        const defaultNumber = ref('0000 0000 0000 0000')
        const defaultName = ref('Janeee Doe')
        

        return {defaultNumber,defaultName}
    }
}
</script>

<style >

    .front{
        color: hsl(0, 0%, 100%);
        border-radius: 10px;
        box-shadow: 0px 0px 10px 4px rgba(0, 0, 0, 0.15);

    }
    .back{
        border-radius: 10px;
        color: hsl(0, 0%, 100%);
        box-shadow: 0px 0px 10px 4px rgba(0, 0, 0, 0.15);

    }

    @media  screen and (max-width: 1023px) {
        .front, .front-img, .back, .back-img{
            width: 300px;
        } 
        .card_logo{
            width: 50px;
        }
    }

    @media  screen and (max-width: 767px) {
        .front, .front-img, .back, .back-img{
            width: 280px;
        } 
        .card_logo{
            width: 40px;
        }
    }
</style>
