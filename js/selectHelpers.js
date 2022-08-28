let mayVisit = false;
let isInterdormChartOn = false;
let detailsTxt= '';
let currentTime = 'now';
let currentDay = "today";
let currentWeek = isNowSWeek()?"S Week":"N Week";

function setWeek() {
    if (isNowSWeek()) {
        document.getElementById("weekSel").value = "S Week";
    }
    else {
        document.getElementById("weekSel").value = "N Week";
    }
}

function gradeSelect() {
    var e = document.getElementById("grade");
    var value = e.value;
    grade = +value;
    // console.log("grade", value);
    setDormMayVisit();

    // TODO
    if (grade == 9) {
        if (dorm == "all gender") {
            document.getElementById("dorm").value = "female-identifying";
            dorm = "female-identifying";
        }
        document.getElementById("dormAllGender").setAttribute("disabled", "disabled");
    }
    else {
        document.getElementById("dormAllGender").removeAttribute("disabled");
    }
}

function gradeSelected() {
    let item = gradeSel.value();
    switch (item) {
        case '9th':
            grade = 9;
            break;
        case '10th':
            grade = 10;
            break;
        case '11th':
            grade = 11;
            break;
        case '12th':
            grade = 12;
            break;
        default:
            break;
    }
}

function timeSelect() {
    var e = document.getElementById("timeSel");
    var value = e.value;
    var txt = e.options[e.selectedIndex].text;
    currentTime = value;
    
    setDormMayVisit();
}

function daySelect() {
    var e = document.getElementById("daySel");
    var value = e.value;
    var txt = e.options[e.selectedIndex].text;
    currentDay = value;
    setDormMayVisit();
}

function weekSelect() {
    var e = document.getElementById("weekSel");
    var value = e.value;
    var txt = e.options[e.selectedIndex].text;
    currentWeek = value;
    
    setDormMayVisit();
}


function dormSelect() {
    var e = document.getElementById("dorm");
    var value = e.value;
    var txt = e.options[e.selectedIndex].text;
    dorm = txt;
    // console.log(value, txt);
    // console.log("dorm", dorm);
    setDormMayVisit();
}

function dormVisSelect() {
    var e = document.getElementById("visDorm");
    var txt = e.options[e.selectedIndex].text;
    visitingDorm = txt;
    setDormMayVisit();
}

function setDormMayVisit() {
   detailsTxt = '';
    if (dorm == "all gender") {
        isInterdormChartOn = false;
        if (grade > 10) {
            detailsTxt = "can visit male and female-identifying dorms";
            mayVisit = true;
        }
        else {
            if (isAcademicDay()) {
                isInterdormChartOn = true;
                mayVisit = false;
                detailsTxt = "can visit male and female-identifying dorms AFTER academic day";
            }
            else {
                detailsTxt = "can visit male and female-identifying dorms";
                mayVisit = true;
            }
        }
    } 
    else if (dorm == visitingDorm) {
        isInterdormChartOn = false;
        if (grade > 10) {
            detailsTxt = `can visit ${dorm} dorms`;
            mayVisit = true;
        }
        else {
            if (isAcademicDay()) {
                isInterdormChartOn = true;
                mayVisit = false;
                detailsTxt = `can visit ${dorm} dorms AFTER academic day`;
            }
            else {
                detailsTxt = `can visit ${dorm} dorms`;
                mayVisit = true;
            }
        }
    }
    else {
        isInterdormChartOn = true;
        if (isInterDormTime()) {
            mayVisit = true;
            detailsTxt = `interdorm is happening now`
        }
        else {
            mayVisit = false;
            detailsTxt = `must wait for interdorm`
        }
    }
    // document.getElementById("explanation").innerHTML = detailsTxt;

}