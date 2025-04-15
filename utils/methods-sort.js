function quickSort(data, reverse = false, pivot = 'start') {
  if (data.length <= 1) {
    return data
  }
  const start = 0
  const mid = Math.floor(data.length / 2)
  const end = data.length - 1
  const median = [data[start], data[mid], data[end]].sort((a, b) => a - b)[1]

  const pivotIndex =
    pivot == 'start'
      ? start
      : pivot == 'mid'
      ? mid
      : pivot == 'end'
      ? end
      : median
  const left = [],
    right = []

  for (let i = 0; i < data.length; i++) {
    if (i == pivotIndex) {
      continue
    } else if (!reverse) {
      if (data[i] <= data[pivotIndex]) {
        left.push(data[i])
      } else {
        right.push(data[i])
      }
    } else {
      if (data[i] > data[pivotIndex]) {
        left.push(data[i])
      } else {
        right.push(data[i])
      }
    }
  }
  return [
    ...quickSort(left, reverse),
    data[pivotIndex],
    ...quickSort(right, reverse),
  ]
}

function mergeSort(data, reverse = false) {
  if (data.length <= 1) {
    return data
  }
  const mid = Math.floor(data.length / 2)

  const left = data.slice(0, mid)
  const right = data.slice(mid)

  const sortLeft = mergeSort(left, reverse)
  const sortRight = mergeSort(right, reverse)

  return merge(sortLeft, sortRight, reverse)
}

function merge(left, right, reverse = false) {
  const result = []
  let i = 0,
    j = 0
  while (i < left.length && j < right.length) {
    if (!reverse) {
      if (left[i] <= right[j]) {
        result.push(left[i])
        i++
      } else {
        result.push(right[j])
        j++
      }
    } else {
      if (left[i] > right[j]) {
        result.push(left[i])
        i++
      } else {
        result.push(right[j])
        j++
      }
    }
  }

  while (i < left.length) {
    result.push(left[i])
    i++
  }
  while (j < right.length) {
    result.push(right[j])
    j++
  }

  return result
}

module.exports = {
  quickSort,
  mergeSort,
}
