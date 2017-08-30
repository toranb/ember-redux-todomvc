import Ember from 'ember';

export function invokeFunction(acc, curr) {
  return curr(acc);
}

export function pipe(actions = []) {
  return function(...args) {
    return actions.reduce((acc, curr, idx) => {
      if (idx === 0) {
        return curr(...args);
      }

      return invokeFunction(acc, curr);
    }, undefined);
  };
}

export default Ember.Helper.helper(pipe);
