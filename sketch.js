let grade = 9;
const START_T = 8;
const END_T = 24;
let dorm = 'male-identifying';
let visitingDorm = 'female-identifying';
let txtFor9th = "Tues-Thurs and S Fridays from 6pm-7:45pm; on N Fridays from 6pm-10pm; on Saturdays from 4pm-6pm and 8-10pm; and on Sundays from 4pm-6pm."

let dormSel, gradeSel;

function setup() {
    createCanvas(windowWidth, windowHeight);
}



function draw() {
    background(220);

    const w = min(600, width * .8);
    const x = width * .1;

    if (isInterdorm()) {
        displayText("YES", x, 130)
    }
    else {
        displayText("NO", x, 130)
    }

    displayToday(x, 260, w, 50);
}

function displayText(txt, x, y) {
    textSize(100);
    noStroke();
    fill(0);
    text(txt, x, y);
}


function displayToday(x, y, w, h) {
    const lineH = 20;
    let t = getTime();
    let weekday = getWeekDay();

    // "Tues-Thurs from 6pm-7:45pm;
    if (weekday >= 2 && weekday <= 4) {
        displayTuesThurs(x, y, w, h);
        drawLine(x, y + h, w, lineH);
    }
    //  S Fridays from 6pm-7:45pm;
    else if (isSWeek() && weekday == 5) {
        displaySFriday(x, y, w, h);
        drawLine(x, y + h, w, lineH);
    }
    // on N Fridays from 6pm-10pm; 
    else if (!isSWeek() && weekday == 5) {
        displayNFriday(x, y, w, h);
        drawLine(x, y + h, w, lineH);
    }

    // on Saturdays from 4pm-6pm and 8-10pm; 
    else if (weekday == 6) {
        displaySaturday(x, y, w, h);
        drawLine(x, y + h, w, lineH);
    }

    // and on Sundays from 4pm-6pm."
    else if (weekday == 0) {
        displaySunday(x, y, w, h);
        drawLine(x, y + h, w, lineH);
    }
    else {
        displayMonday(x, y);
    }

}



// function nextInterDorm9th() {
//     let t = getTime();
//     let weekday = getWeekDay();

//     if (weekday == 1) {
//         return ["tomorrow at 6PM"];
//     }
// }

