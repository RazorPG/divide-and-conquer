function countTimeExecution(name, fn, data, title = '') {
  if (title) console.log(title)
  console.time(name)
  console.log(fn(data))
  console.timeEnd(name)
}

module.exports = {
  countTimeExecution,
}
