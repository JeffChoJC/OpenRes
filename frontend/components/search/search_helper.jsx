export const parseDate = date => {
    const parts = String(date).split(" ");
    const months = {
        "Jan": "01",
        "Feb": "02",
        "Mar": "03",
        "Apr": "04",
        "May": "05",
        "Jun": "06",
        "Jul": "07",
        "Aug": "08",
        "Sep": "09",
        "Oct": "10",
        "Nov": "11",
        "Dec": "12"
    }
    const month = months[parts[1]];
    const day = parts[2];
    const year = parts[3];

    return `${month}/${day}/${year}`;
}