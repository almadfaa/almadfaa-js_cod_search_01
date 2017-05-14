let message="";
let student;
let search;
let report="";

function print(message){
    const section = document.getElementById("section")
    section.innerHTML = message;
};

function getStudentsReport(student){
    report +=  "<h2> Name: " + student.name + "</h2>"
    report += "<p> track: " + student.track + "</p>"
    report += "<p> Achievements: " + student.achievements + "</p>"
    report += "<p> points: " + student.points + "</p>"
    return report;
};

do{
    search = prompt("inter an Student Name for acses them or quet ")
    if(search != null){
        search = search.toLowerCase()
    }    
    
    for (let i = 0 ; i < students.length ; i++){
        student = students[i];
        if(search === student.name){
            report = getStudentsReport(student);
            print(report)
        };
    }
    if (report === ""){
        print("<h3> sorry: thes Name (" + search + ") is not in the list" )
        break
    }
    
    if (search === null ||  search === "quet"){
        break
    }

}
while (report === "")




