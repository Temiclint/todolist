var button = document.getElementById("enter");
var inputs = document.getElementById('input-todo');
var ul = document.querySelector("ul");

function inputLength(){
    return inputs.value.length;
}

function createListElement(){
    button2 = document.createElement("button");
    button2.appendChild(document.createTextNode('Delete!'))
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(inputs.value)) 
    ul.appendChild(li);
    li.classList.add("js-list");
    li.appendChild(button2);
    button2.classList.add("btn-list");
    inputs.value="";
    inputs.value.classList.add("text-node")
    button2.addEventListener("click", function(){
        this.parentElement.remove();
    })
 }  

function addListAfterClick(){
   
        if (inputLength() > 0){
       createListElement();
    }  
 
}

function addListAfterKeyPress(event){

        if (inputLength()> 0 && event.keyCode === 13){
       createListElement();
    }  
    }


button.addEventListener("click", addListAfterClick);


inputs.addEventListener("keypress",addListAfterKeyPress);