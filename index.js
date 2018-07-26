"use strict";

exports.createAction = function createAction(type, ...argNames) {
  return function(...args) {
    let action = { type };
    argNames.forEach((argName, index) => {
      if (typeof(argName) === 'string') {
        action[argName] = args[index];
      } else {
        console.warn(
          `Action parameter '${argName}' of type ${typeof(argName)} passed.
          Arguments should only be of type \'string\'`
        );
      }
    });
    return action;
  };
};
