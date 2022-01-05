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
const resultAll = document.querySelector('.resultAll');
const calc = document.querySelector('.calc');
const inputStock = document.querySelector('.inputStock');
const allMoneyDiv = document.querySelector('.allMoney');
const card_add_plus_tooltip = document.querySelector('.card_add_plus_tooltip');
const errorInput_txt = document.querySelector('.errorInput_txt');

let arr_amount = [];
let arr_amount_calc = [];

let increment = 0;

allMoney.addEventListener('keyup', function (){
    resultAll.innerText = allMoney.value;
    backup(getDate());
},false);

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

    const localStorageStocked = JSON.parse(localStorage.getItem("stocked"));

    if(input.checked){
        card.classList.add('clickOnCard');
        setTimeout(function (){
            card.classList.remove('clickOnCard');
        }, 100);

        arr_amount.push(Number(card.children[0].children[2].innerHTML.split(" €")[0]));

        console.log(typeof Number(arr_amount[0]))


        for(let i = 0 ; i < arr_amount.length ; i++){
            arr_amount_calc.push(Number(allMoney.value) - Number(arr_amount[i]));
            console.log(Number(arr_amount_calc[i]))
            // console.log(Number(arr_amount_calc[i+1]) - Number(arr_amount_calc[i]))
        }

        resultAll.innerText = arr_amount_calc;
        console.log(arr_amount_calc)

        // console.log(arr_amount);
    }else{
        card.classList.remove('clickOnCard');
        arr_amount = [];
        resultAll.innerText = localStorageStocked.v;
        // console.log(arr_amount)
    }
}



function card_add_plus_f(element, max, step, text, init){

    //max = value input
    //step = 5

    console.log(init)

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
        if(init === "" || init === null){
            card_progress_bar.style.width = increment + "%";
        }else{
            card_progress_bar.style.width = init + increment + "%";
        }
        text.innerHTML = initial+5 + "%";
    }


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