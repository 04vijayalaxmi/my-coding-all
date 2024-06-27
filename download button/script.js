const downloadBtn=document.querySelector(".download-btn");
const filelink="file:///D:/download%20button/index2.html";
//google drive link
const initTimer= () =>{
    if(downloadBtn.classList.contains("disable-timer")){
   return(location.href=filelink);

    }
    let timer=downloadBtn.dataset.timer;
    //console.log(timer);
    downloadBtn.classList.add("timer");

    downloadBtn.innerHTML='Your File will Download in<b> ${timer} </b> seconds';
//set timer with initcounter variable
const initCounter = setInterval(() => {
    
    if(timer<0){
        timer--;
        return (downloadBtn.innerHTML='Your File will Download in<b> ${timer}</b> seconds');
        
    }
    clearInterval(initCounter);
    location.href=filelink;
    downloadBtn.textContent="Your File Is Downloading.......";
    setTimeout(() => {
        downloadBtn.classList.replace("timer","disable-timer");
        downloadBtn.innerHTML=`<i class="icon fa-solid fa-circle-down"></i>
        <span class="text">Download Again</span>`;
    });
}, 1000);

}
downloadBtn.addEventListener("click",initTimer);
