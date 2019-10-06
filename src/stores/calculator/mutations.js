export default {
  addHistory(state, number) {
    state.history.push(number);
  },
  updateHistory(state, history) {
    state.history.splice(state.history.length - 1, 1, history);
  },
  updateTotal(state, number) {
    state.total = number;
    state.isEqual = true;
  },
  updateNumber(state, number) {
    state.currentNumber = number;
  },
  setOperator(state, operator) {
    state.currentOperator = operator;
  },
  reset(state) {
    state.currentOperator = "";
    state.total = "";
    state.currentNumber = 0;
    state.history = [];
    state.currentTotal = 0;
    state.isEqual = false;
  },
  toogleMinus(state) {
    state.currentNumber = state.currentNumber * -1;
  },
  percent(state) {
    state.currentNumber = (state.currentNumber * 1) / 100;
  },
  currentTotal(state, number) {
    state.currentTotal = number;
  },
  isEqual(state) {
    state.isEqual = false;
  }
};
