const fs = require('fs')
const path = require('path')

// Fungsi membuat atau menambahkan properti baru ke file JSON
function createFileJson(name, length, propertyName) {
  const data = Array.from({ length }, () =>
    parseInt(Math.random() * length + 1)
  )
  const dataFilePath = path.join(process.cwd(), name)

  let existingData = {}

  // Jika file sudah ada, baca isinya dulu
  if (fs.existsSync(dataFilePath)) {
    const raw = fs.readFileSync(dataFilePath)
    existingData = JSON.parse(raw)
  }

  // Tambahkan properti baru ke objek yang sudah ada
  existingData[propertyName] = data

  // Simpan kembali ke file
  fs.writeFileSync(dataFilePath, JSON.stringify(existingData, null, 2))
}

// membaca file json
function readFileJson(file, nameRow) {
  const filePath = path.join(process.cwd(), file)
  const rowData = fs.readFileSync(filePath)
  const parseData = JSON.parse(rowData)
  return parseData[nameRow]
}

module.exports = {
  createFileJson,
  readFileJson,
}
