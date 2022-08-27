
function gradeSelect() {
    // gradeSel = createSelect();
    // gradeSel.position(x, y);
    // gradeSel.option('9th');
    // gradeSel.option('10th');
    // gradeSel.option('11th');
    // gradeSel.selected('12th');
    // gradeSel.changed(gradeSelected);
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



function dormSelect() {
    // dormSel = createSelect();
    // dormSel.position(x, y);
    // dormSel.option('male-identifying');
    // dormSel.option('female-identifying');
    // dormSel.option('all gender');
    // dormSel.changed(dormSelected);
    var e = document.getElementById("dorm");
    var value = e.value;
    var txt = e.options[e.selectedIndex].text;
    dorm = txt;
    // console.log(value, txt);
    // console.log("dorm", dorm);

    setDormMayVisit();
}

function dormVisSelect() {
    // dormVisSel = createSelect();
    // dormVisSel.position(x, y);
    // dormVisSel.option('male-identifying');
    // dormVisSel.option('female-identifying');
    // dormVisSel.option('all gender');
    // dormVisSel.changed(dormVisSelected);
    var e = document.getElementById("dormVis");
    var txt = e.options[e.selectedIndex].text;
    visitingDorm = txt;
    // console.log("visiting dorm", visitingDorm);
}

// function dormVisSelected() {
//     visitingDorm = dormVisSel.value();
// }

// function dormSelected() {
//     dorm = dormSel.value();
// }

function setDormMayVisit() {
    let txt = '';
    if (grade == 9) {
        txt = "other dorms based upon interdorm times below:";
    }
    else if (dorm == "all gender") {
        txt = "no other dorm visitation at this time"
    }
    else if (dorm == "male-identifying") {
        txt = "male-identifying dorms outside of academic day; female-indentifying & all-gender dorms only based on interdorm hours below:"
    }
    else if (dorm == "female-identifying") {
        txt = "female-identifying dorms outside of academic day; male-indentifying & all-gender dorms only based on interdorm hours below:"
    }
    document.getElementById("dormsToVisit").innerHTML = txt;
}