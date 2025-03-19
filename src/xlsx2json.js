import { readFile, utils } from 'xlsx'
import parseDatetime from './parseDatetime.js'

export default function xlsx2json(filePath) {
    const wb = readFile(filePath)
    const ws = wb.Sheets[wb.SheetNames[0]]
    const rawData = utils.sheet_to_json(ws, { raw: false })

    const data = rawData.map(v => ({
        title: v.title,
        start: parseDatetime(v.startDate, v.startTime),
        end: parseDatetime(v.endDate, v.endTime),
        description: v.description,
        location: v.location
    }))

    return data
}
