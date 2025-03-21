import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

export default function parseArg(argv) {
    return yargs(hideBin(argv))
        .options({
            if: {
                demandOption: true,
                describe: 'Input file, only supports *.csv, *.xlsx',
                type: 'string',
            },
            of: {
                demandOption: true,
                describe: 'Output file, generate *.ics file',
                type: 'string',
            },
        })
        .alias({
            version: 'v',
            help: 'h',
        })
        .group(['if', 'of'], 'IO Options:')
        .group(['help', 'version'], 'Other Options:')
        .usage('\n\tGenerate an ics file for subscribing courses')
        .example([
            ['$0 --if source.csv --of result.ics', '<- From csv file'],
            ['$0 --if source.xlsx --of result.ics', '<- From xlsx file'],
        ])
        .epilog(
            String.raw`For more information:
  Author: Horace Liu <im.liuhq@gmail.com>
  Git Repository: https://github.com/liuhq/gen-ics4course`,
        )
        .parse()
}
