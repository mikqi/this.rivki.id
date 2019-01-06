/* global HTMLElement */

HTMLElement.prototype.hasClass = function (cls) {
  var i
  var classes = this.className.split(' ')
  for (i = 0; i < classes.length; i++) {
    if (classes[i] === cls) {
      return true
    }
  }
  return false
}

HTMLElement.prototype.addClass = function (add) {
  if (!this.hasClass(add)) {
    this.className = (this.className + ' ' + add).trim()
  }
}

HTMLElement.prototype.removeClass = function (remove) {
  var newClassName = ''
  var i
  var classes = this.className.replace(/\s{2,}/g, ' ').split(' ')
  for (i = 0; i < classes.length; i++) {
    if (classes[i] !== remove) {
      newClassName += classes[i] + ' '
    }
  }
  this.className = newClassName.trim()
}
