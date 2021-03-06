import toArray from './util/toArray'
import objectAssign from './util/objectAssign'

class DOM {
  constructor (selector) {
    let elements = document.querySelectorAll(selector)
    this.length = elements.length
    objectAssign(this, elements)
  }

  map (fn) {
    toArray(this).map(el => fn.call(el, el))
    return this
  }

  each (fn) {
    toArray(this).forEach(el => fn.call(el, el))
    return this
  }

  reduce (fn) {
    toArray(this).forEach(el => fn.call(el, el))
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
    for (let el of toArray(this)) {
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

  attr (attributeName, value=null) {
    if (value == null) {
      return this[0][attributeName]
    } else {
      return this.each(el => el[attributeName] = value)
    }
  }

  val (value=null) {
    if (value == null) {
      return this.attr('value')
    } else {
      this.attr('value', value)
    }
  }

  text (value=null) {
    if (value == null) {
      return this.attr('textContent')
    } else {
      this.attr('textContent', value)
    }
  }

  show () {
    return this.each(el => el.style.display = '')
  }

  hide () {
    return this.each(el => el.style.display = 'none')
  }
}

window.$ = window.d = selector => new DOM(selector)
