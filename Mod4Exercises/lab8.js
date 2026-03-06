function currentDateTime(){
    const DateTime = luxon.DateTime
    let nowLuxon = DateTime.now()

    const birthDate = luxon.DateTime.fromISO("2001-08-21T0300")

    let diff = nowLuxon.diff(birthDate, ["years", "months", "days", "hours"])

    let diffFormatted = diff.toFormat('MM, dd, yyyy')
    let diffFormattedDays = diff.toFormat('dd')

    let eDisplayLuxon = document.getElementById('displayLuxon')
    let edisplayDiff = document.getElementById('displayDiff')
    edisplayDiff.innerHTML =`<p>Difference from now and your birthday (month, day, year): ${diffFormatted}</p> <p>Difference from now and your birthday (days): ${diffFormattedDays}</p>`

    let closestDate1 = luxon.DateTime.fromISO('2016-03-04')
    let closestDate2 = luxon.DateTime.fromISO('2020-03-04')

    let cd1 = Math.abs(closestDate1.diff(nowLuxon, 'milliseconds').milliseconds)
    let cd2 = Math.abs(closestDate2.diff(nowLuxon, 'milliseconds').milliseconds)

    if (cd1 < cd2) {
    eDisplayLuxon.innerHTML =`<p>The closest date to today is: ${closestDate1}</p> <p>${closestDate2} comes before ${closestDate1}</p>`
    } else {
    eDisplayLuxon.innerHTML =`<p>The closest date to today is: ${closestDate2}</p> <p>${closestDate1} comes before ${closestDate2}</p>`
    }




    let London =
    nowLuxon.setZone('UTC+0').toLocaleString(DateTime.DATETIME_FULL);
    eDisplayLuxon.innerHTML += `<p>London date:${London}</p>`;


}


currentDateTime()