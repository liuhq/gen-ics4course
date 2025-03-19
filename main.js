import { writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import ics from 'ics'
import csv2json from './src/csv2json.js'

const file = resolve(import.meta.dirname, 'example', 'courses.csv')
const events = await csv2json(file)
const {error, value} = ics.createEvents(events)

if (error) {
    console.error(error)
}

await writeFile('courses.ics', value)
