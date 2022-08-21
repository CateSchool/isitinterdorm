// "Tues-Thurs from 6pm-7:45pm;
function displayTuesThurs(x, y, w, h) {
    displaySFriday(x, y, w, h);
}

//  S Fridays from 6pm-7:45pm;
function displaySFriday(x, y, w, h) {
    let dayHours = END_T-START_T;
    push();
    translate(x, y);

    let endi = 7+12 + 45/60;
    let w1 = (((6+12) - START_T)/dayHours) * w;
    let wInter = ((endi-(6+12))/dayHours) * w;
    let wAfter = ((END_T - endi)/dayHours) * w;
  
    displayBox(0, 0, w1, h, "8AM", "", color(255))
    displayBox(w1, 0, wInter, h, "6PM", "7:45PM", color('green'))
    displayBox(w1+wInter, 0, wAfter, h, "", "12PM", color(255))
    
    pop();
}

// on N Fridays from 6pm-10pm; 
function displayNFriday(x, y, w, h) {
    let dayHours = END_T-START_T;
    push();
    translate(x, y);

    let w1 = (((6+12) - START_T)/dayHours) * w;
    let wInter = (4/dayHours) * w;
    let wAfter = ((END_T - (10+12))/dayHours) * w;
  
    displayBox(0, 0, w1, h, "8AM", "", color(255))
    displayBox(w1, 0, wInter, h, "6PM", "10PM", color('green'))
    displayBox(w1+wInter, 0, wAfter, h, "", "12PM", color(255))
    

    pop();
}

// on Saturdays from 4pm-6pm and 8-10pm; 
function displaySaturday(x, y, w, h) {
    let dayHours = END_T-START_T;
    push();
    translate(x, y);

    // 8-4
    let w1 = (((4+12) - START_T)/dayHours) * w;
    // 4-6, 6-8, 8-10
    let w2 = (2/dayHours) * w;
    let wAfter = ((END_T - (10+12))/dayHours) * w;
  
    displayBox(0, 0, w1, h, "8AM", "", color(255))
    displayBox(w1, 0, w2, h, "4PM", "6PM", color('green'))
    displayBox(w1+w2, 0, w2, h, "", "8PM", color(255))
    displayBox(w1+w2*2, 0, w2, h, "", "10PM", color('green'))
    displayBox(w1+w2*3, 0, wAfter, h, "", "12PM", color(255))
    
    pop();
}

// and on Sundays from 4pm-6pm."
function displaySunday(x, y, w, h) {
    let dayHours = END_T-START_T;
    push();
    translate(x, y);

    let w1 = (((4+12) - START_T)/dayHours) * w;
    let wInter = (2/dayHours) * w;
    let wAfter = ((END_T - (6+12))/dayHours) * w;
  
    displayBox(0, 0, w1, h, "8AM", "", color(255))
    displayBox(w1, 0, wInter, h, "4PM", "6PM", color('green'))
    displayBox(w1+wInter, 0, wAfter, h, "", "12PM", color(255))
    
    pop();
}

function displayBox(x, y, w, h, start, end, col) {
    strokeWeight(1);
    fill(col);
    stroke(0);
    rect(x, y, w, h);

    fill(0);
    noStroke();
    textSize(12);
    text(start, x-textWidth(start)/2, -10);
    text(end, x+w-textWidth(end)/2, -10);
}

function drawLine(x, y, w, h) {
    push();
    translate(x, y);
    stroke(0);
    // strokeWeight(2);
    const dx = map(getTime(), START_T, END_T, 0, w);
    line(dx, 0, dx, h);

    translate(dx, h+20);
    displayLineTime();

    // strokeWeight(1);
    pop();
}

function displayLineTime() {
    let h = hour();
    let m = minute();
    let isPM = false;
    if (h >= 12) {
        isPM = true;
    }
    if (h > 12) {
        h -= 12;
    }

    noStroke();
    fill(0);
    textSize(18);
    text(h + ":" + (m<10? "0"+m:m) + " " + (isPM?"PM":"AM"), 0, 0);

    fill(150, 0, 0);
    textSize(14);
    text(getWeekDayName(), 0, 20);

    fill(0);
    text(isSWeek()?"S Week": "N Week", 0, 40);
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