// JS FILE

const grid_addStock = document.querySelector('.grid-addStock');
const grid_content = document.querySelector('.grid-content');

grid_addStock.addEventListener('click', AR_card);

let c_row = 1;
let c_col = 0;

function AR_card(){
    // c_row++;
    c_col++;

    const card = document.createElement('div');
    const card_title = document.createElement('p');
    const card_button = document.createElement('button');
    card_button.classList.add('card_button')
    card_button.innerText = "...";
    card_button.onclick = function (){expand_1(this)};

    card.classList.add('grid-card');

    card.appendChild(card_title);
    card.appendChild(card_button);

    // console.log("c_row : " + c_row, "c_col : " + c_col)

    if (c_col % 4 === 0){
        c_col = 1;
        c_row++;
    }

    card_title.innerText = c_row +"/"+ c_col;
    card.setAttribute("data-gridArea", c_row +"/"+ c_col)

    grid_content.appendChild(card);

}

let row_end;

function expand_m1(element){
    const grid_card = element.closest('.grid-card');
    const grid_button = grid_card.querySelector('.card_button');
    grid_card.style.background = "green";

    let card_gridArea = grid_card.getAttribute("data-gridArea");
    let array_card_gridArea = card_gridArea.split('/');

    grid_card.style.gridArea = array_card_gridArea[0] + " / "
        + array_card_gridArea[1] + " / "
        + array_card_gridArea[0] +  " / "
        + Number(array_card_gridArea[1]);

    console.log("expand_m1")

    grid_button.onclick = function (){expand_1(this)};
}

function expand_1(element){
    const grid_card = element.closest('.grid-card');
    const grid_button = grid_card.querySelector('.card_button');
    grid_card.style.background = "red";

    let card_gridArea = grid_card.getAttribute("data-gridArea");
    let array_card_gridArea = card_gridArea.split('/');

    if(array_card_gridArea[0] === "1"){row_end = 2}
    else{row_end = (array_card_gridArea[0])}

    grid_card.style.gridArea = array_card_gridArea[0] + " / "
        + array_card_gridArea[1] + " / span "
        + row_end +  " / "
        + Number(array_card_gridArea[1]);

    console.log("expand_1")

    grid_button.onclick = function (){expand_2(this)};
}
function expand_2(element){
    const grid_card = element.closest('.grid-card');
    const grid_button = grid_card.querySelector('.card_button');

    console.log("expand_2")

    grid_button.onclick = function (){expand_m1(this)};
}
