const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const dirIn = 'in';
const dirOut = 'out';
const navItemNum = [1,2,3,4,5];
const navArray = []; 
navItemNum.map(i => navArray.push(document.getElementById(`nav${i}`)));

function sliding (dir1, dir2){
    overlay.classList.remove (`overlay-slide-${dir2}`);
    overlay.classList.add (`overlay-slide-${dir1}`)
    navArray.forEach(element => {
        // console.log(navArray.indexOf(element));
        element.classList.remove(`slide-${dir2}-${navArray.indexOf(element)+1}`);
        console.log(element.classList);
        element.classList.add(`slide-${dir1}-${navArray.indexOf(element)+1}`);
        console.log(element.classList);
    });
}

function toggleNav(){
    // Toggle: Menu bars open/closed
    menuBars.classList.toggle('change');
    //  Toggle: Menu active
    overlay.classList.toggle('overlay-active');
    console.log(overlay.classList);
    (overlay.classList.contains('overlay-active'))? sliding(dirIn, dirOut) : sliding(dirOut, dirIn);
}

//  Event listeners
menuBars.addEventListener('click', toggleNav);
navArray.forEach(element => element.addEventListener('click', toggleNav));
