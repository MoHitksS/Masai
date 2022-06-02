// write code here, dont change anything in HTML and css files 
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column 
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks

document.querySelector("form").addEventListener("submit", sub);

function sub(event){
    event.preventDefault();
    let avatar = document.querySelector("#image").value;
    let name = document.querySelector("#name").value;
    let batch = document.querySelector("#batch").value;
    let dsa = document.querySelector("#dsa").value;
    let skillathon = document.querySelector("#cs").value;
    let coding = document.querySelector("#coding").value;

    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    let img = document.createElement("img");
    img.setAttribute("src", "https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652__340.png");
    td1.append(img);

    let td2 = document.createElement("td");
    td2.innerText = name;

    let td3 = document.createElement("td");
    td3.innerText = batch;

    let td4 = document.createElement("td");
    td4.innerText = dsa;

    let td5 = document.createElement("td");
    td5.innerText = skillathon;

    let td6 = document.createElement("td");
    td6.innerText = coding;

    let obtainedMarks = Number(dsa)+Number(skillathon)+Number(coding);
    let percentage = (obtainedMarks/30)*100
    let td7 = document.createElement("td");
    td7.innerText = percentage.toFixed(2);

    let td8 = document.createElement("td");
    if(percentage > 50){
        td8.innerText = "Regular";
        td8.style.backgroundColor = "green";
    }
    else{
        td8.innerText = "Async";
        td8.style.backgroundColor = "red";
    }

    let td9 = document.createElement("td");
    td9.innerText = "Delete";
    td9.style.backgroundColor = "red";

    td9.addEventListener("click",remove);
    function remove(){
        tr.parentNode.removeChild(tr)
    }

    tr.append(td1,td2,td3,td4,td5,td6,td7,td8,td9);  
    document.querySelector("tbody").append(tr);
}