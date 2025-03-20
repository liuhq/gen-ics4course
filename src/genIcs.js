import { createEvents } from 'ics'
import csv2json from './csv2json.js'
import xlsx2json from './xlsx2json.js'

export async function genIcs(filePath) {
    const data = await toJson(filePath)
    const { error, value } = createEvents(data)
    if (error) {
        throw new Error(error)
    }

    return value
}

async function toJson(filePath) {
    switch (filePath.split('.').at(-1)) {
        case 'csv':
            return await csv2json(filePath)
        case 'xlsx':
            return xlsx2json(filePath)
        default:
            return ''
    }
}
