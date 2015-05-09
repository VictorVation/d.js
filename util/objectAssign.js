export default function _objectAssign (target, source) {
  let keys = Object.keys(source)
  keys.forEach(key => target[key] = source[key])
}
