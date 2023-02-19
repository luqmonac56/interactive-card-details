<template>
    <div class="text-center w-[400px]  flex flex-col items-center gap-6 ">
        <img src="../assets/images/icon-complete.svg" alt="complete">
        <div>
            <h2 class=" font-bold text-2xl">THANK YOU!</h2>
            <P class=" text-[#8080807e]">We've added your card details</P>
        </div>
        <router-link class=" submit" :to="{name: 'home'}">Continue</router-link>
    </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style scoped>

.submit {
    background: hsl(278, 68%, 11%);
    color: #fff;
    padding: 0.6rem 0;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
  }

</style>