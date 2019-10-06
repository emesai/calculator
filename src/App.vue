<template>
  <div id="app">
    <Calculator />
  </div>
</template>

<script>
import Calculator from "@/components/Calculator";
export default {
  components: {
    Calculator
  }
};
</script>
<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

p,
h1 {
  margin-block-end: 0;
  margin-block-start: 0;
}
</style>
