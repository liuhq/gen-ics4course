#!/usr/bin/env node

import parseArg from './src/parseArg.js'
import { writeFile } from 'node:fs/promises'
import { genIcs } from './src/genIcs.js'

const argv = parseArg(process.argv)
const { if: source, of: target } = argv

console.log('Source File ->', source)
console.log('Target File <-', target, '\n')

const icsContent = await genIcs(source)

console.log('ICS Content Preview:\n------\n')
console.log(icsContent)
console.log('------')
console.log(`Generate ICS file to ${target}...`)

await writeFile(target, icsContent)

console.log('Finished!')
