


var initialsInput = document.getElementById("initials-form");
var list = document.getElementById("initials-list");

 
$("#button-addon1").on("click", function(event) {
   
    event.preventDefault();
    var initials = $("#initials-form").val();
    var listItem = document.createElement("li");
    listItem.textContent = initials;
    list.appendChild(listItem);
    $("#initials-form").val("");
    
    
    var initialsArray = JSON.parse(localStorage.getItem("initials"));
    initialsArray.push(initials);
    localStorage.setItem("initials", JSON.stringify(initialsArray));
});