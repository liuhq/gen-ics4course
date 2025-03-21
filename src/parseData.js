export default function parseData(raw) {
    return {
        title: raw.title,
        start: parseDatetime(raw.startDate, raw.startTime),
        end: parseDatetime(raw.endDate, raw.endTime),
        description: raw.description,
        location: raw.location,
    }
}

function parseDatetime(date, time) {
    const dateArr = date.split('-')
    const timeArr = time.split(':')
    return [
        +dateArr[0], // y
        +dateArr[1], // m
        +dateArr[2], // d
        +timeArr[0], // h
        +timeArr[1], // m
    ]
}
