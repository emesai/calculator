<template>
  <div class="com_calculator_container">
    <div class="history_container">
      <p>{{history.join(" ")}}</p>
    </div>
    <div class="total_container">
      <h1>{{total}}</h1>
    </div>
    <CalculatorKeypad />
  </div>
</template>

<script>
import { mapState } from "vuex";
import CalculatorKeypad from "@/components/CalculatorKeypad";
export default {
  components: {
    CalculatorKeypad
  },
  computed: {
    ...mapState("calculator", ["total", "history"])
  }
};
</script>

<style lang="scss" scoped>
.com_calculator_container {
  padding: 1rem;
  width: 290px;
  border: 1px solid #799ad5;

  & .history_container {
    margin-bottom: 2.5rem;
    & p {
      text-align: right;
      font-size: 1.2rem;
    }
  }

  & .total_container {
    margin-bottom: 1rem;
    position: relative;
    border-bottom: 2px solid #c2c2c2;
    padding-bottom: 1rem;
    & h1 {
      text-align: right;
      font-weight: normal;
      font-size: 3rem;
      min-height: 3rem;
      &::before {
        content: "=";
        position: absolute;
        left: 0;
      }
    }
  }
}
</style>