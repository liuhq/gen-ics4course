import { parseFile } from '@fast-csv/parse'
import parseDatetime from './parseDatetime.js'

export default async function csv2json(filePath) {
    return new Promise((resolve, reject) => {
        const events = []

        const csvStream = parseFile(filePath, { headers: true })

        csvStream
            .on('error', err => {
                csvStream.destroy(err)
                reject(err)
            })
            .on('data', row => {
                events.push({
                    title: row.title,
                    start: parseDatetime(row.startDate, row.startTime),
                    end: parseDatetime(row.endDate, row.endTime),
                    description: row.description,
                    location: row.location,
                })
            })
            .on('end', rowCount => {
                console.log(`Parsed ${rowCount} rows`)
                csvStream.destroy()
                resolve(events)
            })
    })
}
