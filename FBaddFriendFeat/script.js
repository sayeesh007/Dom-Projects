const friendStatus= document.querySelector(".status")
const add=document.querySelector(".add")
let flag=-1;

add.addEventListener('click',function(){
    if(flag==-1){
        friendStatus.innerHTML="Feiends";
        friendStatus.style.color="green";
        add.innerHTML="Remove Friend";
        add.style.backgroundColor="white";
        add.style.color="red";
        add.style.border="2px solid  rgba(225, 10, 10, 0.971)";
        add.style.boxShadow="0 0 10px 0 rgba(225, 10, 10, 0.971)";
        flag=0;
    }else{
        friendStatus.innerHTML="Stranger";
        friendStatus.style.color="red";
        add.innerHTML="Add Friend";
        add.style.backgroundColor="rgb(74, 74, 240)";
        add.style.color="white";
        add.style.border="2px solid rgb(74, 74, 240)";
        add.style.boxShadow="0 0 10px 3px rgb(74, 74, 240)";
        flag=-1;
    }
})