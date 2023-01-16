
// function increment(){
//     console.log("the button is clicked");
// }
let saveEl=document.getElementById("saveEl");
let countEl= document.getElementById("countEl");
let count=0;
function inc(){
    count+=1;
    countEl.textContent=count;
}
function save(){
    let countstr=count+" - ";
    saveEl.textContent+=countstr;
    countEl.textContent=0;
    count=0;

}



