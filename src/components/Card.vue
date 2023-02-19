<template>
    <!-- <div class="flex p-8 w-2/5 flex-col gap-8">
        <div class="front relative">
            <div class="p-6">
                <img src="../assets/images/card-logo.svg" alt="">
            </div>
            <div class="absolute p-6 bottom-2  w-[100%] my-0 mx-auto">
                <p class="text-center text-[35px]">0000 0000 0000 0000 </p>
                <div class="flex mt-4 justify-between">
                    <p>full name</p>
                    <p>00/00</p>
                </div>
            </div>
        </div>
        <div class="back relative">
            <p class="absolute right-16 top-[43%] text-lg">123</p>
        </div>
    </div> -->

    <div class="absolute top-[10%]  left-8">
        <div class="flex p-8 flex-col gap-8">
            <div class="front relative">
                <div class="p-6">
                    <img src="../assets/images/card-logo.svg" alt="">
                </div>
                <div class="absolute p-6 bottom-2  w-[100%] my-0 mx-auto">
                    <!-- <p class="text-center text-[35px]">{{ defaultNumber || finalNumber}} </p> -->
                    <div class="flex mt-4 justify-between">
                        <p>{{ defaultName || cardHolder.toUpperCase() }}</p>
                        <p>00/00</p>
                    </div>
                </div>
            </div>
            <div class="back relative">
                <!-- <p class="absolute right-16 top-[43%] text-lg">{{cvc}}</p> -->
            </div>
        </div>
    </div>
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
        background: url(../assets/images/bg-card-front.png);
        background-size: cover;
        background-position: center;
        color: hsl(279, 6%, 55%);
        width: 440px;
        height: 240px;
        border-radius: 10px;
        box-shadow: 0px 0px 10px 4px rgba(0, 0, 0, 0.15);

    }
    .back{
        background: url(../assets/images/bg-card-back.png);
        border-radius: 10px;
        color: hsl(279, 6%, 55%);
        background-size: cover;
        background-position: center;
        width: 440px;
        height: 240px;
        box-shadow: 0px 0px 10px 4px rgba(0, 0, 0, 0.15);
        margin-left: 100px;


    }
</style>