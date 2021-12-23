//JS FILE

const addStock = document.querySelector('.addStock');
const scrollableContent = document.querySelector('.scrollableContent');

const aside = document.getElementsByTagName("ASIDE");
const main = document.getElementsByTagName("MAIN");
const closeAsideButton = document.querySelector('.closeAsideButton');

const contentAsideTitle = document.querySelector('.contentAsideTitle');
const contentAsideAmount = document.querySelector('.contentAsideAmount');
const contentAsideDeadLine = document.querySelector('.contentAsideDeadLine');
const colorPickerAll = document.querySelector('.colorPickerAll');
const emojiPickerAll = document.querySelector('.emojiPickerAll');
const allMoney = document.querySelector('#allMoney');
const calc = document.querySelector('.calc');
const inputStock = document.querySelector('.inputStock');
const allMoneyDiv = document.querySelector('.allMoney');
const card_add_plus_tooltip = document.querySelector('.card_add_plus_tooltip');
const errorInput_txt = document.querySelector('.errorInput_txt');

addStock.addEventListener('click', function (){
    aside[0].classList.add('showCreateTask');
    main[0].classList.add('showCreateTask_blur');

    calc.innerHTML = allMoney.value;
    allMoneyDiv.innerHTML = allMoney.value;

    this.classList.add('selected');
    setTimeout(function (){
        addStock.classList.remove('selected');
    }, 100);
},false);

closeAsideButton.addEventListener('click', function (){
    aside[0].classList.remove('showCreateTask');
    main[0].classList.remove('showCreateTask_blur');

    contentAsideAmount.classList.remove("errorInput");
    contentAsideTitle.classList.remove("errorInput");
    errorInput_txt.classList.remove("showElem");

    this.classList.add('selected');
    setTimeout(function (){
        closeAsideButton.classList.remove('selected');
    }, 100);
},false);

contentAsideAmount.addEventListener('keyup', function (){
    calc.innerHTML = (allMoney.value - contentAsideAmount.value).toString();
    // console.log(parseInt(allMoney.value) - parseInt(contentAsideAmount.value))
},false);

let arr_amount = [];
let arr_amount_calc = [];

window.oncontextmenu = function (e){e.preventDefault()}

function print(input, span){

    const card = input.closest('.card');
    const allCards = document.querySelectorAll('.card');

    for(let i = 0 ; i < allCards.length ; i++){
        if(allCards[i].children[0].children[0].children[0].checked){
            // arr_amount.push(Number(allCards[i].children[0].children[2].innerHTML.split(" €")[0]));
            // console.log(allMoney.value)
            // console.log(arr_amount)
        }else{

        }
    }

    if(input.checked){
        card.classList.add('clickOnCard');
        setTimeout(function (){
            card.classList.remove('clickOnCard');
        }, 100);

        arr_amount.push(Number(card.children[0].children[2].innerHTML.split(" €")[0]));

        console.log(arr_amount)

        for(let i = 0 ; i < arr_amount.length ; i++){
            arr_amount_calc.push(Number(allMoney.value) - Number(arr_amount[i]));
            console.log(Number(arr_amount_calc[i]))
            // console.log(Number(arr_amount_calc[i+1]) - Number(arr_amount_calc[i]))
        }

        console.log(arr_amount_calc)

        // console.log(arr_amount);
    }else{
        card.classList.remove('clickOnCard');
        arr_amount = [];
        // console.log(arr_amount)
    }
}

let increment = 0;

function card_add_plus_f(element, max, step, text){

    //max = value input
    //step = 5

    element.parentElement.children[1].classList.toggle('card_add_plus_tooltip_show')

    const card_progress = element.closest('.card_modif').children[0];
    const card_progress_bar = element.closest('.card_modif').children[0].children[0];

    let initial;

    if(card_progress_bar.offsetWidth === 0){
        initial = 0;
    }else{
        initial = Math.round( (card_progress_bar.offsetWidth / card_progress.offsetWidth) * 100);
        console.log(initial)
    }

    increment += Number(step.value);

    let width = initial;

    // console.log((Math.round(max*(width/100))).toString())

    if(width >= 100){
        card_progress_bar.style.width = "100%";
        initial = 100;
        text.innerHTML = initial + "%";
    }else{
        card_progress_bar.style.width = increment + "%";
        text.innerHTML = initial+5 + "%";
    }


}


function createStockButton(){

    let contentAsideTitle_text = contentAsideTitle.value;
    let contentAsideAmount_text = contentAsideAmount.value;
    let contentAsideDeadLine_text = contentAsideDeadLine.value;

    let colorSelected, emojiSelected;

    for (let i = 0; i < colorPickerAll.childElementCount; i++) {
        if (colorPickerAll.children[i].children[0].checked) {
            colorSelected = colorPickerAll.children[i].children[0].id;
        }
    }
    for (let i = 0; i < emojiPickerAll.childElementCount; i++) {
        if (emojiPickerAll.children[i].children[0].checked) {
            emojiSelected = emojiPickerAll.children[i].children[0].id;
        }
    }

    const card = document.createElement('div');
    const card_title = document.createElement('p');
    const card_amount = document.createElement('p');
    const card_emoji = document.createElement('img');
    const card_header = document.createElement('div');
    const card_textarea = document.createElement('textarea');

    const card_add = document.createElement('div');
    const card_add_plus = document.createElement('div');
    const card_add_plus_tooltip = document.createElement('div');
    const card_add_plus_tooltip_input = document.createElement('input');
    const card_modif = document.createElement('div');
    const card_progress = document.createElement('div');
    const card_progress_bar = document.createElement('div');
    const card_progress_bar_txt = document.createElement('p');

    const card_add_plus_i = document.createElement('i');

    card_add_plus_tooltip_input.type = "number";
    card_add_plus_tooltip_input.value = "5";

    card_add_plus_tooltip_input.classList.add('card_add_plus_tooltip_input');
    card_amount.classList.add('card_amount');
    card_textarea.classList.add('card_textarea');

    card_header.classList.add('flexRow');
    card_header.classList.add('flexAlignL');
    card_header.classList.add('fontFamily');
    card_header.classList.add('card_header');

    card_emoji.classList.add('card_emoji');
    card_emoji.src = "ressources/emoji/" + emojiSelected + ".png";

    card_add_plus_i.classList.add('fas');
    card_add_plus_i.classList.add('fa-plus');

    card_add.classList.add('card_add');
    card_add.classList.add('flexRow');
    card_add.classList.add('flexAlign');

    card_add_plus.classList.add('card_add_change');
    card_add_plus_tooltip.classList.add('card_add_plus_tooltip');
    card_add_plus.classList.add('flexRow');
    card_add_plus.classList.add('flexAlign');

    card_modif.classList.add('card_modif');
    card_modif.classList.add('flexRow');
    card_modif.classList.add('flexAlign');
    card_progress.classList.add('card_progress');
    card_progress_bar.classList.add('card_progress_bar');
    card_progress_bar_txt.classList.add('card_progress_bar_txt');

    // card_progress_bar_txt.innerHTML = "0%"

    const switch_label = document.createElement('label');
    switch_label.classList.add('switch_label');
    const switch_input = document.createElement('input');
    switch_input.type = 'checkbox';
    switch_input.classList.add('switch_input');
    const switch_span = document.createElement('span');
    switch_span.classList.add('switch_span');

    switch_input.onclick = function(){print(switch_input,switch_span)};

    switch_span.appendChild(card_emoji);
    switch_label.appendChild(switch_input);
    switch_label.appendChild(switch_span);

    card.classList.add('card');
    card.style.background = "var(--gradient-" + colorSelected.split('-')[1] + ")";

    card_title.innerText = contentAsideTitle_text;
    card_amount.innerText = contentAsideAmount_text + " €";

    //------------------------------------------
    card_add_plus.onclick = function (){card_add_plus_f(this, contentAsideAmount_text, card_add_plus_tooltip_input, card_progress_bar_txt)}

    card_progress.appendChild(card_progress_bar);
    card_progress.appendChild(card_progress_bar_txt);

    card_add_plus.appendChild(card_add_plus_i);

    card_add.appendChild(card_add_plus);
    card_add_plus_tooltip.appendChild(card_add_plus_tooltip_input);
    card_add.appendChild(card_add_plus_tooltip);

    card_modif.appendChild(card_progress);
    card_modif.appendChild(card_add);
    //------------------------------------------
    card_header.appendChild(switch_label);
    card_header.appendChild(card_title);
    card_header.appendChild(card_amount);

    card.appendChild(card_header);
    card.appendChild(card_textarea);
    card.appendChild(card_modif);


    if(contentAsideTitle_text !== "" && contentAsideAmount_text !== ""){
        contentAsideAmount.classList.remove("errorInput");
        contentAsideTitle.classList.remove("errorInput");
        errorInput_txt.classList.remove("showElem");

        main[0].classList.remove('showCreateTask_blur');
        aside[0].classList.remove('showCreateTask');
        scrollableContent.appendChild(card);
    }else{
        contentAsideAmount.classList.add("errorInput");
        contentAsideTitle.classList.add("errorInput");
        errorInput_txt.classList.add("showElem");
    }

    // --

    contentAsideTitle.value = "";
    contentAsideAmount.value = "";
    contentAsideDeadLine.value = "";
}

contentAsideAmount.addEventListener('keyup', () =>{
    if(contentAsideTitle.value !== "" && contentAsideAmount.value !== ""){
        errorInput_txt.classList.remove("showElem");
    }else if(contentAsideAmount.value !== ""){
        contentAsideAmount.classList.remove("errorInput");
    }else{
        contentAsideAmount.classList.add("errorInput");
        errorInput_txt.classList.add("showElem");
    }
})
contentAsideTitle.addEventListener('keyup', () =>{
    if(contentAsideTitle.value !== "" && contentAsideAmount.value !== ""){
        errorInput_txt.classList.remove("showElem");
    }else if(contentAsideTitle.value !== ""){
        contentAsideTitle.classList.remove("errorInput");
    }else{
        contentAsideTitle.classList.add("errorInput");
        errorInput_txt.classList.add("showElem");
    }
})