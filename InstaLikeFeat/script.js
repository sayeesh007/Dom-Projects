const post=document.getElementById("container")
const heart=document.getElementById('icon');

post.addEventListener('dblclick',()=>{
    heart.style.transform="scale(1.5)";
    setTimeout(()=>{
    heart.style.transform="scale(0)";
    },1000)

})