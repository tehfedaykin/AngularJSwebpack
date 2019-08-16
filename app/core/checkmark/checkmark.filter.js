'use strict';

const checkMarkFilter = function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
}

export default checkMarkFilter;
