import assign from 'object-assign'

const _toArray = (arrayLike) => [].slice.call(arrayLike)

class DOM {
  constructor (selector) {
    let elements = document.querySelectorAll(selector)
    this.length = elements.length
    return assign(this, elements)
  }

  map (fn) {
    _toArray(this).map(el => fn.call(el, el))
    return this
  }

  each (fn) {
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

}

window.$ = selector => new DOM(selector);
