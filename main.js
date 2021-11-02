
function setData(){
    if(typeof(localStorage) != "undefined"){
        document.getElementById("show").innerHTML = localStorage.name;
    }
}
function myFun(){
    if(typeof(localStorage) != "undefined"){
        localStorage.name = document.getElementById("name").value;
        localStorage.email = document.getElementById("email").value;
    }
    document.getElementById("form").submit();
}
