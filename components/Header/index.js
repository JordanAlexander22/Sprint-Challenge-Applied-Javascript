// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component
// const headerContainer= document.querySelector('.header-container');

// const headerElements= Header() 
// headerContainer.appendChild(headerElements)


function HeadTitle(){ //made a function called HeadTtile
    const top = document.createElement('div');
    const date = document.createElement('span');
    const title = document.createElement('h1');
    const temp = document.createElement('span');  //grabbed all elements from given index and CreatedElement tag

    date.textContent = 'MARCH, 28 2019'; 
    title.textContent =  'Lambda Times'
    temp.textContent = '98°'


    top.classList.add('header');
    date.classList.add('date');  //added using classList header, temp and date
    temp.classList.add('temp');

    top.appendChild(date);
    top.appendChild(title);  //appeneded child. 
    top.appendChild(temp);

    console.log(HeadTitle); //consoled log the HeadTitle from the function 

    return top
}

const containHead = document.querySelector('.header-container'); //did a query selector to grab all what was in the .header-container
const elementHead = HeadTitle()
containHead.append(elementHead)