
function isInterdorm() {
    return isInterDormTime();
    // if (grade == 9) {
    //     return isInterDormTime();
    // }
    // else if (dorm == "all gender") {
    //     return false;
    // }
    // else if (dorm == visitingDorm) {
    //     return true;
    // }
    // return isInterDormTime();
}


function isInterDormTime() {
    let t = getTime();
    let weekday = getWeekDay();

    // "Tues-Thurs and S Fridays from 6pm-7:45pm;
    if ((weekday >= 2 && weekday <= 4) || (weekday == 5 && isSWeek())) {
        if (t >= (6 + 12) && t <= (7 + 12 + 45 / 60)) {
            return true;
        }
    }

    // on N Fridays from 6pm-10pm; 
    if (!isSWeek() && weekday == 5 && t > (6 + 12) && t < (10 + 12)) {
        return true;
    }

    // on Saturdays from 4pm-6pm and 8-10pm; 
    if (weekday == 6) {
        if (t > (4 + 12) && t < (6 + 12)) {
            return true;
        }
        if (t > (8 + 12) && t < (10 + 12)) {
            return true;
        }
    }

    // and on Sundays from 4pm-6pm."
    if (weekday == 0) {
        if (t > (4 + 12) && t <= (6 + 12)) {
            return true;
        }
    }

    return false;
}

function displayTimeInfo(x, y) {
    push();
    translate(x, y);

    

    noStroke();
    let sW = isSWeek() ? "S Week" : "N Week";
    fill(150, 0, 0);
    textSize(20);
    text(getWeekDayName(), 0, 0);

    let sp = textWidth(getWeekDayName() + " ");

    fill(0);
    textSize(16);
    text(sW, sp, 0);

    sp += textWidth(sW);

    noFill();
    stroke(100);
    // rect(0, -20, 150, 30);
    line(0, 12, sp, 12);
    pop();
}


function displayDateTime(x, y) {
    textSize(14);
    noStroke();
    fill(0);

    let h = hour();
    let m = minute();
    let isPM = false;
    if (h > 12) {
        h -= 12;
        isPM = true;
    }

    push();
    translate(x, y);
    text(`${getWeekDayName()}, ${h}:${m < 10 ? "0" + m : m} ${isPM ? "PM" : "AM"}`, 0, 0);
    text(`${isSWeek() ? "S Week" : "N Week"}`, 0, 30);
    pop();
}

function getWeekDayName() {
    let weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][getWeekDay()]
    return weekday;
}

function getTime() {
    let t = hour() + minute() / 60;
    t = constrain(t, START_T, END_T);
    return t;

}

function getWeekDay() {
    return new Date().getDay();
}

function isSWeek() {
    const sWeeks = [
        [8, 29, 22],
        [9, 14, 22],
        [10, 17, 22],
        [11, 7, 22],
        [1, 5, 23],
        [1, 16, 23],
        [1, 30, 23],
        [3, 13, 23],
        [3, 27, 23],
        [4, 17, 23],
    ];
    for (const wk of sWeeks) {
        let dStart = new Date(2000 + wk[2], wk[0] - 1, wk[1]);

        let dEnd = new Date(2000 + wk[2], wk[0] - 1, wk[1]);
        dEnd.setDate(dEnd.getDate() + 7);

        let now = new Date();
        if (now.getTime() >= dStart.getTime() && now.getTime() <= dEnd.getTime()) {
            return true;
        }
    }
    return false;
}




