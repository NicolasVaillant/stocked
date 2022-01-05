// JS FILE

function AR_card(localStorageStocked){

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
    const card_overlay = document.createElement('div');
    const card_progress = document.createElement('div');
    const card_progress_bar = document.createElement('div');
    const card_progress_bar_txt = document.createElement('p');

    const card_add_plus_i = document.createElement('i');
    const delete_card = document.createElement('i');

    card_add_plus_tooltip_input.type = "number";
    card_add_plus_tooltip_input.value = "5";

    card_add_plus_tooltip_input.classList.add('card_add_plus_tooltip_input');
    card_title.classList.add('card_title');
    card_amount.classList.add('card_amount');
    card_textarea.classList.add('card_textarea');

    card_header.classList.add('flexRow');
    card_header.classList.add('flexAlignL');
    card_header.classList.add('fontFamily');
    card_header.classList.add('card_header');

    card_emoji.classList.add('card_emoji');

    card_add_plus_i.classList.add('fas');
    card_add_plus_i.classList.add('fa-plus');

    delete_card.classList.add('fas');
    delete_card.classList.add('fa-times');
    delete_card.classList.add('delete_card');

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
    card_overlay.classList.add('card_overlay');
    card_progress.classList.add('card_progress');
    card_progress_bar.classList.add('card_progress_bar');
    card_progress_bar_txt.classList.add('card_progress_bar_txt');

    const switch_label = document.createElement('label');
    switch_label.classList.add('switch_label');
    const switch_label_cross = document.createElement('label');
    switch_label_cross.classList.add('switch_label_cross');

    const switch_input = document.createElement('input');
    switch_input.type = 'checkbox';
    switch_input.classList.add('switch_input');
    const switch_span = document.createElement('span');
    switch_span.classList.add('switch_span');

    switch_input.onclick = function(){print(switch_input,switch_span)};

    card.classList.add('card');

    if(localStorageStocked === undefined || localStorageStocked === "undefined"){
        card.style.background = "var(--gradient-" + colorSelected.split('-')[1] + ")";
        card_emoji.src = "ressources/emoji/" + emojiSelected + ".png";
        card_title.innerText = contentAsideTitle_text;
        card_amount.innerText = contentAsideAmount_text + " €";
        card_progress_bar_txt.innerHTML = "0%";

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
    }else{
        card.style.background = localStorageStocked[0];
        card_emoji.src = "ressources/emoji/" + localStorageStocked[1];
        card_title.innerText = localStorageStocked[2];
        card_amount.innerText = localStorageStocked[3];
        card_textarea.value = localStorageStocked[4]
        card_progress_bar_txt.innerHTML = localStorageStocked[5];

        card_progress_bar.style.width = localStorageStocked[5];

        scrollableContent.appendChild(card);
    }

    card_add_plus.onclick = function (){
        card_add_plus_f(
            this,
            contentAsideAmount_text,
            card_add_plus_tooltip_input,
            card_progress_bar_txt,
            localStorageStocked[5]);
        backup(getDate())
    }

    switch_label_cross.appendChild(delete_card);
    switch_label_cross.onclick = () => {deleteCard(card); backup(getDate())}

    switch_label.onmouseenter = () => {
        const timeout = setTimeout(() => {
            switch_label_cross.classList.add('show');
        },1000)
        switch_label.onmouseleave = () => {
            clearTimeout(timeout);
            switch_label_cross.classList.remove('show');}
    }


    switch_span.appendChild(card_emoji);
    switch_label.appendChild(switch_input);
    switch_label.appendChild(switch_span);
    switch_label.appendChild(switch_label_cross);
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
    card.appendChild(card_overlay);

    card.oncontextmenu = rightClickCard;

    contentAsideTitle.value = "";
    contentAsideAmount.value = "";
    contentAsideDeadLine.value = "";
}

function deleteCard(element){element.closest('.card').remove()}
