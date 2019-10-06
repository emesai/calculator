<template>
  <div class="calculator_keypad_container">
    <div class="button_clear_container">
      <button type="button" @click="reset">CLEAR</button>
    </div>
    <div class="col" v-for="(button, index) in buttons" :key="index">
      <CalculatorKeypadButton :button="button" />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import CalculatorKeypadButton from "@/components/CalculatorKeypadButton";
export default {
  components: {
    CalculatorKeypadButton
  },
  data() {
    return {
      buttons: [
        {
          value: "x",
          operator: true
        },
        {
          value: "1",
          operator: false
        },
        {
          value: "2",
          operator: false
        },
        {
          value: "3",
          operator: false
        },
        {
          value: "+",
          operator: true
        },
        {
          value: "4",
          operator: false
        },
        {
          value: "5",
          operator: false
        },
        {
          value: "6",
          operator: false
        },
        {
          value: "-",
          operator: true
        },
        {
          value: "7",
          operator: false
        },
        {
          value: "8",
          operator: false
        },
        {
          value: "9",
          operator: false
        },
        {
          value: "%",
          operator: true
        },
        {
          value: "+/-",
          operator: true
        },
        {
          value: "0",
          operator: false
        },
        {
          value: ".",
          operator: true
        },
        {
          value: "=",
          operator: true
        }
      ]
    };
  },
  methods: {
    ...mapActions("calculator", ["reset"])
  }
};
</script>

<style lang="scss" scoped>
.calculator_keypad_container {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  margin-left: -0.5rem;
  margin-right: -0.5rem;
  & .button_clear_container {
    width: calc(25% * 3 - 1rem);
    flex: 0 0 calc(25% * 3 - 1rem);
    padding: 0.5rem;
    & button {
      cursor: pointer;
      display: block;
      width: 100%;
      height: 100%;
      background-color: #c7dadb;
      border: none;
      border-radius: 2rem;
      font-size: 1.5em;
      &:focus {
        outline: none;
      }
    }
  }
  & .col {
    width: calc(100% / 4 - 1rem);
    flex: 0 0 calc(100% / 4 - 1rem);
    padding: 0.5rem;
  }
}
</style>