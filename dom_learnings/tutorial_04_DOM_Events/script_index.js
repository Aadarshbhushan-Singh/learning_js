var changeProperty=document.querySelector(".changeProperty");
changeProperty.addEventListener("mouseleave", function(){
    document.querySelector(".heading").style.backgroundColor="cyan";
});
//For adding elements in the list

var input=document.querySelector(".listInput");
var button=document.querySelector(".inputButton");
var ul=document.querySelector("ul");

button.addEventListener("click", function(){
    var li=document.createElement("li");
    li.appendChild(document.createTextNode("Added"));
    var li2=document.createElement("li");
    li2.append(document.createTextNode(input.value));
    ul.appendChild(li);
    ul.appendChild(li2);
});