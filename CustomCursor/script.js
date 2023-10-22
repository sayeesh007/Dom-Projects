const mainbody=document.getElementById('mainbody');
const cursor=document.querySelector(".cursor");

mainbody.addEventListener("mousemove",(dets)=>{
    cursor.style.left=dets.x+"px";
    cursor.style.top=dets.y+"px";
})