const passwordInput=document.querySelector("pass-field input");
const eyeIcon=document.querySelector("pass-field i");
const requirements=[
    {regex: /.{8,}/, index:0},
    {regex:/.[0-9]/, index:1},
    {regex:/.[a-z]/, index:2},
    {regex:/.[^A-Za-z09]/, index:3},
    {regex:/.[A-Z]/, index:4}    
]

passwordInput.addEventListener("keyup", () =>{
requirements.forEach(item=>{
    const isvalid
}
});

eyeIcon.addEventListener("click",() =>{
 passwordInput.type= passwordInput.type==="password"?"text":"password"
});