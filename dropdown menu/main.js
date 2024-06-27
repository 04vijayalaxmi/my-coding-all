const dropdownText=document.getElementsByClassName("dropdownText");
const dropdownItems=document.getElementsByClassName("dropdownItems");



let totalDropdowns=dropdownText.length;
//this will work for each drop down
for(let i=0;i<totalDropdowns;i++){
    const text=dropdownText[i];
    const item=dropdownItems[i];
       
text.addEventListener("click",()=>{
    for(let j=0;j<totalDropdowns;j++){
        if(i===!j){

        
        const element=dropdownItems[j];
        element.classList.remove("active");
        } }
    
    item.classList.toggle("active")
})

}