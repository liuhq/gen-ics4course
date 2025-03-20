import XLSX from 'xlsx'
import parseData from './parseData.js'

export default function xlsx2json(filePath) {
    const wb = XLSX.readFile(filePath)
    const ws = wb.Sheets[wb.SheetNames[0]]
    const rawData = XLSX.utils.sheet_to_json(ws, { raw: false })
    const data = rawData.map(raw => parseData(raw))

    return data
}
