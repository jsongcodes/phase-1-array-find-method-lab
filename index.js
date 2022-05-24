const record = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" },
]

function superbowlWin(record) {
    const win = record.find(object => {
        return object.result === 'W';
    });

    if (win === undefined) {
        return win;
    } else {
        return win.year;
    }
}