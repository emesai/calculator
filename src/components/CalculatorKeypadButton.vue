<template>
  <div class="button_container">
    <button
      type="button"
      class="calculator_button"
      :class="{'operator': button.operator}"
      @click="clickHandler"
    >{{button.value}}</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["button"],
  methods: {
    ...mapActions("calculator", [
      "addNumber",
      "operator",
      "toogleMinus",
      "equal",
      "percent",
      "dot"
    ]),
    clickHandler() {
      if (!this.button.operator) {
        this.addNumber(this.button.value);
      } else {
        switch (this.button.value) {
          case "+":
            this.operator("+");
            break;
          case "-":
            this.operator("-");
            break;
          case "x":
            this.operator("*");
            break;
          case "+/-":
            this.toogleMinus();
            break;
          case "=":
            this.equal();
            break;
          case "%":
            this.percent();
            break;
          case ".":
            this.dot();
            break;
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.button_container {
  width: 100%;
  padding-top: 100%;
  position: relative;
  & .calculator_button {
    cursor: pointer;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 100%;
    background-color: #c7dadb;
    border: none;
    font-size: 2em;

    &.operator {
      background-color: #fff6db;
    }

    &:focus {
      outline: none;
    }
  }
}
</style>