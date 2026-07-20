function openform() {
    document.getElementById("hiddenform").style.display = "block";

}
function closeform() {
    document.getElementById("hiddenform").style.display = "none";


}

function addtolist() {
    document.getElementById("hiddenform").style.display = "none";

    let name = document.getElementById("membername").value;
    let task = document.getElementById("taskdescription").value;
    let date = document.getElementById("date").value;
    let priority = document.querySelector("#priority").value;


    let data = JSON.parse(localStorage.getItem("items"));

    if (data === null) {
        data = [];
    }

    data.push({
        name: name,
        task: task,
        date: date,
        priority: priority,


    })
    
    localStorage.setItem("items", JSON.stringify(data));

    let tbody = document.getElementById("tbody");

    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }


    data.forEach((item) => {

        let row = document.createElement("tr");



        let r1 = document.createElement("td");
        let r2 = document.createElement("td");
        let r3 = document.createElement("td");
        let r4 = document.createElement("td");

        r1.innerHTML = item.name,
        r2.innerHTML = item.task;
        r3.innerHTML = item.priority;
        r4.innerHTML = item.date;

        row.appendChild(r1);
        row.appendChild(r2);
        row.appendChild(r3);
        row.appendChild(r4);

        tbody.appendChild(row);

    })




}
