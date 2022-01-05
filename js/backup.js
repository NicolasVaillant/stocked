//JS FILE

const array_stocked_element = [];

function getDate(separator = "h"){
    const date_reminder = new Date();
    let h = date_reminder.getHours();
    if (h < 10) {
        h = "0" + h
    }
    let m = date_reminder.getMinutes();
    if (m < 10) {
        m = "0" + m
    }
    return h + separator + m;
}


function backup(hourSaveClick){

    const array_stocked_all = [];
    const scrollableContent = document.querySelector('.scrollableContent');
    const cards = scrollableContent.children;

    if(scrollableContent.childElementCount !== 0){
        for(let i = 0 ; i <= scrollableContent.childElementCount - 1; i++) {
            array_stocked_element.push(
                cards[i].style.background,
                cards[i].querySelector('.card_emoji').src.split("emoji/")[1],
                cards[i].querySelector('.card_title').innerHTML,
                cards[i].querySelector('.card_amount').innerHTML,
                cards[i].querySelector('.card_textarea').value,
                cards[i].querySelector('.card_progress_bar_txt').innerHTML
            )
            array_stocked_all.push(
                array_stocked_element.splice(0, array_stocked_element.length)
            )
        }
    }
    try{
        const stocked = {e : array_stocked_all, s : hourSaveClick, v : allMoney.value}
        localStorage.setItem("stocked", JSON.stringify(stocked));
    }catch (e) {console.log(e)}
}