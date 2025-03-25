import { format, getDate, getMonth, getYear } from 'date-fns'

export default function parseData(raw) {
    return {
        title: raw.title,
        start: parseDatetime(raw.startDate, raw.startTime),
        end: parseDatetime(raw.endDate, raw.endTime),
        startInputType: 'utc',
        endInputType: 'utc',
        description: raw.description,
        location: raw.location,
        created: (new Date()).getTime(),
        productId: '@horin/gen-ics4course'
    }
}

function parseDatetime(date, time) {
    const d = format(date, 'yyyy-M-d')
    const timeArr = time.split(':')
    return [
        getYear(d), // y
        getMonth(d) + 1, // m
        getDate(d), // d
        +timeArr[0], // h
        +timeArr[1], // m
    ]
}
