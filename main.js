const { readFileJson, createFileJson } = require('./utils/methods-json')
const { mergeSort, quickSort } = require('./utils/methods-sort')
const { BinarySearchTree } = require('./utils/binarySearchTree')
const { countTimeExecution } = require('./utils/testing')

const data1 = readFileJson('./data/data.json', 'dataArray10')
const data2 = readFileJson('./data/data.json', 'dataArray100')
const data3 = readFileJson('./data/data.json', 'dataArray1000')
const data4 = readFileJson('./data/data.json', 'dataArray10000')
const data5 = readFileJson('./data/data.json', 'dataArray100000')
const data6 = readFileJson('./data/data.json', 'dataArray1000000')

countTimeExecution(
  'merge sort',
  '\nTESTING DATA 10 PIVOT AWAL',
  quickSort,
  data1,
  false,
  'start'
)
countTimeExecution(
  'merge sort',
  '\nTESTING DATA 10 PIVOT TENGAH',
  quickSort,
  data1,
  false,
  'mid'
)
countTimeExecution(
  'merge sort',
  '\nTESTING DATA 10 PIVOT AKHIR',
  quickSort,
  data1,
  false,
  'end'
)
countTimeExecution(
  'merge sort',
  '\nTESTING DATA 10 PIVOT MEDIAN',
  quickSort,
  data1,
  false,
  'median'
)
// countTimeExecution('quick sort', quickSort, data1)

// countTimeExecution('merge sort', mergeSort, data2, '\nTESTING DATA 100')
// countTimeExecution('quick sort', quickSort, data2)

// countTimeExecution('merge sort', mergeSort, data3, '\nTESTING DATA 1000')
// countTimeExecution('quick sort', quickSort, data3)

// countTimeExecution('merge sort', mergeSort, data4, '\nTESTING DATA 10000')
// countTimeExecution('quick sort', quickSort, data4)

// countTimeExecution('merge sort', mergeSort, data5, '\nTESTING DATA 100000')
// countTimeExecution('quick sort', quickSort, data5)

// countTimeExecution('merge sort', mergeSort, data6, '\nTESTING DATA 1000000')
// countTimeExecution('quick sort', quickSort, data6)

const bst = new BinarySearchTree()
const values = [3, 10, 12, 5, 7, 15]
values.forEach(value => bst.insert(value))

console.log(bst.printInOrder())
console.log(bst.search(5))
