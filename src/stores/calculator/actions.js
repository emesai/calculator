export default {
  addNumber({ commit, state }, number) {
    if (!state.isEqual) {
      const currentNumber = parseFloat(`${state.currentNumber}${number}`);
      commit("updateNumber", currentNumber);
      if (!state.currentOperator) {
        if (state.history.length) {
          commit("updateHistory", currentNumber);
        } else {
          commit("addHistory", currentNumber);
        }
      } else {
        commit("addHistory", currentNumber);
        commit("setOperator", "");
      }
    }
  },
  equal({ commit, state }) {
    if (state.history.length < 3) {
      commit("currentTotal", state.currentNumber);
    } else {
      commit(
        "currentTotal",
        eval(
          `${state.currentTotal} ${state.history[state.history.length - 2]} ${
            state.currentNumber
          }`
        )
      );
      commit("updateTotal", state.currentTotal);
    }
  },
  operator({ commit, state, dispatch }, operator) {
    if (
      state.history.length &&
      state.history[state.history.length - 1] !== operator
    ) {
      if (state.currentOperator != "") {
        commit("setOperator", operator);
        commit("updateHistory", operator);
        return;
      }
      commit("setOperator", operator);
      if (!state.isEqual) {
        dispatch("equal");
      }
      commit("addHistory", operator);
      commit("updateNumber", 0);
      commit("isEqual", false);
    }
  },
  reset({ commit }) {
    commit("reset");
  },
  toogleMinus({ commit, state }) {
    if (!state.currentOperator && !state.isEqual) {
      commit("toogleMinus");
      commit("updateHistory", state.currentNumber);
    }
  },
  percent({ commit, state }) {
    if (!state.currentOperator && !state.isEqual) {
      commit("percent");
      commit("updateHistory", state.currentNumber);
    }
  },
  dot({ commit, state }) {
    if (
      !state.currentOperator &&
      state.currentNumber.toString().indexOf(".") === -1 &&
      !state.isEqual
    ) {
      commit("updateHistory", `${state.currentNumber}.`);
      commit("updateNumber", `${state.currentNumber}.`);
    }
  }
};
