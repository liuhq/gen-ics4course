import { parseFile } from '@fast-csv/parse'
import parseData from './parseData.js'

export default async function csv2json(filePath) {
    return new Promise((resolve, reject) => {
        const events = []
        const csvStream = parseFile(filePath, { headers: true })
        csvStream
            .on('error', err => {
                csvStream.destroy(err)
                reject(err)
            })
            .on('data', raw => {
                events.push(parseData(raw))
            })
            .on('end', rowCount => {
                console.log(`Parsed ${rowCount} rows`)
                csvStream.destroy()
                resolve(events)
            })
    })
}
