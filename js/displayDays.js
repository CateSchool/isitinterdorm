

// "Tues-Thurs from 6pm-7:45pm;
function displayTuesThurs(x, y, w, h) {
    displaySFriday(x, y, w, h);
}

function getAcademicEndT() {
    if (isSWeek() && getWeekDay() == SAT)
        return 12.5;
    return 12 + 3;
}

function getAcademicEndH() {
    if (isSWeek() && getWeekDay() == SAT)
        return "12:30PM";
    return "3PM"
}

//  S Fridays from 6pm-7:45pm;
function displaySFriday(x, y, w, h) {
    let dayHours = END_T - START_T;
    push();
    translate(x, y);

    let endi = 7 + 12 + 45 / 60;
    let w0 = ((getAcademicEndT() - START_T) / dayHours) * w;
    let w1 = (((6 + 12) - getAcademicEndT()) / dayHours) * w;
    let wInter = ((endi - (6 + 12)) / dayHours) * w;
    let wAfter = ((END_T - endi) / dayHours) * w;

    let xp = 0;
    displayBox(xp, 0, w0, h, "8AM", "", color('blue'))
    xp += w0;
    displayBox(xp, 0, w1, h, getAcademicEndH(), "", color(255))
    xp += w1;
    displayBox(xp, 0, wInter, h, "6PM", "7:45PM", color('green'))
    xp += wInter;
    displayBox(xp, 0, wAfter, h, "", "12AM", color(255))

    pop();
}

// on N Fridays from 6pm-10pm; 
function displayNFriday(x, y, w, h) {
    let dayHours = END_T - START_T;
    push();
    translate(x, y);

    let w0 = ((getAcademicEndT() - START_T) / dayHours) * w;
    let w1 = (((6 + 12) - getAcademicEndT()) / dayHours) * w;
    let wInter = (4 / dayHours) * w;
    let wAfter = ((END_T - (10 + 12)) / dayHours) * w;

    let xp = 0;
    displayBox(xp, 0, w0, h, "8AM", "", color('blue'))
    xp += w0;
    displayBox(xp, 0, w1, h, getAcademicEndH(), "", color(255))
    xp += w1;
    displayBox(xp, 0, wInter, h, "6PM", "10PM", color('green'))
    xp += wInter;
    displayBox(xp, 0, wAfter, h, "", "12AM", color(255))


    pop();
}

// on Saturdays from 4pm-6pm and 8-10pm; 
function displaySaturday(x, y, w, h) {
    if (isSWeek()) {
        return displaySSaturday(x, y, w, h);
    }
    return displayNSaturday(x, y, w, h);
}

function displayNSaturday(x, y, w, h) {
    let dayHours = END_T - START_T;
    push();
    translate(x, y);

    // 8-4
    let w1 = (((4 + 12) - START_T) / dayHours) * w;
    // 4-6, 6-8, 8-10
    let w2 = (2 / dayHours) * w;
    let wAfter = ((END_T - (10 + 12)) / dayHours) * w;

    displayBox(0, 0, w1, h, "8AM", "", color(255))
    displayBox(w1, 0, w2, h, "4PM", "6PM", color('green'))
    displayBox(w1 + w2, 0, w2, h, "", "8PM", color(255))
    displayBox(w1 + w2 * 2, 0, w2, h, "", "10PM", color('green'))
    displayBox(w1 + w2 * 3, 0, wAfter, h, "", "12AM", color(255))

    pop();
}

function displaySSaturday(x, y, w, h) {
    let dayHours = END_T - START_T;
    push();
    translate(x, y);

    let w0 = ((getAcademicEndT() - START_T) / dayHours) * w;
    // 8-4
    let w1 = (((4 + 12) - getAcademicEndT()) / dayHours) * w;
    // 4-6, 6-8, 8-10
    let w2 = (2 / dayHours) * w;
    let wAfter = ((END_T - (10 + 12)) / dayHours) * w;

    let xp = 0;
    displayBox(0, 0, w0, h, "8AM", "", color('blue'));
    xp += w0;
    displayBox(xp, 0, w1, h, getAcademicEndH(), "", color(255))
    xp += w1;
    displayBox(xp, 0, w2, h, "4PM", "6PM", color('green'))
    xp += w2;
    displayBox(xp, 0, w2, h, "", "8PM", color(255))
    xp += w2;
    displayBox(xp, 0, w2, h, "", "10PM", color('green'))
    xp += w2;
    displayBox(xp, 0, wAfter, h, "", "12AM", color(255))

    pop();
}

// and on Sundays from 4pm-6pm."
function displaySunday(x, y, w, h) {
    let dayHours = END_T - START_T;
    push();
    translate(x, y);

    let w1 = (((4 + 12) - START_T) / dayHours) * w;
    let wInter = (2 / dayHours) * w;
    let wAfter = ((END_T - (6 + 12)) / dayHours) * w;

    displayBox(0, 0, w1, h, "8AM", "", color(255))
    displayBox(w1, 0, wInter, h, "4PM", "6PM", color('green'))
    displayBox(w1 + wInter, 0, wAfter, h, "", "12AM", color(255))

    pop();
}

function displayBox(x, y, w, h, start, end, col) {
    strokeWeight(1);
    fill(col);
    stroke(0);
    rect(x, y, w, h);

    fill(100);
    noStroke();
    textSize(12);
    text(start, x - textWidth(start) / 2, -10);
    text(end, x + w - textWidth(end) / 2, -10);
}

function drawLine(x, y, w, h) {
    push();
    translate(x, y);
    stroke(0);
    // strokeWeight(2);
    const dx = map(getTime(), START_T, END_T, 0, w);
    line(dx, 0, dx, h);

    translate(dx, h + 20);
    displayLineTime();

    // strokeWeight(1);
    pop();
}

function displayLineTime() {
    let h = hour();
    let m = minute();
    if (currentTime !== "now") {
        h = +currentTime;
        m = 0;
    }
    let isPM = false;
    if (h >= 12) {
        isPM = true;
    }
    if (h > 12) {
        h -= 12;
    }

    let timeSt = h + ":" + (m < 10 ? "0" + m : m) + " " + (isPM ? "PM" : "AM");

    noStroke();
    fill(0);
    textSize(18);

    let dx = map(getTime(), START_T, END_T, 0, -textWidth(timeSt));
    text(timeSt, dx, 0);
}

function displayMonday(x, y) {
    push();
    translate(x, y);
    fill(0);
    noStroke();
    textSize(18);
    text("No interdorm on Mondays... sorry!", 0, 0);
    pop();
}