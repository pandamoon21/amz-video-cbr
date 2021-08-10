
(function () {
  'use strict';
  (function (open) {
    XMLHttpRequest.prototype.open = function () {
      arguments[1] = arguments[1].replace('CVBR%2CCBR', 'CBR')
      open.apply(this, arguments)
    }
  })(XMLHttpRequest.prototype.open)
})()
