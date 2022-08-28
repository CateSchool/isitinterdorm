let grade = 11;
const START_T = 8;
const END_T = 24;
let dorm = 'female-identifying';
let visitingDorm = 'male-identifying';
let txtFor9th = "Tues-Thurs and S Fridays from 6pm-7:45pm; on N Fridays from 6pm-10pm; on Saturdays from 4pm-6pm and 8-10pm; and on Sundays from 4pm-6pm."

let dormSel, gradeSel;

function setup() {
    createCanvas(windowWidth, windowHeight);
    setWeek();
    setDormMayVisit();
}



function draw() {
    background(220);

    const w = min(600, width * .8);
    const x = (width - w) / 2;
    let y = 130;
    let tw = 0;

    if (mayVisit) {
        displayText("YES", x, y, color('green'))
        tw = textWidth("YES");
    }
    else {
        displayText("NO", x, y, color('red'))
        tw = textWidth("NO");
    }

    displayExplanation(x, y+20, 0);
   

    if (isInterdormChartOn) {
        displayLegend(x+w-120, y-60);
        // displayTimeInfo(x, 220);
        displayToday(x, 250, w, 50);
    }
   
}

function displayExplanation(x, y, tw) {
    textSize(12);
    noStroke();
    fill(0);
    let wtext = (width - tw - 2*x);
    // let xx = x + tw + 30, y-10;
    text(detailsTxt, x, y, 200, 100);
}

function displayLegend(x, y) {
    let sz = 20;
    push();
    translate(x, y);
    noStroke();
    fill('blue');
    rect(0, 0, sz);
    fill(0);
    text("academic day", sz+5, 14);

    translate(0, sz+10);
    fill('green');
    rect(0, 0, sz);
    fill(0);
    text("interdorm", sz+5, 14);

    pop();
}

function displayLine(x, y, w) {
    push();
    translate(x, y);
    stroke(0);
    strokeWeight(1);
    line(0, 0, w, 0);
    pop();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function displayText(txt, x, y, col) {
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


function hideConsent() {
    document.getElementById("consent").classList.add('hideConsent');
}