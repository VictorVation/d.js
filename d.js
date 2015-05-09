function _toArray (arrayLike) {
  return [].slice.call(arrayLike)
}

function _objectAssign (target, source) {
  let keys = Object.keys(source)
  keys.forEach(key => target[key] = source[key])
}

class DOM {
  constructor (selector) {
    let elements = document.querySelectorAll(selector)
    this.length = elements.length
    _objectAssign(this, elements)
  }

  map (fn) {
    _toArray(this).map(el => fn.call(el, el))
    return this
  }

  each (fn) {
    _toArray(this).forEach(el => fn.call(el, el))
    return this
  }

  reduce (fn) {
    _toArray(this).forEach(el => fn.call(el, el))
    return this
  }

  addClass (classNames) {
    let classes = classNames.split(' ')
    return this.map(el => el.classList.add(...classes))
  }

  removeClass (classNames) {
    let classes = classNames.split(' ')
    return this.map(el => el.classList.add(...classes))
  }

  toggleClass (classNames) {
    let classes = classNames.split(' ')
    return this.map(el => el.classList.toggle(...classes))
  }

  hasClass (className) {
    for (let el of _toArray(this)) {
      if (el.classList.contains(className)) {
        return true
      }
    }
    return false
  }

  on (eventNames, callback) {
    let events = eventNames.split(' ')
    events.forEach(event =>
      this.map(el => el.addEventListener(event, callback, false))
    )
    return this
  }
}

window.$ = selector => new DOM(selector)
