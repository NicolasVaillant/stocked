// JS FILE

function hideMenu() {document.getElementById("contextMenu").style.display = "none";}

function rightClickCard(e){
    e.preventDefault();

    const menu = document.getElementById("contextMenu")
    menu.style.display = "none";

    const card = e.target.closest('.card');

    card.classList.add('clickOnCard');
    setTimeout(function (){
        card.classList.remove('clickOnCard');
    }, 100);

    const i_zone_1 = document.querySelector('#i_zone_1');
    const i_zone_2 = document.querySelector('#i_zone_2');
    const i_zone_3 = document.querySelector('#i_zone_3');

    const txt_zone_1 = document.querySelector('.txt_zone_1');
    const txt_zone_2 = document.querySelector('.txt_zone_2');
    const txt_zone_3 = document.querySelector('.txt_zone_3');

    i_zone_1.classList.add('fas');
    i_zone_1.classList.add('fa-palette');

    i_zone_2.classList.add('fas');
    i_zone_2.classList.add('fa-arrow-circle-left');

    i_zone_3.classList.add('fas');
    i_zone_3.classList.add('fa-times');

    txt_zone_1.innerHTML = "Changer la couleur";
    txt_zone_2.innerHTML = "Mettre en retrait";
    txt_zone_3.innerHTML = "Supprimer";


    function zone1(parent){
        const colorNotes = ["--gradient-1","--gradient-2","--gradient-3","--gradient-4","--gradient-5"]

        const index = colorNotes.indexOf(parent.style.background);
        if (index > -1) {
            colorNotes.splice(index, 1);
        }
        parent.style.background = "var(" + colorNotes[Math.floor(Math.random()*colorNotes.length)] + ")!important";
    }
    function zone2(parent,element){
        const overlay = parent.querySelector('.card_overlay');
        if(overlay.classList.contains('show')){
            element.children[1].children[0].innerHTML = "Mettre en avant";
            overlay.classList.remove('show');
        }else{
            overlay.classList.add('show');
            console.log(element.querySelector('.txt_zone_2'))
            element.querySelector('.txt_zone_2').innerText = "Mettre en retrait";
        }
    }

    function zone5(parent){

    }
    function zone5b(parent){

    }

    if (document.getElementById("contextMenu").style.display === "flex")
        hideMenu();
    else{
        menu.style.display = 'flex';
        let out_height = window.innerHeight + window.scrollY - (e.pageY + menu.offsetHeight);

        if(e.pageY + menu.offsetHeight > window.innerHeight + window.scrollY){
            menu.style.top = e.pageY + out_height + "px";
        }else{
            menu.style.top = e.pageY + "px";
        }

        let out_width = window.innerWidth + window.scrollX - (e.pageX + 2*menu.offsetWidth);

        if(e.pageX + 2*menu.offsetWidth > window.innerWidth + window.scrollX){
            menu.style.left = e.pageX + out_width + "px";
        }else{
            menu.style.left = e.pageX + "px";
        }


        menu.children[0].children[0].onclick = function(){zone1(card)};

        menu.children[0].children[1].onclick = function(){zone2(card,this)};

        menu.children[0].children[2].onclick = function(){deleteCard(card)};

        // menu.children[0].children[4].children[2].children[0].children[0].onclick = function(){zone5(parent)};
        // menu.children[0].children[4].children[2].children[0].children[1].onclick = function(){zone5b(parent)};
    }
}






