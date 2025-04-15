function countTimeExecution(name, title = '', fn, ...param) {
  if (title) console.log(title)
  console.time(name)
  console.log(fn(...param))
  console.timeEnd(name)
}

module.exports = {
  countTimeExecution,
}
