function myfunction(){
    if(navigator.onLine){
        document.querySelector('span').innerHTML="You're inline Nom";

    }
    else{
        document.querySelector('span').innerHTML="YOU're Offline Now";
        
    }

}

