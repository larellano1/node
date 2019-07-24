'use strict';

document.body.onload = function(){
     var date = new Date();    
    var root = document.getElementById("root")
    root.innerHTML = date;
    var btn = document.createElement("button");
    btn.innerHTML = "Carregar";
    btn.addEventListener("click", loadDoc);
    root.appendChild(btn);
};

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        writeList(this.responseText);
      }
    };
    xhttp.open("GET", "http://127.0.0.1:8080/", true);
    xhttp.send();
  }

  function writeList(text){
    var root = document.getElementById("root")
    var ol = document.createElement("ol");
    root.appendChild(ol);
    var obj = JSON.parse(text);
   (obj.pessoas).forEach(element => {
        var li = document.createElement("li");
        li.innerHTML = element;
        ol.appendChild(li);    
   });
  }