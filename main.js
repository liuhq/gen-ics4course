import { writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { genIcs } from './src/genIcs.js'

const file = resolve(import.meta.dirname, 'example', 'sample.csv')

const icsContent = await genIcs(file)

await writeFile('courses.ics', icsContent)
