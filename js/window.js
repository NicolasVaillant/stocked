// JS FILE

window.onload = () => {
    const localStorageStocked = JSON.parse(localStorage.getItem("stocked"));
    allMoney.value = localStorageStocked.v;
    for(let i = 0 ; i < localStorageStocked.e.length ; i++){
        AR_card(localStorageStocked.e[i]);
    }

    resultAll.innerText = localStorageStocked.v;
}

const menu = document.getElementById("contextMenu");

window.oncontextmenu =  (e) => {e.preventDefault()}

window.onclick = () => {menu.style.display = "none"}

window.onscroll = () => {
    if (menu.style.display === "flex"){
        let out_height = window.innerHeight + window.scrollY - (menu.offsetTop + menu.offsetHeight);

        if(menu.offsetTop + menu.offsetHeight > window.innerHeight + window.scrollY){
            menu.style.top = menu.offsetTop + out_height + "px";
        }else{
            menu.style.top = menu.offsetTop + "px";
        }

        let out_width = window.innerWidth + window.scrollX - (menu.offsetLeft + menu.offsetWidth);

        if(menu.offsetLeft + menu.offsetWidth > window.innerWidth + window.scrollX){
            menu.style.left = menu.offsetLeft + out_width + "px";
        }else{
            menu.style.left = menu.offsetLeft + "px";
        }
    }
}