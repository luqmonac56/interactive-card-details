<template>
  <div class="relative w-[100vw]">
    <div class="flex">
      <div class="parent  h-full flex flex-col gap-28 md:flex-row">
        <div class="div1 h-[30vh] md:h-[100vh] relative md:flex-[1] ">
          <div class=" absolute left-8 md:left-0 md:top-1/2 md:-translate-y-1/2 md:translate-x-[20%]  2xl:translate-x-[90%] flex flex-col-reverse md:flex-col gap-0 md:gap-8">
            <div class="front relative z-50">
              <img
                class="front-img w-full h-full "
                src="../assets/images/bg-card-front.png"
                alt=""
              />
              <div class="card_container w-full">
                <img
                  class="absolute top-4 left-4 card_logo"
                  src="../assets/images/card-logo.svg"
                  alt=""
                />
                <div class="absolute bottom-4 w-full px-4">
                  <p
                    class="text-center tracking-wide text-[20px] lg:text-[22px] xl:text-[200%]"
                  >
                  {{ defaultNumber || finalNumber }}
                  </p>
                  <div class=" text-[12px] flex mt-2 md:mt-4 justify-between">
                    <span>{{ defaultName || cardHolder.toUpperCase() }}</span>
                    <span
                      >{{ defaultMonth || month }}/{{
                        defaultYear || year
                      }}</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div
              class="back relative translate-x-8 md:translate-x-16 translate-y-14 md:translate-y-0  "
            >
              <img
                class="w-full h-full back-img"
                src="../assets/images/bg-card-back.png"
                alt=""
              />
              <p
                class="absolute right-8 lg:right-12 top-[40%] text-lg lg:top-[43%] xl:top-[44%]"
              >
                {{ defaultCvc || cvc }}
              </p>
            </div>
          </div>
        </div>
        <div class="div2 md:flex-[2]">
          <form
            v-if="!formSubmitted"
            @submit.prevent="formSubmitted = !formSubmitted"
            class="m-auto w-full px-6 max-w-[400px] flex flex-col justify-center gap-6"
          >
            <div>
              <label for="card-holder">CARDHOLDER NAME</label>
              <input
              class="text-[14px]"
                id="card-holder"
                @input="defaultName = ''"
                v-model="cardHolder"
                required
                type="text"
                placeholder="e.g Jane Appleseed"
              />
            </div>
            <div>
              <label for="card-number">CARD NUMBER</label>
              <input
                class="text-[14px]"
                id="card-number"
                @input="defaultNumber = ''"
                minlength="16"
                maxlength="16"
                required
                v-model="cardNumber"
                type="text"
                placeholder="e.g 0000 0000 0000 0000"
              />
            </div>
            <div class="flex justify-between w-[100%] gap-8">
              <div class="w-[50%]">
                <label>EXP. DATE (MM/YY)</label>
                <div class="flex gap-3">
                  <input
                    v-model="month"
                    @input="defaultMonth = ''"
                    required
                    class="expiry-date text-[14px]"
                    minlength="2"
                    maxlength="2"
                    type="text"
                    placeholder="MM"
                  />
                  <input
                    v-model="year"
                    @input="defaultYear = ''"
                    required
                    class="expiry-date text-[14px]"
                    minlength="2"
                    maxlength="2"
                    type="text"
                    placeholder="YY"
                  />
                </div>
              </div>
              <div>
                <label for="cvc">CVC</label>
                <input
                  id="cvc"
                  @input="defaultCvc = ''"
                  class="text-[14px]"
                  required
                  v-model="cvc"
                  minlength="3"
                  maxlength="3"
                  type="text"
                  placeholder="eg 123"
                />
              </div>
            </div>
            <input class="submit" type="submit" value="Confirm" />
          </form>
          <div
            v-else
            class="m-auto max-w-[400px] flex flex-col justify-center gap-6 animate__animated animate__backInRight"
          >
            <ThankYou :handleContinue="handleContinue" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import ThankYou from "../components/ThankYou.vue";
export default {
  components: {
    // Card,
    ThankYou,
  },
  setup() {
    const defaultNumber = ref("0000 0000 0000 0000");
    const defaultName = ref("Jane Doe");
    const defaultMonth = ref("12");
    const defaultYear = ref("23");
    const defaultCvc = ref("123");
    const cardHolder = ref("");
    const cardNumber = ref("");
    const month = ref("");
    const year = ref("");
    const cvc = ref("");
    const formSubmitted = ref(false);

    const finalNumber = computed(() => {
      const val = cardNumber.value.replace(/\D/g, "");
      return val.replace(/(.{4})/g, "$1 ");
    });

    const handleContinue =  ()=>{
      formSubmitted.value = !formSubmitted.value
      cardHolder.value = defaultName.value
      cardNumber.value = defaultNumber.value
      month.value = defaultMonth.value
      year.value = defaultYear.value
      cvc.value = defaultCvc.value
    }

    return {
      defaultName,
      defaultNumber,
      defaultMonth,
      defaultYear,
      defaultCvc,
      finalNumber,
      cardHolder,
      cardNumber,
      month,
      year,
      cvc,
      formSubmitted,
      handleContinue
    };
  },
};
</script>

<style scoped>
.parent {
  color: hsl(278, 68%, 11%);
  width: 100%;
}

.div1 {
  width: 100%;
  background-image: url(../assets/images/bg-main-desktop.png);
  background-size: cover;
  background-position: center;
}

.div2 {
  width: 100%;
  display: flex;
}

label {
  display: block;
  margin-bottom: 0.3rem;
  font-size: 12px;
}

input::placeholder{
  font-size: 12px;
}

div input {
  border: 1px solid hsl(270, 3%, 87%);
  color: hsl(279, 6%, 55%);
  padding: 0.3rem 0 0.3rem 0.6rem;
  border-radius: 5px;
  outline: none;
  width: 100%;
}

.submit {
  background: hsl(278, 68%, 11%);
  color: #fff;
  padding: 0.8rem 0;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  border: none;
}

.expiry-date {
  width: 30%;
}

.front {
  color: hsl(0, 0%, 100%);
  border-radius: 10px;
  box-shadow: 0px 0px 10px 4px rgba(0, 0, 0, 0.15);
}
.back {
  border-radius: 10px;
  color: hsl(0, 0%, 100%);
  box-shadow: 0px 0px 10px 4px rgba(0, 0, 0, 0.15);
}

@media screen and (max-width: 1023px) {

  body{
    background: #ffffff;
  }

  .front,
  .front-img,
  .back,
  .back-img {
    width: 300px;
  }
  .card_logo {
    width: 50px;
  }
}

@media screen and (max-width: 767px) {
  body{
    background: #ffffff;
  }
  .front,
  .front-img,
  .back,
  .back-img {
    width: 280px;
  }
  .card_logo {
    width: 40px;
  }
}
</style>
<!-- width: 440px; -->
<!-- animate__animated animate__backInLeft animate__delay-1s animate__slow -->