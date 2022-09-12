


function itemUpdate(){
    let result = document.getElementById("result")
    let item = document.getElementsByTagName("li");
    let total = item.length;
    result.innerHTML =`You have ${total} left to do`
}