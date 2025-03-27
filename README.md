# gen-ics4course

>Generate an ics file for subscribing courses

## Usage

```bash
npx @horin-tools/gen-ics4course --if source.csv --of result.ics

# or use pnpm

pnpm dlx @horin-tools/gen-ics4course --if source.csv --of result.ics
```

get more help:

```bash
npx @horin-tools/gen-ics4course --help

# or

npx @horin-tools/gen-ics4course -h
```

|field|description|
|------|------|
|title|The title of the event.|
|startDate|The start date of the event, in the format: YYYY-MM-DD.|
|startTime|The start time of the event, in the format: HH:MM (24-hour format).|
|endDate|The end date of the event, in the format: YYYY-MM-DD.|
|endTime|The end time of the event, in the format: HH:MM (24-hour format).|
|description|A detailed description of the event (optional).|
|location|The location of the event (optional).|

you can get the sample files from [here](https://github.com/liuhq/gen-ics4course/releases)

## Thanks

- [fast-csv](https://github.com/C2FO/fast-csv)
- [xlsx](https://github.com/SheetJS/sheetjs)
- [ics](https://github.com/adamgibbons/ics)
- [date-fns](https://github.com/date-fns/date-fns)
- [yargs](https://github.com/yargs/yargs)

## License

[MIT](./LICENSE)
