var err = "";
function getTime(){
    let time_sec = document.getElementById("time");
    let date = new Date(document.lastModified).toLocaleString({ hour12: true });
    time_sec.innerHTML = "This Page was Last Updated on: " + date;
}
var courseList = [
    { courseCode: "BTP100", courseName: "Programming Fundamentals Using C", courseOutline: "https://ict.senecacollege.ca/course/btp100" },
    { courseCode: "BTI225", courseName: "Web Programming Principles", courseOutline: "https://ict.senecacollege.ca/course/bti225" },
    { courseCode: "BTI325", courseName: "Web Programming Tools and Frameworks", courseOutline: "https://ict.senecacollege.ca/course/bti325" },
    { courseCode: "BTI425", courseName: "Web Programming for Apps and Services", courseOutline: "https://ict.senecacollege.ca/course/bti425" }
];
var tableBuilder = {
    search: function (str) {
        var arr = []
        if (str) {
            let expr = new RegExp(str, "i");
            for (c of courseList) {
                if (expr.test(c.courseCode)) arr.push(c);
            }
            if (arr.length == 0) arr[0] = { courseCode: "N/A", courseName: "N/A", courseOutline: "N/A" }
        }
        else arr = courseList;
        return arr;
    },
    clearTable: function () {
        let tbl = document.getElementById("generate_table");
        let tblBody = tbl.querySelector("table");
        if (tblBody) tbl.removeChild(tblBody);
        return tbl;
    },
    createThead: function () {
        let thead = document.createElement("thead");
        let row = document.createElement("tr");
        let cell = document.createElement("th");
        cell.style.border = "2px solid blue";
        cell.innerHTML = "Course Code";
        row.appendChild(cell);

        cell = document.createElement("th");
        cell.style.border = "2px solid blue";
        cell.innerHTML = "Course Name";
        row.appendChild(cell);

        cell = document.createElement("th");
        cell.style.border = "2px solid blue";
        cell.innerHTML = "Course Outline";
        row.appendChild(cell);

        thead.style.textAlign = "center";
        thead.appendChild(row);
        return thead;
    },
    createRow: function (course) {
        let row = document.createElement("tr");
        let cell = document.createElement("td");
        cell.style.border = "2px solid blue";
        cell.innerHTML = course.courseCode;
        row.appendChild(cell);

        cell = document.createElement("td");
        cell.style.border = "2px solid blue";
        cell.innerHTML = course.courseName;
        row.appendChild(cell);

        cell = document.createElement("td");
        cell.style.border = "2px solid blue";
        cell.innerHTML = course.courseOutline;
        row.appendChild(cell);

        return row;
    },
    createTable: function (courses) {
        let tbl = this.clearTable();
        let maintbl = document.createElement("table");
        let tbody = document.createElement("tbody");
        for (c of courses) {
            tbody.appendChild(this.createRow(c));
        }
        maintbl.style.border = "2px solid blue";
        maintbl.appendChild(this.createThead());
        maintbl.appendChild(tbody);
        tbl.appendChild(maintbl);
    }
};

document.getElementById("search_crs").addEventListener("click", () =>
tableBuilder.createTable(tableBuilder.search(document.getElementById("crs_code").value)));
document.getElementById("clear_search").addEventListener("click", () => tableBuilder.clearTable());

document.getElementById("register").addEventListener("submit", (form) => {
    if(err !== "") {
        form.preventDefault();
        alert("Unable to Submit due to erros in the Form Format");
    }
});


document.getElementById("sname").addEventListener("change", function(){
    err = "";
    const expr = /^[a-zA-Z][a-zA-Z' ]{0,}$/;
    let name = document.getElementById("sname").value;
    let err_sec = document.getElementById("sname_err");
    if(!expr.test(name)) err = "Name can only contain letters (cap, small), apostrophe('), and space( )";
    err_sec.innerHTML = err;
});
document.getElementById("snum").addEventListener("change", function(){
    err = "";
    let num = document.getElementById("snum").value;
    let err_sec = document.getElementById("snum_err");
    if(isNaN(num)) err = "Please enter a number";
    else if(parseInt(num) < 210000 || parseInt(num) > 219999) err = "Enter a number between 210000 & 219999";
    err_sec.innerHTML = err;
});

document.onload = getTime();