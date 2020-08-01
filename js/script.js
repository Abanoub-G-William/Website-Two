const sideBoxes = document.querySelectorAll('.side-box');
const sideText = document.querySelectorAll('.side-anim *');
const mainBox = document.querySelectorAll('.main-box');
let scorlling =false;
window.addEventListener('scroll',()=>{
    scorlling = true;
});

setInterval(() => {
    if(scorlling){
            sideBoxes.forEach((box)=>{
                if(window.scrollY > box.offsetParent.offsetTop - ( window.outerHeight / 3)){
                    box.classList.add('side-box-anim');
                }
            })
            sideText.forEach((text)=>{
                if(window.scrollY > text.offsetParent.offsetTop - ( window.outerHeight / 2)){
                    text.classList.add('side-text-anim');
                }
            })
            mainBox.forEach((mBox)=>{
                if(window.scrollY > mBox.offsetTop - ( window.outerHeight / 2)){
                    console.log(mBox.offsetTop)
                    mBox.classList.add('side-box-anim');
                }
            })

        scorlling=false;
    }
}, 250);