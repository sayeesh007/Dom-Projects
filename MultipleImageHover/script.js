const elem=document.querySelectorAll('.elem')

elem.forEach((val) => {
    console.log(val.childNodes)
    val.addEventListener('mouseenter',(dets)=>{
        val.addEventListener('mousemove',(det)=>{
            val.childNodes[3].style.left=det.x+'px';
            console.log(dets.x);
        })
    // val.childNodes[3].style.top=dets.y+'px';
    val.childNodes[3].style.opacity="1";

})
    val.addEventListener('mouseleave',(dets)=>val.childNodes[3].style.opacity="0") 
});